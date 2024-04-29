import { useEffect, useState } from "react";
import SData from "./SData";



const ShopData = () => {


     const [items, setItems] = useState([]);

     useEffect( () => {

        fetch('card.json')
         .then(res => res.json())
         .then(data => setItems(data))


     } , [])






    return (
        <div className=" mt-10 mb-10">

           
            



        
        <div>
          
        <div className="">
        
            {

                items.map( items => <SData key={items.id} items={items}></SData>  )
            
            }

        </div> 
        </div>  



        </div>       
       
    );
};

export default ShopData;