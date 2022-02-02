import React from 'react'

function Reviews() {
    return (
        <div className='bg-purple-50 min-h-screen p-4 flex flex-col items-center justify-center pb-24 lg:mb-0'>
            <div className='lg:text-center py-16'>
                <h2 className='text-base text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 font-bold tracking-wide uppercase'>
                    💕 Wall of love 💕
                </h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                    What our Clients are saying
                </p>
            </div>

            <div>

                <div className="max-w-7xl overflow-hidden grid xl:grid-cols-3 gap-8">
                    <div className="lg:col-span-1 inline-block bg-gradient-to-br from-blue-500 to-green-300 rounded-xl shadow-xl p-8">
                        <div>
                            <div className='flex items-center mb-8'>
                                <div>
                                    <span className='text-lg leading-tight block font-bold text-white'>
                                        Philip Beauford
                                    </span>
                                    <span className='text-lg text-white text-opacity-50'>
                                        www.philipbeauford.com
                                    </span>
                                </div>
                            </div>
                        </div >
                        <div className='flex items-center mb-8 '>
                            <h2 className='text-2xl text-white'>
                            "I've tried many courses and instructors but Iskandar and his team have a smooth clear style that is easy to follow, leads you in the right direction and there are no issues with project deployment. Highly recommend!"
                            </h2>
                        </div>
                    </div>

                    <div className='lg:col-span-1 inline-block bg-gradient-to-bl from-indigo-500 to-green-300 rounded-xl shadow-xl p-8'>
                        <div className='flex items-center mb-8 '>
                            <div>
                                <span className='text-lg leading-tight block font-bold text-white'>
                                    Philip Beauford
                                </span>
                                <span className='text-lg text-white text-opacity-50'>
                                    www.philipbeauford.com
                                </span>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-2xl text-white'>
                            "I've tried many courses and instructors but Iskandar and his team have a smooth clear style that is easy to follow, leads you in the right direction and there are no issues with project deployment. Highly recommend!"
                            </h2> 
                        </div>
                    </div>

                    <div className='lg:col-span-1 lg:row-span-1 inline-block bg-gradient-to-tr from-blue-400 to-pink-200 rounded-xl shadow-xl p-8'>
                        <div className='flex items-center mb-8 '>
                            <div>
                                <span className='text-lg leading-tight block font-bold text-white'>
                                    Philip Beauford
                                </span>
                                <span className='text-lg text-white text-opacity-50'>
                                    www.philipbeauford.com
                                </span>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-2xl text-white'>
                            "I've tried many courses and instructors but Iskandar and his team have a smooth clear style that is easy to follow, leads you in the right direction and there are no issues with project deployment. Highly recommend!"
                            </h2>  
                        </div>
                    </div>

                    <div className="lg:col-span-1 inline-block bg-gradient-to-tr from-indigo-400 to-green-300 rounded-xl shadow-xl p-8">
                        <div className='flex items-center mb-8 '>
                            <div>
                                <span className='text-lg leading-tight block font-bold text-white'>
                                    Philip Beauford
                                </span>
                                <span className='text-lg text-white text-opacity-50'>
                                    www.philipbeauford.com
                                </span>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-2xl text-white'>
                            "I've tried many courses and instructors but Iskandar and his team have a smooth clear style that is easy to follow, leads you in the right direction and there are no issues with project deployment. Highly recommend!"
                            </h2>   
                        </div>
                    </div>

                    <div className="lg:col-span-2 inline-block bg-gradient-to-br from-green-300 to-indigo-400 rounded-xl shadow-xl p-8">
                        <div className='flex items-center mb-8 '>
                            <div>
                                <span className='text-lg leading-tight block font-bold text-white'>
                                    Philip Beauford
                                </span>
                                <span className='text-lg text-white text-opacity-50'>
                                    www.philipbeauford.com
                                </span>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-2xl text-white'>
                            Ive tried many courses and instructors but Iskandar and his team have a smooth clear style that is easy to follow, leads you in the right direction and there are no issues with project deployment. Highly recommend!
                            </h2>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Reviews
