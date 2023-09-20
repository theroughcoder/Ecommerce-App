// src/components/ProductForm.js

import React, { useState } from 'react';
import styles from './createProduct.module.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { url } from '../..';

function CreateProduct() {
    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState(null);
    const navigate = useNavigate();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // POST request using fetch()
        fetch(`${url}/data`, {

            // Adding method type
            method: "POST",

            // Adding body or contents to send
            body: JSON.stringify({
                name: productName,
                category: productCategory,
                price: productPrice,
                image: productImage
            }),

            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

            // Converting to JSON
            .then(response => response.json())

            // Displaying results to console
            .then(json => {
                toast.success('Product Created successfully');
                navigate('/');
            })
            .catch(function(res){ toast.error('Found error in creating the product') })

    };

    return (
        <div className={styles.container}>
            <h1>Create a New Product</h1>
            <form className={styles.form} onSubmit={handleFormSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="product-name">Product Name:</label>
                    <input
                        type="text"
                        id="product-name"
                        name="product-name"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="product-description">Category:</label>
                    <input
                        type="text"
                        id="product-description"
                        name="product-description"
                        value={productCategory}
                        onChange={(e) => setProductCategory(e.target.value)}
                        required
                    ></input>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="product-price">Price:</label>
                    <input
                        type="number"
                        id="product-price"
                        name="product-price"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                        step="0.01"
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="product-image">Product Image URL:</label>
                    <input
                        type="text"
                        id="product-image"
                        name="product-image"
                        onChange={(e) => setProductImage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Create Product</button>
            </form>
        </div>
    );
}

export default CreateProduct;
