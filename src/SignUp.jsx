
import 'animate.css';




const SignUp = () => {
    return (
        <div className=" mb-10 mt-10 flex justify-center">

            <div className=" flex-col md:flex-row lg:flex-row">


            <div className="   animate__animated animate__rotateIn  animate__repeat-2 flex flex-col w-[400px] p-6 rounded-md sm:p-10 bg-blue-600 text-gray-100">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign Up</h1>
		<p className="text-sm text-white ">Sign Up to access your account</p>
	</div>
	<form noValidate="" action="" className="space-y-12">
		<div className="space-y-4">

            
			<div>
				<label htmlFor="email" className="block mb-2 text-sm">Name</label>
                <input     
                className="w-full px-3 py-2 border rounded-md  bg-white text-black " placeholder="Your Name"  type="text" />
			</div>


           {/* -------------------- */}


			<div>
				<label htmlFor="email" className="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="Give Email"
                 className="w-full px-3 py-2 border rounded-md  bg-white text-black " />
			</div>
 
            {/* ---------------- */}


            <div>
				<label htmlFor="email" className="block mb-2 text-sm">Photo Url</label>
			
                <input
                  className="w-full px-3 py-2 border rounded-md  bg-white text-black "
                   type="url" name="Photo Url" placeholder="Photo Url" id="" />

			</div>





            {/* ----------------------- */}

			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Password</label>
					
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md  bg-white text-black" />
			</div>

            {/* ----------------- */}

		</div>
		<div className="space-y-2">
			<div>
				<button type="button" className="w-full btn px-8 py-3 font-semibold rounded-md bg-white text-gray-900">Sign Up</button>
			</div>
			
		</div>
	</form>
</div>











            </div>
            
        </div>
    );
};

export default SignUp;