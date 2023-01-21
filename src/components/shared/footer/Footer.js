import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (

        <footer className="text-center text-dark footer-bg">

            <div className="container">

                <section className="mt-5">

                    <div className="row text-center d-flex justify-content-center pt-5">

                        <div className="col-md-2 col-sm-2 col-xs-6">
                            <h6 className="text-uppercase font-weight-bold">
                                <Link to="#" className="text-white footer-link">About us</Link>
                            </h6>
                        </div>



                        <div className="col-md-2 ">
                            <h6 className="text-uppercase font-weight-bold">
                                <Link to="#" className="text-white footer-link">Products</Link>
                            </h6>
                        </div>



                        <div className="col-md-2 ">
                            <h6 className="text-uppercase font-weight-bold">
                                <Link to="#" className="text-white footer-link">Awards</Link>
                            </h6>
                        </div>



                        <div className="col-md-2 ">
                            <h6 className="text-uppercase font-weight-bold">
                                <Link to="#" className="text-white footer-link">Help</Link>
                            </h6>
                        </div>



                        <div className="col-md-2">
                            <h6 className="text-uppercase font-weight-bold">
                                <Link to="#" className="text-white footer-link">Contact</Link>
                            </h6>
                        </div>

                    </div>

                </section>


                <hr className="my-5" />


                <section className="mb-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8">
                            <p>
                                If you would like to experience the best of online shopping for men, women and kids in India, you are at the right place. ShopLane is the ultimate destination for fashion and lifestyle, being host to Link wide array of merchandise including clothing, footwear, accessories, jewellery, personal care products and more. It is time to redefine your style statement with our treasure-trove of trendy items. Our online store brings you the latest in designer products straight out of fashion houses. You can shop online at ShopLane from the comfort of your home and get your favourites delivered right to your doorstep.
                            </p>
                        </div>
                    </div>
                </section>



                <section className="text-center mb-5">
                    <Link to="#" className="text-color me-4">
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link to="#" className="text-color me-4">
                        <i className="fab fa-twitter"></i>
                    </Link>
                    <Link to="#" className="text-color me-4">
                        <i className="fab fa-google"></i>
                    </Link>
                    <Link to="#" className="text-color me-4">
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <Link to="#" className="text-color me-4">
                        <i className="fab fa-linkedin"></i>
                    </Link>
                    <Link to="#" className="text-color me-4">
                        <i className="fab fa-github"></i>
                    </Link>
                </section>

            </div>



            <div className="text-center p-3 d-flex gap-3 justify-content-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                <span className="fw-bold">© 2020 Copyright</span> 
                <Link className="text-white fs-6" to="/">ShopLane.com</Link>
            </div>

        </footer>

    )
}

export default Footer;
