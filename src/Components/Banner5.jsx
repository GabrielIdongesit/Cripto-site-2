import React from 'react'

const Banner5 = () => {
  return (
    <div className="w-full bg-white text-center">
        <h1 className='text-3xl font-bold mb-5 font-style: italic' style={{marginTop:'20px', marginBottom:'50px'}}>How It's <span className='text-[orange]'>Work</span></h1>

        <div className=" mx-auto grid px-20 md:grid-cols-3 gap-2" style={{marginTop:'100px', marginBottom:'5px'}}>
                <div className="w-full shadow-2xl  flex flex-col p-4 my-4 rounded-lg">
                    <h1 className="text-[brown] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the in</h1>
                    <h2 className="text-2xl font-bold text-center ">Altcoin Buzz Access has <br /> been very helpful in <br /> creating my balanced <br />porfolio </h2>                    
                </div>
                <div>
                    <h1 className="border max-w-[200px] mx-auto rounded-full font-bold bg-[orange] text-white font-style: italic" style={{marginTop: '100px'}}>Page ONE</h1>
                </div>
                <div className="w-full shadow-2xl flex bg-[#f6dcdc] flex-col p-4 my-4 rounded-lg">
                    <h1 className="text-[brown] font-bold text-3xl">*****</h1>
                    <h2 className="text-2xl font-bold text-center">The strategies discussed in <br /> the Alcoin Buzz Access <br /> Private Telegram Chat are <br /> extremely helpful</h2>
                </div>
            </div>
    </div>
  )
}

export default Banner5