import React from 'react';


const HeroMine = () => {

  return (
<div className="bg-cover flex flex-col justify-center items-center bg-hero h-60vh" >
  

  <div className="text-center text-white">
    <div className="max-w-md mt-56">
      <h1 className="mb-5 text-5xl font-bold whitespace-nowrap">
            The 
            <strong className='bg-gradient-to-r from'> Hottest
            </strong>  Brands
          </h1> 
      <p className="mb-5">
            NextJS TailWind Shopify.  
          </p> 
      <button className="btn bg-violet-500 w-52 text-white font-semibold rounded-xl shadow-md hover:bg-violet-700 hover:border-2 hover:border-white">Shop Now</button>
    </div>
  </div>

  <div>
    <svg className='' viewBox='0 0 100 100'>
      <rect 
        x='10' y='10'
        width='20%' height='20%'
        fill='blue'
      />
      <circle className='z-40'
      cx={50} cy={50} r={50} fill='blue'
      />
      <polygon 
      x='10' y='10'
      width='20%' height='20%'
      />
    </svg>
  </div>

</div>);
};

export default HeroMine;
