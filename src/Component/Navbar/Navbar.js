
// custom context hook

// css styles 
import { useSelector } from "react-redux";
import styles from "./navbar.module.css"

// import form react router
import { Outlet, NavLink } from "react-router-dom";


// Navbar Component
export default function Navbar() {
    // user's login status
    const { cart } = useSelector((state) => state);

    return (
        <>
            {/* main container */}
            <div className={styles.navbarContainer}>
                {/* app heading */}
                <div className={styles.appName}>
                    <NavLink to="/">
                        Buy Busy
                    </NavLink>
                </div>

                {/* all the navigation link */}
                <div className={styles.navLinks}>

                    {/* homepage link */}
                    <NavLink to="/">
                        <span>
                            Home
                        </span>
                    </NavLink>


                    {/* cart link */}
                    {/* show when user is logged in */}
                    <NavLink to="/cart" >
                        <div className={styles.cart}>
                        <span>
                            Cart
                        </span>
                        {cart.length != 0 &&
                            <span className={styles.cartCircle}> 
                                {cart.reduce((a, b) => ({qty: a.qty + b.qty})).qty}
                            </span>
                        }
                        </div>
                    </NavLink>


                    {/* for signIN and signOut */}
                    <NavLink to ="/create-product">
                        <span>
                            Create Product
                        </span>
                    </NavLink>
                </div>
            </div>
            {/* render child pages */}
            <Outlet />
        </>
    )
}