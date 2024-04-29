




const OrderDetails = ({products}) => {

      const { price, name } = products;


    return (
        <div>
            <div className=" mb-10">


            <div className=" flex gap-16 text-xl text-slate-400 items-center bg-slate-200 mt-3 p-2  rounded-xl">
            <h1>1</h1>
            <div>
            <h1> {name}  </h1>
            </div>

            <div>
            <h1>{price} </h1>
            </div>

            <div className=" flex justify-end">
            <button className=" btn bg-secondary text-white">Order Done</button>
            </div>
            </div>














            </div>
            
        </div>
    );
};

export default OrderDetails;