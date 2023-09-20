
// react router
import { createBrowserRouter,RouterProvider } from "react-router-dom";

// custom context provider (authentication and product)

// all the pages and component to render
import Navbar from "./Component/Navbar/Navbar";
import { Home } from "./Pages/Home/Home";
import {Cart} from "./Pages/Cart/Cart";

import { Error } from "./Pages/Error";
import { useEffect } from "react";
import Product from "./Pages/Product/product";
import CreateProduct from "./Pages/CreateProduct/createProduct";
import { ToastContainer } from "react-toastify";

// main app function 
function App() {

  // all the link routes
  const router = createBrowserRouter([
    {
      path:"/", 
      element: <Navbar />,
      errorElement: <Error />,
      children:[
        { index:true, element: <Home />},
        { path:"/cart", element: <Cart />},
        { path:"/product/:id", element: <Product />},
        { path:"/create-product", element: <CreateProduct />},
      
      ]
    }
  ]);
 
  return (
    <>
 
          {/* routes */}
          <ToastContainer position="bottom-center" limit={1} />
          <RouterProvider router={router} />    
    
    </>
  );
}

export default App;
