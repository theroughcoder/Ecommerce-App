import { useEffect, useRef } from "react";
import styles from "./form.module.css"

// This is the form component for creating and deleting album photos
export function Form({ isEdit , editProduct, length, handleCancel}){
    const nameInput = useRef("");
    const priceInput = useRef("");
    const categoryInput = useRef("");
    
    // function that triggers on form submission 
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        
    
            editProduct( isEdit.id, nameInput.current.value, priceInput.current.value, categoryInput.current.value)
      

        nameInput.current.value = "";
        priceInput.current.value = "";
        categoryInput.current.value = "";
        // albumNameInput.current.value = "";
        handleCancel();
    } 
    useEffect(()=>{
        if(isEdit){
          
            nameInput.current.value = isEdit.name;
            priceInput.current.value = isEdit.price;
            categoryInput.current.value = isEdit.category;
        }
    }, [isEdit])

    return (
        <form onSubmit={onSubmitHandler} className={styles.myForm}>
            <div onClick={()=> handleCancel()} className={styles.cancel}>X</div>
            < label className={styles.textInput} for="textInput">Edit Details</label>
            <p >Name</p>
            <input ref={nameInput} className={styles.myInputAlbum} type="text" id="textInput" name="textInput" placeholder="Add Title..." required/>
            <p>Price</p>
            <input ref={priceInput} className={styles.myInputAlbum} type="text" id="textInput" name="textInput" placeholder="Add Title..." required/>
            <p>Category</p>
            <input ref={categoryInput} className={styles.myInputAlbum} type="text" id="textInput" name="textInput" placeholder="Add Title..." required/>

            <button style={{background: "red"}} className={styles.myButton} type="reset">Reset</button>
            <button  className={styles.myButton} type="submit">{isEdit ? "Edit"  : "Create"}</button>
         </form>
    )
}