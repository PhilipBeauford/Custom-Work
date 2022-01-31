import Image from "next/image";


function HeroEcom() {
  return (
  <div>
    <header className="bg-white dark:bg-gray-800">

        <div className="container px-6 py-16 mx-auto">
            <div className="items-center lg:flex">
                <div className="w-full lg:w-1/2">
                    <div className="lg:max-w-lg">
                        <h1 className="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">Best Place To Choose Your Clothes</h1>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? </p>
                        <button className="btn btn-primary rounded-3xl mt-10 h-8">Shop Now</button>
                    </div>
                </div>
        
                <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                    <Image 
                        className = "w-full h-full lg:max-w-2xl"
                        src       = "/../public/Catapana.svg"
                        alt       = "Catapana.svg"
                        height= '448px'
                        width='672px'
                        />
                </div>
            </div>
        </div>

        





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
        </div>

    </header>
  </div>
  )
}

export default HeroEcom;
