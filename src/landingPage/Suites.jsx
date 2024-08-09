import React from 'react'
import img1 from '../images/ave.png';
import img2 from '../images/ave2.png';
import img3 from '../images/ave3.png';

function Suites() {
    const hotels = [
        {
            img: img1,
            name: 'Aveon Hotel',
            price: "₦50,000 Per Night"
        }
    ]

  return (
    <div className='bg-slate-100'>
        <div>
            <div>
                <div></div>
                <h1>Rooms & Suites</h1>
                <p>Experience luxury and comfort with our state-of-the-art 5-star hotel</p>
            </div>
            <div>
                <a href="/booking"><button>View All</button></a>
            </div>
        </div>
        <div>

        </div>

    </div>
  )
}

export default Suites