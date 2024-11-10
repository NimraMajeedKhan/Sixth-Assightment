import React from 'react'

const Skills = () => {
  return (
    <div id="skills" className='container mt-20 min-h-screen'>
     <h1 className='text-center font-bold text-[50px] pt-9'>My Skills</h1>
        <div className='grid grid-cols-2 mt-16'>
           <div className='flex justify-center items-center pl-48 '>
            <div className='space-y-20'> 
                <div className='h-32 w-72 border border-white outline outline-2 rounded-[15px] flex justify-center items-center mb-14'><h3 className='font-bold text-4xl'>HTML</h3></div>
                <div className='h-32 w-72 border border-white outline outline-2 rounded-[15px] flex justify-center items-center mb-14'><h3 className='font-bold text-4xl'>CSS</h3></div>
                <div className='h-32 w-72 border border-white outline outline-2 rounded-[15px] flex justify-center items-center '><h3 className='font-bold text-4xl'>JavaScript</h3></div>
                </div>     

            </div>
            <div className='flex justify-center items-center pr-48'>
            <div className= 'space-y-20'>
                <div className='h-32 w-72 border border-white outline outline-2 rounded-[15px] flex justify-center items-center mb-14 '><h3 className='font-bold text-4xl'>TypeScript</h3></div>
                <div className='h-32 w-72 border border-white outline outline-2 rounded-[15px] flex justify-center items-center mb-14 '><h3 className='font-bold text-4xl'>Next.Js</h3></div>
                <div className='h-32 w-72 border border-white outline outline-2 rounded-[15px] flex justify-center items-center '><h3 className='font-bold text-4xl'>Tailwind CSS</h3></div>

            </div>
            </div>
</div>
        </div>

  )
}

export default Skills