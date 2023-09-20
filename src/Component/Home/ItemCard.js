
// import the custom Context hook
//styles
import { useState } from "react";
import styles from "../../Pages/Home/home.module.css";
import {useDispatch, useSelector} from "react-redux";
import { addToCart } from "../../redux/actions/productAction";
import { Link, useNavigate } from "react-router-dom";

// card for displaying each item on the screen
export default function ItemCard(props){
  const navigate = useNavigate();
    const {name, image,price,category, id}=props.item;
    const [currentHoverIndex, setCurrentHoverIndex] = useState(false);
    const dispatch = useDispatch();
    // function to add item's

    return(
        <div className={styles.links} onClick={()=> navigate(`/product/${id}`)} >  
  

            <div onMouseOver={() => {
              setCurrentHoverIndex(true);
            }}
            onMouseLeave={() => {
              setCurrentHoverIndex(false);
            }} 
            className={styles.productCard}>
                {/* image */}
                <div className={styles.productImage}>
                    <img src={image} alt="Product Image" />
                </div>
                {/* title  */}
                {/* Price  */}
                <div className={styles.info}>
                    <h2 className={styles.productTitle}> {name}</h2>
                    <span className={styles.productPrice}> ₹{price} </span>
                    {/* Add to cart button  */}
                    <button onClick={()=> dispatch(addToCart(props.item))}>Add to Cart</button>
                    <span className={styles.productPrice}> {category} </span>

                </div>
                <div
          className={`${styles.btnContainer}  ${currentHoverIndex == true && styles.active}`}
          >
          <div
            className={styles.edit}
            onClick={(event) => {
              props.handleEdit(id, name, price, category) ;
              // console.log(event)
              event.stopPropagation();
            }}
            >
            <img src="https://stalwart-wisp-382f3c.netlify.app/assets/edit.png" height="100%" alt="Edit" />
          </div>
          <div
            className={styles.delete}
            onClick={(event) => {
              props.handleDelete(id);
              event.stopPropagation();
            }}
            >
            <img src="https://stalwart-wisp-382f3c.netlify.app/assets/trash-bin.png" height="100%" alt="Delete" />
          </div>
        </div>
        </div>
        
        </div>
    )
}