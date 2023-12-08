import { useState, useEffect } from "react";
import '../CSS/Products.css'

const API_URL = process.env.API_URL || 'http://localhost:8080'

// Component to render the data of a product
const Product = ({ data }) => (
    <div className="product">

        {/* Container for the name of the product */}
        <div className="container">
            <h3>{data.name}</h3>
        </div>

        {/* Container for the image and overlay
        containing the description and price */}
        <div className="container-img">
            {/* Product image, defaults to a Missing Image picture,
            if an error occurs */}
            <img
                src={data.img}
                onError={(e) => e.target.src = 'MissingImg.webp'}
                alt={"Image for " + data.name}
                className="product-image" />

            {/* Overlay for price and description */}
            <div className="product-overlay">
                <h3>Price: R{data.price}</h3>
                <div className='overlay-text'>{data.desc}</div>
            </div>
        </div>
    </div>
);

const Products = () => {
    const [products, setProducts] = useState([]);

    // Sends a GET request to the api for
    // the products and stores it in products
    useEffect(() => {
        fetch(`${API_URL}/api/products`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.json();
            })
            .then(products => setProducts(products))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            {/* Component for the Products page */}
            <h1 style={{ textAlign: "center" }}>Products</h1>
            <div className="products">
                {/* Displays every product in a Product component */}
                {products && products.length > 0 ?
                    products.map((product) => <Product data={product} key={product._id} />) : <h2>Loading products...</h2>}
            </div>
        </div>
    );
};

export default Products;