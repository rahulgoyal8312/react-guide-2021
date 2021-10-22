import { useEffect, useState } from "react"
import ListItem from "./ListItems/ListItem"
import axios from "axios"
import Loader from "../UI/Loader"

const Products = ({ onAddItem, onRemoveItem }) => {
    const [items, setItems] = useState([])
    const [loader, setLoader] = useState(true)
    const [presentItems, setPresentItems] = useState([])

    useEffect(() => {
        async function fetchItems() {
            try {
                const response = await axios.get('https://react-guide-2021-default-rtdb.firebaseio.com/items.json')
                const data = response.data
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
    }, [])

    const handleAddItem = id => {
        if(presentItems.indexOf(id) > -1) {
            return;
        }
        setPresentItems([...presentItems, id])
        onAddItem();
    }

    const handleRemoveItem = id => {
        let index = presentItems.indexOf(id)
        if(index > -1) {
            let items = [...presentItems]
            items.splice(index, 1)
            setPresentItems([...items]);
            onRemoveItem();
        }
    }

    return (
        <>
        <div className={"product-list"}>
            <div className={"product-list--wrapper"}>
                {/* <ListItem data={items[0]}></ListItem>
                <ListItem data={items[1]}></ListItem> */}
                {
                    items.map(item => {
                        return (<ListItem onAdd={handleAddItem} onRemove={handleRemoveItem} key={item.id} data={item}/>)
                    })
                }
                {/* {[<ListItem data={item[0]}/>,<ListItem data={item[1]}/>,<ListItem data={item[3]}/>]} */}
            </div>
        </div>
        { loader && <Loader/>}
        </>
    )
}

export default Products