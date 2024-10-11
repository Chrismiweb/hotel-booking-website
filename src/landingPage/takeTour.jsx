import React from 'react'
import img1 from '../images/safron3.png'

function takeTour() {
  return (
    <div className='w-[100%] pb-[100px] flex bg-slate-50 justify-center items-center py-[20px]'>
        <div className=' w-[90%] md:w-[85%] lg:w-[70%] flex flex-col gap-[10px]'>
            <div className='w-[100%] h-[300px] overflow-hidden rounded-[40px]'>
                <img className='w-full h-full' src={img1} alt="" />
            </div>
            <div className='w-[100%] flex justify-center items-center'>
                <p className='text-center w-[90%] md:w-[80%] text-[13px] font-bold'>Discover a collection of sophisticated luxury bedrooms featuring custom interior designs and decorating ideas. Browse through pictures to find your ideal luxury bedroom design—spaces so sumptuous you'll never want to leave. Explore more inspirations for opulent bedroom designs and creative decorating ideas.</p>
            </div>
        </div>
    </div>
  )
}

export default takeTour