import { useState } from "react"
import ListItem from "./ListItems/ListItem"

const Products = () => {
    const [items, setItems] = useState([
        {
            id: 0,
            title: "Title of this Item 1",
            price: 450,
            discountedPrice: 340,
            thumbnail: "placeholder.png"
        },
        {
            id: 1,
            title: "Title of this Item 2",
            price: 100,
            discountedPrice: 80,
            thumbnail: "placeholder.png"
        },
        {
            id: 2,
            title: "Title of this Item 3",
            price: 100,
            discountedPrice: 80,
            thumbnail: "placeholder.png"
        },
        {
            id: 3,
            title: "Title of this Item 4",
            price: 100,
            discountedPrice: 80,
            thumbnail: "placeholder.png"
        }
    ])

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