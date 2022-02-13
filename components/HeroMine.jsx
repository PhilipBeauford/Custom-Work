import React from 'react';


const HeroMine = () => {

  return (
<div className="bg-cover flex flex-col justify-center items-center bg-hero h-60vh" >
  

  <div className="text-center text-white">
    <div className="max-w-md mt-56">
      <h1 className="mb-5 text-5xl font-bold whitespace-nowrap">
            The 
            <strong style={{background: linear-gradient(115deg, #7839f3 -8%, #5433ff 18%, #20bdff 59%, #00fb9b 91%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent }}> Hottest
            </strong>  Brands
          </h1> 
      <p className="mb-5">
            NextJS TailWind Shopify.  
          </p> 
      <button className="btn bg-violet-500 w-52 text-white font-semibold rounded-xl shadow-md hover:bg-violet-700 hover:border-2 hover:border-white">Shop Now</button>
    </div>
  </div>
</div>);
};

export default HeroMine;
