import React from 'react';

const CarouselDaisy = () => {
  return( 
    <div className="w-screen carousel">

        <div className="w-1/2 carousel-item relative inline-block">

            <img src="/pic1.jpg" className="w-full h-full block"/>
            <p className="text-base font-bold sm:text-2xl md:text-3xl absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                wheres this go?
            </p>

        </div> 

        <div className="w-1/2 carousel-item relative inline-block">
            <img src="pic2.jpg" className="w-full block h-full"/>
            <p className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                wheres this go?
            </p>
        </div> 

        <div className="w-1/2 carousel-item">
            <img src='/images/pic3.jpg' className="w-full"/>
        </div> 
        
        <div className="w-1/2 carousel-item">
            <img src="https://picsum.photos/id/503/256/144" className="w-full"/>
        </div> 
        <div className="w-1/2 carousel-item">
            <img src="https://picsum.photos/id/504/256/144" className="w-full"/>
        </div> 
        <div className="w-1/2 carousel-item">
            <img src="https://picsum.photos/id/505/256/144" className="w-full"/>
        </div> 
        <div className="w-1/2 carousel-item">
        <img src="https://picsum.photos/id/506/256/144" className="w-full"/>
    </div>
</div>)
};

export default CarouselDaisy;
