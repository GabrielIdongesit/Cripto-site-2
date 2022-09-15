import React from 'react'


const Banner = () => {
  return (
    <div className='text-center drop-shadow-lg' style={{  
      backgroundImage: "url(" + "https://previews.123rf.com/images/gstockstudio/gstockstudio1509/gstockstudio150900110/45174919-quality-time-with-friends-group-of-joyful-young-people-talking-to-each-other-and-eating-pizza-while-.jpg" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }} >
      <div className="w-full h-full bg-[rgba(42,30,30,0.8)] ">
    <div className=' w-full px-20 text-white' style={{paddingLeft:'50px'}}>
        <div className='mx-w-[1240px] mx-auto grid md:grid-cols-'>
        <div className='text-[white] '  style={{marginTop:'100px', marginBottom:'200px'}}>
            <h1 className='text-6xl mt-10 font-bold uppercase'>PROFIT <span className='text-[white] '>MONTHLY</span></h1>
            <h5 className='text-xl font-bold ml-5'>gain access to quality research and <br />signals that is sure to boost your <br /> portfolio exponentially</h5>
            <div>
                <button className=' bg-[#9363B4] hover:scale-105 duration-300  hover:bg-[white] hover:text-[blue] mt-10 border p-2 px-[20px]  rounded-full shadow uppercase font-bold text-white font-style: italic mb-7'>Join Now</button>
            </div>
        </div>
        </div>

    </div>
    </div>
    </div>
  )
}

export default Banner