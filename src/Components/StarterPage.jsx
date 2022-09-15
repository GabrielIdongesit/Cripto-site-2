import React from 'react'

const StarterPage = () => {
  return (
    <div className='mt-20 p-20'>
    <h1 className="text-[black] text-3xl  underline  font-bold text-center">PLANS</h1>

<div className="max-w-[1240px]  mx-auto mt-10 grid md:grid-cols-2 gap-8">
                <div className="w-full bg-[white] text-black shadow-xl border hover:scale-105 duration-300 flex hover:shadow-[purple] hover:shadow-md flex-col p-4 my-4 rounded-lg ">
                    <h2 className="text-2xl font-bold text-center py-2">CRYPTO COURSES</h2>
                    <p className="text-center text-4xl font-bold">$100</p>
                    <div className='text-center font-medium'>
                        <p className="py-2 border-b mx-8 mt-2">Crypto courses for absolute beginner</p>
                        <p className="py-2 border-b mx-8">NFT classes for absolute beginners</p>
                        <p className="py-2 border-b mx-8">Crypto futures trading for absolute beginners.</p>
                        <button className="bg-[black] hover:scale-105 duration-300 hover:bg-[#ACA7CB] mt-20 w-[150px] hover:shadow-md hover:text-[blue] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white">Get Courses</button>
                    </div>
                </div>
                <div className="w-full bg-[white] text-black border hover:scale-105 duration-300 hover:shadow-md hover:shadow-[purple] text-center shadow-xl flex flex-col p-4 my-4  rounded-lg ">
                    <h2 className="text-2xl mx-8 font-bold  py-2">PREMIUM</h2>
                    <p className=" text-2xl mx-8 font-bold">$150/month</p>
                    <div className=' font-medium'>
                        <p className="py-2 border-b mx-8 mt-">2 Undervalued Gem Calls/month</p>
                        <p className="py-2 border-b mx-8">20 Technical Analysis Calls/month</p>
                        <p className="py-2 border-b mx-8">NFT Mint Calls(As available)</p>
                        <p className="py-4 text-2xl border-b mx-8 ">3 Month Trial at $150</p>
                        <button className="bg-[black] hover:scale-105 duration-300 hover:bg-[#ACA7CB] mx-auto hover:shadow-md hover:text-[blue] mt-[50px] w-[150px] rounded-md font-medium my-6 px-6 py-3 text-white">Join Now</button>
                    </div>
                </div>
                
            </div>
    </div>
  )
}

export default StarterPage