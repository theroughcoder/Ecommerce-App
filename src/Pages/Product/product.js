import { useParams } from "react-router-dom";
import styles from "./product.module.css";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/productAction";

function Product(){
    // const navigate = useNavigate();
      const {id} = useParams();
      const dispatch = useDispatch();
     
        const [product, setProduct] = useState({});
        useEffect(() => {
            function fetchData() {

                    fetch("http://localhost:3000/data/"+id)
                            .then((response) => {
                                    if (!response.ok) {
                                            throw new Error(`HTTP error! Status: ${response.status}`);
                                    }
                                    return response.json();
                            })
                            .then((data) => {
                                    setProduct(data)
                                    // console.log(data); 
                            })
                            .catch((error) => {
                                    console.error(`Fetch error: ${error.message}`);
                            });
            }
            fetchData();
    }, [])
  
    
  const addToCartHandler = async() => {
    
  }
  
  return(
      <>
  
      <div className={styles.productContainer}>
        
    
        <div class={styles.productImage}>
            <img src={product.image} alt="Product Image"/>
        </div>
        <div class={styles.productInfo}>
            <h2>Product Description</h2>
            <p>{product.name}</p>
            <p><strong>Price: ₹{product.price}</strong></p>
            <button onClick={()=> dispatch(addToCart(product))} id="add-to-cart">Add to Cart</button>
        </div>

           
      </div>
  
    </>
  )
  }
  
  
  export default Product; 