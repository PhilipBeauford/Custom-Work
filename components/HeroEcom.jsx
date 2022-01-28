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
    </header>
  </div>
  )
}

export default HeroEcom;
