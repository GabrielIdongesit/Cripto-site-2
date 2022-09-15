import React from 'react'
import Laptop23 from '../assets/laptop23.png'
import Laptop8 from '../assets/laptop8.png'
import Laptop29 from '../assets/laptop29.jpg'
import Laptop9 from '../assets/laptop9.png'
const Banner4 = () => {
  return (
    <div className="bg-gray-00 px-10  mt- mb-20">
        <h1 className="text-center text-3xl font-style: italic font-bold mb-20 underline uppercase">What you will get with your <br/>  subscription</h1>
    <div className="mx-w-[1240px] mt-20 mx-auto grid md:grid-cols-2">
            <img className="w-[400px]  shadow-[purple] shadow-lg mx-auto border rounded-3xl  my-4" src={Laptop23} alt="/" />
            <div className="flex  flex-col p-6  justify-center">
                <p className=" text-3xl  font-bold text-[black]  underline mb-6 cursor-pointer">20 TECHNICAL ANALYSIS (TA) CALLS MONTHLY</p>
                <p className=" font-semibold">
                Receive quality Crypto TA signals that is sure to send your wallet to the <br/> moon with  over 80-200% gains every single month... <br/> ask for a refund of your subscription in 60  days if we do not deliver on this promise.
                </p>
                <div>
                    <button className='shadow-md shadow-[#bd63bd] mt-10 hover:shadow-[black] hover:shadow-md border p-2 px-[50px] bg-[black] rounded-full uppercase  font-bold text-white hover:scale-105 duration-300 hover:bg-[#ACA7CB] hover:text-[blue] font-style: italic mb-7'>JOIN NOW</button>
                </div>
            </div>
        </div>

        <div className="mx-w-[1240px] mt-40 mx-auto grid md:grid-cols-2">
            <div className="flex flex-col p-6  justify-center">
                <p className=" mb-5 font-bold text-[black] underline text-2xl cursor-pointer">ACCESS THE NEXT 100X CRYPTO GEM CALLS</p>
                
                <p className="font-semibold">
                when it comes to researching long term crypto Gems, our Reputation speaks for us...<br/> we bought solana at $1 sold at $200 HNT at $0.20, sold at $20. BNB at $40, <br/>lunar at $3 sold at $100  and many more.
                </p>
                <div>
                    <button className='shadow-md hover:shadow-md shadow-[#bd63bd] mt-10 hover:shadow-[black] border p-2 px-[50px] bg-[black] rounded-full uppercase  font-bold text-white hover:scale-105 duration-300 hover:bg-[#ACA7CB] hover:text-[blue] font-style: italic mb-7'>JOIN NOW</button>
                </div>
            </div>
            <img className="w-[400px] shadow-lg mx-auto border shadow-[purple] rounded-3xl  my-4" src={Laptop8} alt="/" />
        </div>
        <div className="mx-w-[1240px] mt-40 mx-auto grid md:grid-cols-2">
            <img className="w-[400px] mx-auto shadow-lg shadow-[purple] border rounded-3xl my-4" src={Laptop9} alt="/" />
            <div className="flex flex-col p-6  justify-center">
                <p className="font-bold underline text-[black] shadow-2xl mb-5 text-2xl cursor-pointer">TOP QUALITY NFT CALLS</p>
                
                <p className="font-semibold">
                looking for the next Big NFT to buy, then join <span className='text-[black] font-bold cursor-pointer '>PAURIIS.COM</span> <br/>to receive our monthly 100x NFT calls.. it would blow your mind.
                </p>
                <div>
                    <button className='shadow-md hover:shadow-md shadow-[#bd63bd] mt-10 hover:shadow-[black] border p-2 px-[50px] bg-[black] rounded-full uppercase  font-bold text-white hover:scale-105 duration-300 hover:bg-[#ACA7CB] hover:text-[blue] font-style: italic mb-7'>JOIN NOW</button>
                </div>
            </div>
        </div>
        <div className="mx-w-[1240px] mt-40 mx-auto grid md:grid-cols-2">
            <div className="flex flex-col p-6  justify-center">
                <p className="font-bold underline text-[black] mb-5 text-2xl cursor-pointer">COMPREHENSIVE CRYPTO AND NFT COURSE</p>
                
                <p className="font-semibold">
                Don't know anything about crypto & NFT ?<br/> it's okay... <br /> we've got you covered with our step-by-step crypto training <br /> courses  recorded for absolute beginners.
                </p>
                <div>
                    <button className='shadow-md hover:shadow-md shadow-[#bd63bd] mt-10 hover:shadow-[#3f0808] border p-2 px-[50px] bg-[black] rounded-full uppercase  font-bold text-white hover:scale-105 duration-300 hover:bg-[#ACA7CB] hover:text-[blue] font-style: italic mb-7'>JOIN NOW</button>
                </div>
            </div>
            <img className="w-[400px] mx-auto shadow-lg shadow-[purple]  border rounded-3xl my-4" src={Laptop29} alt="/" />
        </div>
        </div>
  )
}

export default Banner4