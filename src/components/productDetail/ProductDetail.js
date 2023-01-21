
import "./ProductDetail.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {useSelector, useDispatch } from "react-redux";
import { cartSelector } from "../../reducers/cartReducer";
import { add,remove } from "../../reducers/cartReducer";
const ProductDetail = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const carts = useSelector(cartSelector).carts;
    useEffect(() => {

        const getProduct = () => {
            setLoading(true);
            fetch(`https://fakestoreapi.com/products/${id}`)
                .then(res => res.json())
                .then(json => {
                    setProduct(json);
                    //console.log(json);
                    setLoading(false);
                })

        }
        getProduct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleAddCart = (product) => {
        dispatch(add(product));
    }
    const handleRemoveCart = (product)=>{
        dispatch(remove(product));
    }

    const Loading = () => {
        return (

            <SkeletonTheme baseColor="#e6e6e6" highlightColor="#ffffff">
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6" style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={40} count={3} />
                    <Skeleton height={20} width={150} />
                    <Skeleton height={55} width={150} />
                    <Skeleton height={20} count={3} />
                    <div className="d-flex gap-3">
                        <Skeleton height={50} width={100} />
                        <Skeleton height={50} width={100} />
                    </div>
                </div>
            </SkeletonTheme>

            

        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="p-div col-md-6 col-sm-12 col-xs-12 ">
                    <img className="p-img" src={product.image} alt={product.title} height="350px" width="350px" />
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12">
                    <h4 className="text-uppercase text-black-50 mt-3">{product.category}</h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star "></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        ${product.price}
                    </h3>
                    <p className="lead">{product.description}</p>
                    <div className="d-flex gap-2">
                    {
                        carts.findIndex((current) => current.id === product.id) >= 0 ? (
                            <button className="removeCard-btn d-flex justify-content-center align-items-center" onClick={() => handleRemoveCart(product.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart3 me-2" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                </svg>
                                Remove Cart
                            </button>
                        ) : (
                            <button className="addCart-btn d-flex justify-content-center" onClick={() => handleAddCart(product)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart3 me-2" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                </svg>
                                Add to Cart
                            </button>
                        )
                    }
                    
                    
                        <button className="gotoCart-btn d-flex justify-content-center align-items-center" onClick={() => handleAddCart(product)}>
                            <Link className=" goto-link " to="/cart">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart3 me-2" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                </svg>
                                Go to cart
                            </Link>
                        </button>
                    </div>                   
                </div>
            </>
        ) 
    }

    return (

        <div className="container-fluid product-container py-3 ">
            <div className="row py-5 w-75 mx-auto">
                {loading ? <Loading /> : <ShowProduct />}
            </div>
        </div>

    )
}
export default ProductDetail;