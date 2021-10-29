import { useEffect, useState } from "react"
import ListItem from "./ListItems/ListItem"
import axios from "axios"
import Loader from "../UI/Loader"
import { useHistory, useLocation, useParams } from "react-router-dom"

const Products = () => {
    const [items, setItems] = useState([])
    const [loader, setLoader] = useState(true)
    const params = useParams()
    const history = useHistory()
    const { search } = useLocation()
    const queryParams = new URLSearchParams(search).get("search")

    useEffect(() => {
        async function fetchItems() {
            try {
                let slug = `items.json`
                if(params.category) {
                    slug = `items-${params.category}.json`
                }
                if(queryParams) {
                    slug += `?search=${queryParams}`
                }
                // items-category-1.json
                const response = await axios.get(`https://react-guide-2021-default-rtdb.firebaseio.com/${slug}`)
                const data = response.data

                if(!data) {
                    handleNotFound();
                    return;
                }

                const transformedData = data.map((item, index) => {
                    return {
                        ...item,
                        id: index
                    }
                })
                // setLoader(false)
                setItems(transformedData)   
            } 
            catch (error) {
                // setLoader(false)
                console.log("Error: ", error)
                alert("Some error occurred");
            }
            finally {
                setLoader(false)
            }
        }

        fetchItems();

        return () => {
            setItems([])
            setLoader(true)
        }
    }, [params.category, queryParams])

    const handleNotFound = () => {
        history.push("/404")
    }

    return (
        <>
        <div className={"product-list"}>
            <div className={"product-list--wrapper"}>
                {
                    items.map(item => {
                        return (<ListItem key={item.id} data={item}/>)
                    })
                }
            </div>
        </div>
        { loader && <Loader/>}
        </>
    )
}

export default Products