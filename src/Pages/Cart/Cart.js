
// react hooks
import { useEffect, useState } from "react";

// react router
import { useNavigate } from "react-router-dom";

// custom context hook for values from product and authentication

// required component's 
// single cartItem
import CartItem from "../../Component/Cart/CartItem";
// page loader
import Loader from "../../Component/Loader/Loader";


// css styles
// styles from other css file

// styles for cart.js
import secondStyles from "../Cart/cart.module.css";


// for toast notification
import { toast } from "react-toastify";
import { useSelector } from "react-redux";


// render the cart page
export function Cart(){

    // to show/hide the loading spinner on the page
    const [isLoading,setLoading]=useState(true);
    const {cart} = useSelector((state) => state);
   

    // to navigate to some page
    const navigate=useNavigate();

    // to hide loading spinner after given time
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },300);            
    },[]);



    


    return(
        <>
        {/* condition to show/hide the loading spinner */}
        {isLoading?<Loader />:
            // main container of the page
            <div >

                {/* rendering all the products within the user's cart */}
              
                    {/* if cart is empty  */}
                    {cart.length === 0 ?
                                    // render this msg
                                    <h1>Nothing in Your Cart !!!</h1>
                                    // else render all the product's one  by one
                                    :cart.map((product,i) => <CartItem key={i}
                                                        product={product} i = {i}/>)
                    }
             
            </div>
        }
        </>
    );
}