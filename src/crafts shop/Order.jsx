import OrderDetails from "./OrderDetails";



const Order = ({products}) => {
    return (
        <div className=" mt-10">

            

            <div className=" ">
              

              <h1 className=" text-2xl font-bold mt-16 flex justify-center items-center"> Want to Order: {products.length}  </h1>

            


              <div className=" flex gap-20 justify-center mt-5">

                 <h1 className=" text-xl font-bold text-slate-400"> Name  </h1>
                 
                 <h1 className=" text-xl font-bold text-slate-400"> Price  </h1>
                 
              </div>
            
            </div>

            <div>

               {

                  products.map( products => <OrderDetails key={products.id} products={products}></OrderDetails> )

               }


            </div>

         
            
        </div>
    );
};

export default Order;