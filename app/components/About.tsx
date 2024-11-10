import React from 'react'

const About = () => {
  return (
    <div id="about" className='container pt-20 min-h-screen'>
        <h1 className='text-center font-bold text-4xl'>About Me</h1>
        <div className='flex justify-center items-center'>
        <div className='h-96 w-2/6 mt-14 border border-white outline outline-2 rounded-[60px]'>
        <div className='p-16'>
        <p className='text-3xl font-bold'>My name is Nimra Majeed Khan.I am Student at Governor IT initiative for Learning Next.js and I Passionate about losing 
            myself in coding <span className='text-4xl'>♥️</span>
        </p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default About;