import { Fragment, useState } from "react"
import Modal from "../UI/Modal"
import CartItem from "./CartItem"
import OrderSuccessModal from "../UI/OrderSuccess"
import { connect } from "react-redux"
import { addItemHandler, removeItemHandler, clearCartHandler } from "../../actions"

const Cart = ({ 
    items, 
    totalAmount, 
    addItemHandler, 
    removeItemHandler, 
    clearCartHandler 
}) => {
    const [showModal, setShowModal] = useState(false)
    const [orderModal, setOrderModal] = useState(false)

    const handleModal = () => {
        setShowModal(previousState => !previousState)
    }

    const handleOrderModal = () => {
        setShowModal(false);
        clearCartHandler()
        setOrderModal(previous => !previous)
    }

    return (
        <Fragment>
            <button onClick={handleModal}>
                <span data-items={items.length}>Cart</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart-plus" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="6" cy="19" r="2" />
                    <circle cx="17" cy="19" r="2" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                    <path d="M15 6h6m-3 -3v6" />
                </svg>
            </button>
            {
                showModal &&
                <Modal onClose={handleModal}>
                    <div className="checkout-modal">
                        <h2>Checkout Modal</h2>
                        <div className="checkout-modal_list">
                            {
                                items.length > 0 ?
                                items.map(item => {
                                    return (
                                        <CartItem 
                                            data={item} 
                                            onEmitIncreaseItem={() => addItemHandler(item)} 
                                            onEmitDecreaseItem={() => removeItemHandler(item.id)} 
                                            key={item.id}
                                        />
                                    )
                                })
                                :
                                <div className="empty-cart">Please add something in your cart!</div>
                            }
                        </div>
                        { 
                            items.length > 0 &&
                            <div className="checkout-modal_footer">
                                <div className="totalAmount">
                                    <h4>Total Amount: </h4>
                                    <h4>
                                        { totalAmount }
                                        <span style={{marginLeft: "4px"}}>INR</span>
                                    </h4>
                                </div>
                                <button onClick={handleOrderModal}>Order Now</button>
                            </div>
                        }
                    </div>
                </Modal>
            }
            { orderModal && <OrderSuccessModal onClose={handleOrderModal}/> }
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        totalAmount: state.totalAmount
    }
}

const mapDispatchToProps = {
    addItemHandler,
    removeItemHandler,
    clearCartHandler
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)