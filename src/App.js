import Products from "./components/Products/Products";
import Header from "./components/Layout/Header"
import Subheader from "./components/Layout/Subheader";
import { useState } from "react";

const App = () => {
  const [cartItems, setCartItems] = useState(0)

  const handleAddItem = () => {
    setCartItems(cartItems + 1)
  }

  const handleRemoveItem = () => {
    setCartItems(cartItems - 1)
  }

  return (
    <div>
      <Header count={cartItems}/>
      <Subheader/>
      <Products onAddItem={handleAddItem} onRemoveItem={handleRemoveItem}/>
    </div>
  );
}

export default App;
