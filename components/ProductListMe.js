import ProductCard from './ProductCard'


const ProductList = ({ products }) => {
    return (
        <div className="bg-white">
            <div className="relative max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

                <div className='absolute top-16 -left-40 w-40vw h-70vh bg-bright-turquoise-300 rounded-full mix-blend-multiply blur-2xl opacity-50 animate-blob ease-linear animation-delay-1000'>
                </div>
                <div className='absolute top-16 -right-40 w-40vw h-70vh bg-blue-300 rounded-full mix-blend-multiply blur-2xl opacity-50 animate-blob animation-delay-2000 ease-linear'>
                </div>
                <div className='absolute bottom-16 left-52 w-40vw h-70vh bg-purple-300 rounded-full mix-blend-multiply blur-2xl opacity-50 animate-blob animation-delay-3000 ease-linear'>
                </div>

                <h2 className=" text-2xl font-extrabold text-gray-900 mb-5 ">
                    Products
                </h2>
                <div className="  grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
                    
                    
                    {
                        products.map(product => (
                            <ProductCard key={product.node.id} product={product}/>
                        ))
                    }

                    {/* This is crucial to understand ^ */}
                </div>
            </div>
        </div>
    )
}

export default ProductList