import React from 'react'

const Ab = () => {
  return (
    <div className='w-full flex flex-col md:flex-row items-center justify-center gap-2 md:gap-10 h-[600px] bg-[#F8F8FA]'>
        <div className='md:flex md:flex-row pt-8 md:pt-0 md:gap-4 items-center'>
            <div className='flex flex-row md:flex-col gap-4'>
                <img src="https://images.unsplash.com/photo-1561909848-977d0617f275?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D" alt=""  className='w-[180px] md:w-[250px] md:h-[250px]'/>
                <img src="https://images.unsplash.com/photo-1570425387687-d2a34c7304a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8" alt="" className='w-[180px] md:w-[250px] md:h-[250px]'/>
            </div>
            <img src="https://images.unsplash.com/photo-1576664839181-e08ac3624a6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D" alt=""  className='w-[100px] h-[60px] md:w-[300px] md:h-[520px] invisible md:visible'/>
        </div>
        <div className='md:pt-2 text-center md:text-justify'>
            <h4 className='font-extrabold text-xl pb-2'>ABOUT US </h4>
            <h2 className='text-3xl font-bold pb-4'>We Prodvide High quality shoes.</h2>
             <p className='md:w-[500px] text-xl pb-4 md:pb-8'>Kick your style into high gear with bold peices inspired by the racetrack. Bringing back iconic tones of teal</p>
             <button className='px-6 py-4 bg-black text-white rounded-md'>Explore More</button>
        </div>
    </div>
  )
}

export default Ab