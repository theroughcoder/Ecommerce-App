// react hooks
import { useState, useEffect } from "react";

// required components filter and main content
import MainContent from "../../Component/Home/MainContent";

// css styles
import styles from "./home.module.css";

// show loading spinner on first render
import Loader from "../../Component/Loader/Loader";


// render homepage
export function Home(){

    // loading status by default true
    const [isLoading,setLoading]=useState(true);

    // to whether show/hide the filter bar on homepage
    const [applyFilter,setApplyFilter]=useState(false);

    // to filter item on the basis of price and item category
    const [price,setPrice]=useState(5000);
    const [category,setCategory]=useState('none');

    // for searched item
    const [search,setSearch]=useState('');

    // hide loader spinner
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },400);            
    },[]);


    // return component
    return(
        <>
        {/* checking whether to show/hide loading spinner */}
        {isLoading?<Loader />:
            <>
    
            {/* rendering all the products and filter bar */}
            <div className={styles.mainContainer}>

                {/* show all the products */}
                {/* props to apply filter on the products */}
                <MainContent search={search}
                             price={price}
                             category={category}
                             applyFilter={applyFilter} />
            </div>
        </>}
        </>
    );
}