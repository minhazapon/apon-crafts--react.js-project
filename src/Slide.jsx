

import 'animate.css';


const Slide = () => {
    return (
        <div className=" mb-10">
            <div>
            <div className=" animate__animated animate__rollIn animate__repeat-2 carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="  https://img.freepik.com/premium-photo/scrapbook-card-tools-with-decoration_522472-7797.jpg?w=740  " className=" h-[600px]  w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src=" https://img.freepik.com/premium-photo/top-view-adoption-concept-with-dog-items_23-2148699693.jpg?w=740  " className="  h-[600px]   w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src=" https://img.freepik.com/premium-photo/decorative-elements-surrounded-near-blank-beige-paper-wooden-table_23-2147899214.jpg?w=740  " className="  h-[600px]   w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src=" https://img.freepik.com/free-photo/lovely-wedding-stationery-top-view_23-2148495177.jpg?t=st=1714197630~exp=1714201230~hmac=84f9b1c40b42727b0a7f11e62398fb30150969d25172418d7807654ed0be112d&w=740 " className="  h-[600px]   w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>













            </div>
            
        </div>
    );
};

export default Slide;