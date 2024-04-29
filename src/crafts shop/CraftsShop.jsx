import { useState } from "react";
import Order from "./Order";
import ShopData from "./ShopData";



const CraftsShop = () => {

     const [ products, setProcuts ] = useState([]);


     const handleP = items => {

        const newItems = [...products, items]

        setProcuts(newItems)


     }



    return (
        <div>

            <div>

              <div className=" flex justify-center gap-20 flex-col md:flex-row">
              <ShopData handleP={handleP}  ></ShopData>
              <Order  products={products} ></Order>
              </div>
              
            </div>
            
        </div>
    );
};

export default CraftsShop;