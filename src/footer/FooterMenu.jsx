import React from 'react'

function FooterMenu() {
    const date = new Date().getFullYear()

  return (
    <div className='flex flex-col gap-[30px] bg-slate-100 py-[60px] w-[100%]'>
        <div className='w-[100%] px-[30px] md:px-0 gap-[20px] md:gap-0 flex flex-col md:flex-row justify-evenly '>
            <div className='flex w-[90%] md:w-[25%] flex-col gap-[20px]'>
                <p className='text-black text-[30px]'>CHRISMILUXE</p>
                <p className='font-serif font-semibold text-[13px]'>Unwind in style with our premium accommodations and exceptional service. Whether you're planning a romantic getaway, a family vacation, or a business trip, CHRISMILUXE offers a range of rooms and suites designed to meet your every need.</p>
            </div>
            <div>
                <h1 className='text-[17px] mb-3 font-bold'>Contact Us</h1>
                <p className='text-[15px]'>Email: chrismibiteso@gmail.com</p>
                <p className='text-[15px]'>Instagram: chrix_multitalented</p>
                <p className='text-[15px]'>LinkedIn: @chrismi david</p>
                <p className='text-[15px]'>Whatsapp: +2348106794406</p>
            </div>
            <div>
                <h1 className='text-[17px] mb-3 font-bold'>About Us</h1>
                <p className='text-[15px]'>About ChrismiLuxe</p>
                <p className='text-[15px]'>News</p>
                <p className='text-[15px]'>Career</p>
                <p className='text-[15px]'>Terms & Conditions</p>
                <p className='text-[15px]'>Privacy Statement</p>
                <p className='text-[15px]'>Privacy Statement</p>
            </div>
            <div>
                <h1 className='text-[17px] mb-3 font-bold'>Payment Method</h1>
                <p className='text-[15px]'>About ChrismiLuxe</p>
                <p className='text-[15px]'>News</p>
                <p className='text-[15px]'>Career</p>
                <p className='text-[15px]'>Terms & Conditions</p>
                <p className='text-[15px]'>Privacy Statement</p>
                <p className='text-[15px]'>Privacy Statement</p>
            </div>
        </div>
        <div className='w-[100%] justify-center items-center flex flex-col gap-[20px]'>
            <div className='w-[100%] h-[1px] border-black border'></div>
                <p className='w-[100%] md:w-[50%] text-center'>Copyright © {date} ChrismiLuxe All rights reserved
                Site Operator: ChrismiLuxe</p>
                <div className='w-[100%] h-[1px] border-black border'></div>
                <p>Website designed by Biteso Chrismi David  </p>
        </div>
    </div>
  )
}

export default FooterMenu