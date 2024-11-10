import React from 'react'

const Hero = () => {
  return (
    <div className='min-h-screen bg-no-repeat bg-[url(/profile.png)] bg-right lg:bg-[80%] bg-cover mt-0 '
    style={{backgroundSize:"50%"}}>
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
      
        <div className='text-[60px] sm:text-[70px] leading-tight flex justify-center justify-items-start ml-10'>
          <div>
            <p className='text-white mt-44 font-bold text-[40px] '>Hi, I'm Nimra Khan</p>
            <p className='text-[60px] font-bold'>a Fronted Devolper</p>
            <div>
           
           
          </div>
        </div>
       </div>

    </div>
    </div>
  )
}

export default Hero;