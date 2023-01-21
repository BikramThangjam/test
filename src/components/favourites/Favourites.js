import "./Favourites.css";
import { favSelector } from "../../reducers/favReducer";
import { cartSelector } from "../../reducers/cartReducer";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFav } from "../../reducers/favReducer";
import { add, remove } from "../../reducers/cartReducer";
import { Link } from "react-router-dom";
const Favourites = () => {

    const favs = useSelector(favSelector).favs;
    const carts = useSelector(cartSelector).carts;

    const dispatch = useDispatch();


    const handleFav = (e, id) => {
        dispatch(removeFromFav(id));

    }

    const handleAddToCart = (p) => {
        dispatch(add(p));
    }

    const handleRemoveCart = (id) => {
        dispatch(remove(id));
    }

    return (
        <>

            {
                favs.length > 0 ? (
                    <div>
                        
                        <div className="row pt-5 pe-4 ps-4">
                            {
                                favs.map((item, i) =>
                                    <div className="col-12 col-xl-3 col-md-4 col-sm-6 mb-4 " key={i}>
                                        <div className="card h-100 card-main">
                                            <div className="d-flex justify-content-end">
                                                <i className="fa fa-heart heart-icon red" onClick={(e) => handleFav(e, item.id)}></i>
                                            </div>
                                            <Link className="img-link" to={`/products/${item.id}`}>
                                                <img src={item.image} className="card-img-top card-img" alt={item.title} />
                                            </Link>

                                            <div className="card-body">
                                                <h4 className="card-title lead fs-5">{item.title}</h4>
                                                <p className="lead fs-6">
                                                    Rating {item.rating && item.rating.rate}
                                                    <i className="fa fa-star star-color"></i>
                                                    <span className="ms-1 text-black-50">({item.rating.count})</span>
                                                </p>
                                                <p className="fs-3 ">${item.price}</p>
                                            </div>

                                            {
                                                carts.findIndex((current) => current.id === item.id) >= 0 ? (
                                                    <button className="removeCard-btn d-flex justify-content-center" onClick={() => handleRemoveCart(item.id)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart3 me-2" viewBox="0 0 16 16">
                                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                        </svg>
                                                        Remove Cart
                                                    </button>
                                                ) : (
                                                    <button className="addCart-btn d-flex justify-content-center" onClick={() => handleAddToCart(item)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart3 me-2" viewBox="0 0 16 16">
                                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                        </svg>
                                                        Add to Cart
                                                    </button>
                                                )
                                            }
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                ) : (
                    <div className=" pt-5 d-flex flex-column align-items-center">
                        <h3>There is no product in your favourites</h3>
                        <p>Add the products to your favourites to buy them later.</p>
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
                                <span className="">Continue Shopping</span>
                            </Link>
                        </div>
                    </div>
                )

            }

        </>
    )
}

export default Favourites;