import "./CartItem.css";
import { useDispatch } from "react-redux";
import { add, remove, decreaseCart } from "../../reducers/cartReducer";
import { Link } from "react-router-dom";

const CartItem = (props) => {

    const cartItem = props.item;
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(add(product));
    };
    const handleDecreaseCart = (product) => {
        dispatch(decreaseCart(product));
    };

    const handleRemoveFromCart = (product) => {
        dispatch(remove(product.id));
    };

    return (
        <>
            <div className="cart-item position-relative" key={cartItem.id}>
                <div className="cart-product">
                    <Link to={`/products/${cartItem.id}`}>
                        <img src={cartItem.image} alt={cartItem.title} />
                    </Link>
                    <div>
                        <h4 className="lead fs-6 px-3">{cartItem.title}</h4>
                        <h4 className="cart-product-price display-6 fs-5 px-3 py-3">${cartItem.price}</h4>
                    </div>
                </div>
                <div className="cart-product-quantity">
                    <button className="decreaseCart " onClick={() => handleDecreaseCart(cartItem)}>-</button>
                    <div className="count">{cartItem.quantity}</div>
                    <button className="increaseCart" onClick={() => handleAddToCart(cartItem)}>+</button>
                </div>
                <h4 className="cart-product-total-price fs-5">
                    ${parseFloat((cartItem.price * cartItem.quantity).toFixed(2))}
                </h4>
                <div className="px-3 del-btn" onClick={() => handleRemoveFromCart(cartItem)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                    </svg>
                </div>
            </div>

        </>



    );
}
export default CartItem;