import { useState } from "react";
import Order from "./Order";
import ShopData from "./ShopData";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const CraftsShop = () => {

     const [ products, setProcuts ] = useState([]);


     const handleP = items => {

        const newItems = [...products, items]

        setProcuts(newItems)
        toast('Order-Done')


     }



    return (
        <div>

            <div>

              <div className=" flex justify-center gap-20 flex-col md:flex-row">
              <ShopData handleP={handleP}  ></ShopData>
              <Order  products={products} ></Order>
              </div>
              <ToastContainer></ToastContainer>
              
            </div>
            
        </div>
    );
};

export default CraftsShop;