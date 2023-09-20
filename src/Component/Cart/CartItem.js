
// custom context hook for values (product)

// css styles from old other file
import oldStyles from "../../Pages/Home/home.module.css"
// new css styles 
import styles from "../../Pages/Cart/cart.module.css";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/productAction";


// render single cart item 
export default function CartItem(props){

    // product data from props
    const {name,image,price,category,qty}=props.product;
    const dispatch = useDispatch();
    // required functions from custom hook (product)

    return(
        <>
            <div className={styles.mainContainer}>
                    {/* image container */}
                    <div className={styles.imageContainer}>
                        {/* product image */}
                        <img src={image} alt={category} />
                    </div>

                    {/* description of the product name,price, add button */}
                
                        {/* product name */}
                        <div className={styles.namePrice}>
                            {name}
                        </div>
                        
                        <div className={styles.priceQuant}>
                            {/* price of the product */}
                            <div className={styles.price}>
                                ₹{price}   
                            </div>

                            {/* quantity of the product */}
                            <div className={styles.quantity}>

                                {/* to decrease product quantity */}
                                <span onClick={()=> dispatch(removeFromCart(props.i, true))}  className={styles.minus}>
                                    <i class="fa-solid fa-circle-minus"
                                       ></i> 
                                </span>

                                {/* quantity */}
                                &nbsp; {qty} &nbsp;

                                {/* increase product quantity */}
                                <span onClick={()=> dispatch(addToCart(props.product))} className={styles.plus}>
                                    <i class="fa-solid fa-circle-plus"
                                        ></i>    
                                </span>
                                
                            </div>

                        </div>

                        {/* remove from cart button */}
                        <div className={styles.btnContainer}>
                            <button  onClick={()=> dispatch(removeFromCart(props.i))}  className={styles.removeBtn}
                                    >
                                Remove
                            </button>
                        </div>

            </div>
                

               

          
        </>
    )
}