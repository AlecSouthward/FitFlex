// Importing necessary dependencies and styles
import { useState, useEffect } from "react";
import '../CSS/Admin.css'

const API_URL = process.env.API_URL || 'http://localhost:8080'

// Functional component representing the Admin page
const Admin = () => {
    // State variables to manage products and the product being edited
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState('');

    // useEffect hook to fetch and display all products when the component mounts
    useEffect(() => {
        fetch(`${API_URL}/api/products/`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => setProducts(data))
            .catch(err => console.log(err));
    }, []);

    // Function to handle the editing of a product
    const handleEdit = (event) => {
        const { name, price, desc, img } = event.target;

        // Sending a PUT request to update the product
        fetch(`${API_URL}/api/products/` + editingProduct, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name.value,
                price: price.value,
                desc: desc.value,
                img: img.value,
            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
            })
            .then(() => {
                // Refreshes the page to display the changes
                window.location.reload();
            })
            .catch(err => console.log(err));


        event.preventDefault()
    };

    // Function to handle the deletion of a product
    const handleDelete = (id) => {
        // Sending a DELETE request to delete the product
        fetch(`${API_URL}/api/products/` + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
            })
            .then(() => {
                // Refreshes the page to display the changes
                window.location.reload();
            })
            .catch(err => console.log(err));

    };

    // Function to handle the creation of a new product
    const handleCreate = (event) => {
        const { name, price, desc, img } = event.target;

        // Sending a POST request to create a new product
        fetch(`${API_URL}/api/products/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name.value,
                price: price.value,
                desc: desc.value,
                img: img.value,
            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
            })
            .then(() => {
                // Refreshes the page to display the changes
                window.location.reload();
            })
            .catch(err => console.log(err));


        event.preventDefault()
    };

    // Component for rendering a single product and handling editing
    const AdminProduct = ({ product }) => {
        return (
            <div>
                {/* Conditional rendering based on whether the product is being edited */}
                {
                    editingProduct == product._id ?
                        <div>
                            {/* HTML for the product when the admin is editing it */}
                            <h3>Editing {product.name}</h3>
                            {/* Form for editing the product */}
                            <form onSubmit={(e) => handleEdit(e)} className="admin-product-editing">
                                {/* Input fields for editing the product attributes */}
                                <input placeholder="New Title..." name='name'
                                    defaultValue={product.name} required />
                                <input placeholder="New Price..." name='price'
                                    defaultValue={product.price} type='number' required />
                                <textarea placeholder="New Description..." name='desc'
                                    defaultValue={product.desc} rows={6} cols={20} required />
                                <input placeholder="New Image Link..." name='img'
                                    defaultValue={product.img} required />

                                <button>Confirm</button>
                            </form>
                        </div>
                        :
                        <div className="admin-product">
                            {/* Displaying product information when not being edited */}
                            <h3>{product.name}</h3>
                            <p>Price: {product.price}</p>
                            <p>{product.desc}</p>

                            {/* Displaying product image or a placeholder if missing */}
                            <img onError={(e) => e.target.src = 'MissingImg.webp'}
                                src={product.img} alt='Product' />
                            {/* Buttons for editing and deleting the product */}
                            <button onClick={() => setEditingProduct(product._id)}>Edit Data</button>
                            <button onClick={() => handleDelete(product._id)}>Delete</button>
                        </div>
                }

                {/* Horizontal line for separation between products */}
                <hr />
            </div>
        );
    };

    return (
        <div>
            {/* Conditional rendering based on admin permissions */}
            {
                localStorage.getItem("perms") == 1 ?
                    <div>
                        {/* Admin page header */}
                        <h1>Admin Page</h1>

                        {/* Form for creating a new product */}
                        <h2>Create new Product</h2>
                        <form onSubmit={(e) => handleCreate(e)} className="admin-product-editing">
                            <input placeholder="New Title..." name='name' required />
                            <input placeholder="New Price..." name='price' type='number' required />
                            <textarea placeholder="New Description..." name='desc'
                                rows={6} cols={20} required />
                            <input placeholder="New Image Link..." name='img' required />

                            <button>Create new Product</button>
                        </form>

                        {/* Section for displaying existing products */}
                        <h2>Products</h2>
                        <ul style={{ listStyle: 'none' }}>
                            {/* Mapping through products and rendering AdminProduct component for each */}
                            {products.map((product) =>
                                <li key={product._id}> <AdminProduct product={product} /> </li>
                            )}

                            {/* Adding some spacing */}
                            <br /><br />
                        </ul>
                    </div>
                    :
                    <div>
                        {/* Displaying an error message for unauthorized access */}
                        <h1>Error 403</h1>
                        <h3>Sign into an admin account to access this page!</h3>
                    </div>
            }
        </div>
    );
};

// Exporting the Admin component as the default export
export default Admin;