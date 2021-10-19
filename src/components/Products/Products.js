import { useEffect, useState } from "react"
import ListItem from "./ListItems/ListItem"
import axios from "axios"

const Products = () => {
    const [items, setItems] = useState([])

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
                setItems(transformedData)   
            } 
            catch (error) {
                console.log("Error: ", error)
                alert("Some error occurred");
            }
        }

        fetchItems();
    }, [])

    const updateItemTitle = async (itemId) => {
        console.log(`Item with ID: ${itemId}`)
        try {
            let title = `Update Title #Item-${itemId}`
            await axios.patch(`https://react-guide-2021-default-rtdb.firebaseio.com/items/${itemId}.json`, {
                title: title
            })
            let data = [...items]
            let index = data.findIndex(e => e.id === itemId)
            data[index]['title'] = title

            setItems(data)
        }
        catch(error) {
            console.log("Error Updating the data!");
        }
    }

    return (
        <div className={"product-list"}>
            <div className={"product-list--wrapper"}>
                {/* <ListItem data={items[0]}></ListItem>
                <ListItem data={items[1]}></ListItem> */}
                {
                    items.map(item => {
                        return (<ListItem key={item.id} data={item} updateItemTitle={updateItemTitle}/>)
                    })
                }
                {/* {[<ListItem data={item[0]}/>,<ListItem data={item[1]}/>,<ListItem data={item[3]}/>]} */}
            </div>
        </div>
    )
}

export default Products