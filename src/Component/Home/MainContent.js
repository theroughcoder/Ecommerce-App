
// import styles 
import { Form } from "../Form/form";
import styles from "../../Pages/Home/home.module.css";

// import component to render a single item in the list
import ItemCard from "./ItemCard";

// custom context hook 
import { useEffect } from "react";
import { useState } from "react";
import { url } from "../..";


// to show all the products
export default function MainContent(props) {

        // values form props to filter list
        const { search, price, category, applyFilter } = props;
        const [products, setProducts] = useState([]);
        const [isEdit, setIsEdit] = useState(null);
        // const [sort, setSort] = useState(false);
        
        function openEditform(id, name, price, category){
                console.log("ok")
                setIsEdit({id, name, price, category})
        }
        function cancelform(){

                setIsEdit(null)
        }
        function deleteProduct(id){
                alert("Do you want to delete the product")
                fetch(`${url}/data/${id}`, {
                        method: 'DELETE',
                        headers: {
                          // Add any headers you need, e.g., authorization headers
                        },
                      })
                        .then((response) => {
                          if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                          }
                          setProducts((pre) => 
                          pre.filter((pro)=> id != pro.id && pro)
                  )
                          console.log('DELETE request was successful.');
                        })
                        .catch((error) => {
                          console.error(`Fetch error: ${error.message}`);
                        });
                
        }
        function editProduct(id, name, price, category){
                alert("Do you want to make the changes")
                console.log(id +" "+ name +" " +category+ " "+ price)
                fetch(`${url}/data/${id}`, {
                        method: 'PATCH',
                        headers: {
                          'Content-Type': 'application/json', // Set the content type based on your data
                          // Add any additional headers if needed
                        },
                        body: JSON.stringify({
                            name,
                            price,
                            category    
                        }), // Convert the data to JSON format
                      })
                        .then((response) => {
                          if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                          }
                          return response.json(); // Parse the response as JSON
                        })
                        .then((responseData) => {
                                setProducts((pre) => 
                                        pre.map((pro)=> {

                                                if(id == pro.id ){
                                                        pro.name = name;
                                                        pro.price = price;
                                                        pro.category = category;
                                                }
                                                return pro;
                                        })
                                )
                          console.log(responseData); // This will print the response data to the console
                        })
                        .catch((error) => {
                          console.error(`Fetch error: ${error.message}`);
                        });

                }
                function sortByPrice(){

                        let arr = products;
                        console.log(arr)
                        arr.sort(function(a, b){return a.price - b.price});
                        setProducts( [...arr])
                }
        // product data 
        useEffect(() => {
                function fetchData() {

                        fetch(`${url}/data`)
                                .then((response) => {
                                        if (!response.ok) {
                                                throw new Error(`HTTP error! Status: ${response.status}`);
                                        }
                                        return response.json();
                                })
                                .then((data) => {
                                        setProducts(data)
                                        // console.log(data); 
                                })
                                .catch((error) => {
                                        console.error(`Fetch error: ${error.message}`);
                                });
                }
                fetchData();
        }, [])

        return (<>
                <div style={{display: "flex", justifyContent: "end" }}><button style={{fontSize : "20px", borderRadius: "10px" }}
                onClick={()=> sortByPrice()} >Sort By Price</button></div>
                <div className={styles.itemContainer}>

                 {isEdit && <Form handleCancel={cancelform} isEdit={isEdit} editProduct={editProduct}/>}
                        {/* filter on the basis of search bar */}
                        {products.filter((item) => {
                                return search.toLocaleLowerCase() === ''
                                        ? item
                                        : item.name.toLocaleLowerCase().includes(search)
                        })
                                // filter on the basis of price range
                                .filter((item) => {
                                        return !applyFilter
                                                ? item
                                                : item.price <= price
                                })
                                // filter on the basis of category
                                .filter((item) => {
                                        return !applyFilter || category === 'none'
                                                ? item
                                                : item.category === category
                                })
                                // map to each item of the array
                                .map((item) => <ItemCard
                                        handleEdit={openEditform}
                                        handleDelete={deleteProduct}
                                        key={item.id}
                                        item={item} />)}
                </div>
                </>


        )
}