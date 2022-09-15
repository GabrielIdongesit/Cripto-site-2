import React from 'react'

const Footer = () => {
  return (
    <div className="text-center py-0 sm:p-40 text-white " style={{  
      backgroundImage: "url(" + "https://dbdzm869oupei.cloudfront.net/img/quadres/preview/46660.png" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      
    }}>
        <h1 className="text-xl sm:text-7xl text-center font-bold cursor-pointer">PAURIIS.COM</h1>
        <div className=''>
          <div className="font-semibold text-2xl">
              <h1>
                kickstart your journey to monthly profit with <span className="text-xl underline cursor-pointer">Pauriis.com</span>
              </h1>
            </div>
               <button className='shadow-md hover:shadow-md shadow-[#bd63bd] mt-10 hover:shadow-[black] border p-2 px-[50px] bg-[black] rounded-full uppercase  font-bold text-white hover:scale-105 duration-300 hover:bg-[#ACA7CB] hover:text-[blue] font-style: italic '>JOIN NOW</button>
        </div>
        <div>
        
        </div>
    </div>
  )
}

export default Footer