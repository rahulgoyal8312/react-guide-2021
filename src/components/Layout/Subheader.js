import { NavLink } from "react-router-dom"

const Subheader = () => {
    return (
        <div className="subheader-container">
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink exact to="/category-1">Category 1</NavLink></li>
                <li><NavLink exact to="/category-2">Category 2</NavLink></li>
                <li><NavLink exact to="/category-3">Category 3</NavLink></li>
                <li><NavLink exact to="/category-4">Category 4</NavLink></li>
                {/* <li><a href="">Home</a></li>
                <li><a href="">Category 1</a></li>
                <li><a href="">Category 2</a></li>
                <li><a href="">Category 3</a></li>
                <li><a href="">Category 4</a></li> */}
            </ul>
        </div>
    )
}

export default Subheader