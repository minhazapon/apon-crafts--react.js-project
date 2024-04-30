
import 'animate.css';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Footer = () => {

  const handleF = e => {
      
    e.preventDefault();
     

     console.log(e.target.name.value)
     console.log(e.target.email.value)
     console.log(e.target.message.value)

    
     
     toast("Update items");

   }





    return (

         <div className=' border-[1px] border-secondary rounded-xl  '>

        <div 
        className="  animate__animated  animate__fadeInRightBig animate__repeat-2
         flex justify-center items-center gap-16 rounded-xl flex-col md:flex-row bg-base-200 ">

          
         <div>
              <img 
               className="  h-[450px] rounded-xl " 
               src="  https://img.freepik.com/premium-photo/man-drawing-with-pens-pencils-style-painting-writing-tools-study-place_577115-34223.jpg?w=740   " alt="" />

         </div>


          {/* ------------------------------------- */}

          <div>
         


              <section className=" p-4 text-gray-100">
              	<form onSubmit={handleF}  className="container  h-[450px] w-[400px] max-w-xl p-8 mx-auto space-y-6 rounded-md">
              		<h2 className="w-full text-3xl font-bold leading-tight  text-secondary ">Contact us</h2>
              		<div>
              			<label htmlFor="name" className="block mb-1 ml-1 text-black">Name</label>
              			<input name='name' id="name" type="text" placeholder="Your name" required=""
                    className="block w-[300px] p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-white " />
              		</div>
              		<div>
              			<label htmlFor="email" className="block mb-1 ml-1 text-black">Email</label>
              			<input name='email' id="email" type="email" placeholder="Your email" required=""
                     className="block w-[300px] p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-white " />
              		</div>
              		<div>
              			<label htmlFor="message" className="block mb-1 text-black ml-1">Message</label>
              			<textarea  name='message' id="message" type="text" placeholder="Message..."
                     className="block w-[300px] p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 text-black focus:ring-violet-400 bg-white "></textarea>
              		</div>
              		<div>
              			<button type="submit" className=" btn  w-[300px] px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-secondary focus:ring-violet-400 hover:ring-violet-400 text-white">Send</button>
                    <ToastContainer /> 
              		</div>
                     
              	</form>
              </section>
                      
          </div>
      


         

        </div>

        <div>

<footer className="footer p-10 bg-base-200 text-base-content  animate__animated  animate__fadeInLeftBig animate__repeat-2 ">
  <nav>
    <h6 className="footer-title">Social media</h6> 
    <div className=' flex items-center gap-2'>
     <img className=' h-[30px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/800px-Facebook_logo_%28square%29.png" alt="" /> 
    <a className="link link-hover">Facebook</a>
    </div>
    <div className=' flex items-center gap-2'>
      <img className=' h-[30px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png?20140125013055" alt="" />
    <a className="link link-hover">Linkedin</a>
    </div>
    <div className=' flex items-center gap-2'>
      <img className=' h-[30px]' src="https://seeklogo.com/images/T/twitter-2012-negative-logo-5C6C1F1521-seeklogo.com.png" alt="" />
    <a className="link link-hover">Twitter</a>
    </div>
 
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav> 
  <form onSubmit={handleF} >
    <div className=' flex items-center gap-3'>
    <img className=' h-[40px]' src="https://i.ibb.co/S0PPMXh/handcraft-1.png" alt="" />
    <h6 className=" text-4xl font-bold text-secondary ">Apon Crafts</h6> 
    </div>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="join">
        <input name='sub' type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
        <button className="btn btn-secondary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>

</div>

        </div>
    );
};

export default Footer;