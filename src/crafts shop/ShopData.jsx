import { useEffect, useState } from "react";
import SData from "./SData";



const ShopData = ({handleP}) => {


     const [items, setItems] = useState([]);

     useEffect( () => {

        fetch('https://mocki.io/v1/1efd8841-b4be-4a5f-83c8-5208f88bb768')
         .then(res => res.json())
         .then(data => setItems(data))


     } , [])






    return (
        <div className=" mt-10 mb-10">

           
        
        <div className=" flex justify-center items-center ">
          
        <div className="   grid  md:grid-cols-2 gap-6">
        
            {

                items.map( items => <SData key={items.id} items={items} handleP={handleP}  ></SData>  )
            
            }

        </div> 
        </div>  



        </div>       
       
    );
};

export default ShopData;