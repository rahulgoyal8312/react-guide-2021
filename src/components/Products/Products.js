import { useEffect, useState } from "react"
import ListItem from "./ListItems/ListItem"
import axios from "axios"

const Products = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        // fetch(`https://react-guide-2021-default-rtdb.firebaseio.com/items.json`)
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data)
        // })
        // .catch(error => {
        //     console.log(error)
        // })

        axios.get('https://react-guide-2021-default-rtdb.firebaseio.com/items.json')
        .then(response => {
            const data = response.data
            const transformedData = data.map((item, index) => {
                return {
                    ...item,
                    id: index
                }
            })
            setItems(transformedData)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <div className={"product-list"}>
            <div className={"product-list--wrapper"}>
                {/* <ListItem data={items[0]}></ListItem>
                <ListItem data={items[1]}></ListItem> */}
                {
                    items.map(item => {
                        return (<ListItem key={item.id} data={item}/>)
                    })
                }
                {/* {[<ListItem data={item[0]}/>,<ListItem data={item[1]}/>,<ListItem data={item[3]}/>]} */}
            </div>
        </div>
    )
}

export default Products