import React from 'react'

const Header = () => {
  return (
    <div className='sticky top-0 z-10 p-4  text-black bg-[rgba(172,69,69,0.9)]' style={{  
      backgroundImage: "url(" + "https://scontent.fabb1-1.fna.fbcdn.net/v/t1.15752-9/294012721_454006316264024_2789008387592159863_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHMXpufNFJZN3N6WRLHb_ikTnr5AJSXsNZOevkAlJew1h2_WofHISy30lBTxi0xNV_Q2Y4vuN9Al7sB2pw7r_ko&_nc_ohc=qA-5DFazYFUAX9vS0Zn&_nc_ht=scontent.fabb1-1.fna&oh=03_AVIkYAG_Yh_yO2nD7dcIkwu2QAEl8aRffJiFiLmY6ePfaQ&oe=62FD22AE" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="w-full sticky top-0 flex  justify-between  items-center    mx-auto px-15 text-white">
      <h1 className='font-style:  italic mb-2 text-2xl font-bold max-w-[100px]  text-center ml-[1rem] cursor-pointer text-white uppercase'>PAURIIS.<span className='font-[400] text-white'>COM</span></h1>
      <div className='flex gap- mr-8  sm:flex '>
      <h1 className='font-style:  italic gap-[350px] mb-2 text-1xl font-bold max-w-[100px] hover:scale-105 duration-300  text-center ml-18 cursor-pointer text-white uppercase'>HOME</h1>
        <h1 className='font-style:  italic gap-8 mb-2 text-1xl font-bold max-w-[100px] hover:scale-105 duration-300  text-center ml-10 cursor-pointer text-white uppercase'>JOIN</h1>
      </div>
      </div>
    </div>
  )
}

export default Header