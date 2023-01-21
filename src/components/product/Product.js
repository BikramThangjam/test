import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { addToFav } from "../../reducers/favReducer";
import { add,remove} from "../../reducers/cartReducer";
import { cartSelector } from "../../reducers/cartReducer";
import { Link } from "react-router-dom";

const Product = (props) => {
    const product = props.item;
    const carts = useSelector(cartSelector).carts;
    const dispatch = useDispatch();

    const itemIndex = carts.findIndex((item) => item.id === product.id);

    const handleFav = (e, p) => {
        e.target.classList.add("red");
        dispatch(addToFav(p));
    }

    const handleAddToCart = (p) => {
        dispatch(add(p));
    }

    const handleRemoveCart = (id)=>{
        dispatch(remove(id));
    }

    return (

        <div className="card h-100 card-main">
            <div className="d-flex justify-content-end">
                <i className="fa fa-heart heart-icon" onClick={(e) => handleFav(e, product)}></i>
            </div>
            <Link className="img-link" to={`/products/${product.id}`}>
                <img src={product.image} className="card-img-top card-img" alt={product.title} />
            </Link>
            <div className="card-body pb-1">
                <h4 className="card-title lead fs-5">{product.title}</h4>
                <p className="lead fs-6 ">
                    Rating {product.rating && product.rating.rate}
                    <i className="fa fa-star star-color"></i>
                    <span className="ms-1 text-black-50">({product.rating.count})</span>
                </p>
                <p className="fs-3 mb-0">${product.price}</p>
            </div>

            {
                itemIndex >= 0 ? (
                    <button className="removeCard-btn d-flex justify-content-center" onClick={() => handleRemoveCart(product.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart3 me-2" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                        Remove Cart
                    </button>
                ) : (
                    <button className="addCart-btn d-flex justify-content-center" onClick={() => handleAddToCart(product)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart3 me-2" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                        Add to Cart
                    </button>
                )
            }

        </div>

    )
}

export default Product;