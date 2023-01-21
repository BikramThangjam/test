
import "./Cart.css";
import CartItem from "../../components/CartItem/CartItem";
import { useSelector } from "react-redux";
import { cartSelector } from "../../reducers/cartReducer.js"
import {getTotal } from "../../reducers/cartReducer";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Cart = () => {

    const items = useSelector(cartSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotal());
    }, [items, dispatch])

    return (
        <div>

            <div className="cart-container mb-5">

                {
                    items.carts.length === 0 ? (
                        <div className="cart-empty">
                            <p className="fs-3">Your cart is empty!</p>
                            <div className="start-shopping">
                                <Link to="/">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                        className="bi bi-arrow-left"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                        />
                                    </svg>
                                    <span>Start Shopping</span>
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <>
                           
                            <section className="mb-5  carts-bg d-flex gap-3 p-2 pe-5">
                                <div className="ps-4 pe-5">
                                    <div className="titles ">
                                        <h3 className="product-title fw-semibold">Product</h3>
                                        <h3 className="quantity fw-semibold">Quantity</h3>
                                        <h3 className="total fw-semibold">Total</h3>
                                    </div>
                                    <div className="cart-items">
                                        {items &&
                                            items.carts.map((cartItem, i) => (
                                                <CartItem item={cartItem} key={i} />
                                            ))}
                                    </div>
                                </div>

                                <div className="cart-summary ps-4 pe-5 me-5">
                                    {/* <button className="btn btn-outline-danger" onClick={() => handleClearCart()}>
                                        Clear All Carts
                                    </button> */}
                                    <div className="lead fs-4 fw-bold mb-3">Order Summary</div>
                                    <div className="cart-checkout">
                                        
                                        <div className="subtotal ">
                                            <h3 className="lead fs-7">Subtotal</h3>
                                            <span className="amount fs-7">${items.totalPrice}</span>
                                        </div>
                                        <div className="subtotal ">
                                            <h3 className="lead fs-7">Shipping Estimate</h3>
                                            <span className="amount fs-7">$5</span>
                                        </div>
                                        <div className="subtotal ">
                                            <h3 className="lead fs-7">Tax Estimate</h3>
                                            <span className="amount fs-7">$5</span>
                                        </div>
                                        <div className="subtotal ">
                                            <h3 className="lead fs-7 fw-bold">Order Total</h3>
                                            <span className="amount fs-7">${parseFloat((items.totalPrice + 5 + 5).toFixed(2))}</span>
                                        </div>
                                
                                        <button>Proceed to Pay</button>
                                        <div className="continue-shopping">
                                            <Link to="/">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    fill="currentColor"
                                                    className="bi bi-arrow-left"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                                    />
                                                </svg>
                                                <span>Continue Shopping</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>

                    )
                }
            </div>

        </div>
    );
}

export default Cart