import "./Products.css";
import Product from "../product/Product";

const Products = (props) => {

    const products = props.items;

    const ShowProducts = () => {
        return ( 
            <div className="row mt-4 mb-4 p-4">  
                {
                    products.map((p,i)=>
                        <div className="col-12 col-xl-3 col-md-4 col-sm-6 mb-4 pe-4 ps-4" key={i}>
                            <Product item={p} key={i}/>
                        </div>                   
                    ) 
                }
            </div>                                                         
        )
    }


    return (
        <ShowProducts/>
    )
}

export default Products;