import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className='container mt-32 min-h-screen'>
        <h1 className='text-center font-bold text-4xl pt-24'>Contact Me</h1>
        <div id="input" className='flex flex-col gap-6 items-center mt-10'>
            <input type="text" placeholder='Enter Your Name' className='placeholder-white  hover:border-pink-300 focus:border-pink-400 focus:outline-none font-bold pl-5 text-[20px] custom-placeholder bg-transparent text-white border border-white w-[35%] h-14 outline outline-2
             rounded-[10px] text-wrap' />
               <input type="text" placeholder='Enter Your PhoneNumber ' className='placeholder-white hover:border-pink-300 focus:border-pink-400 focus:outline-none border-2 font-bold pl-5 text-[20px] custom-placeholder bg-transparent text-white border-white w-[35%] h-14 outline outline-2
             rounded-[10px]'/>
               <input type="text" placeholder='Enter Your Email' className='placeholder-white  hover:border-pink-300 focus:border-pink-400 focus:outline-none font-bold pl-5 text-[20px] custom-placeholder bg-transparent text-white border border-white w-[35%] h-14 outline outline-2
             rounded-[10px]'/>
             <textarea name="text" id="msg" rows={6} placeholder='Message' className='placeholder-white  hover:border-pink-300 focus:border-pink-400 focus:outline-none font-bold pl-5 pt-5 text-[20px] custom-placeholder bg-transparent w-[35%] border border-white outline outline-2
             rounded-[10px]'></textarea>
           
        </div>
        <div className='flex justify-center mt-6 mr-[27%]'>
             <button className='bg-white text-pink-300 h-14 w-[120px] rounded-[10px] text-[20px] font-bold mb-2'>Send</button>
             </div>

    </div>
  )
}

export default Contact;