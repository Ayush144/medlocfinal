import React from 'react'

import './Best.css'

const Best = () => {
    return (
        <div className='best'>
            <h1>Find Best Searches Medicine</h1>
            <div className='prodcat'>
                {/* <p><span className='bold'>All</span></p> */}
                <p>Covid Essentials</p>
                <p>Ayurveda</p>
                <p>Vitamins</p>
                <p>Healthcare Devices</p>
                <p>Skin Care</p>
                <p>Mother & Baby care</p>
                <p>Fitness & supplements</p>
            </div>
            <div className='container'>
                <img src="https://cdn.pixabay.com/photo/2020/10/02/09/01/tablets-5620566__340.jpg" alt='' />
                <img src="https://cdn.pixabay.com/photo/2020/10/02/09/01/tablets-5620566__340.jpg" alt='' />
                <img src="https://cdn.pixabay.com/photo/2020/10/02/09/01/tablets-5620566__340.jpg" alt='' />
            </div>
            <button className='btn'>View All</button>
        </div>
    )
}

export default Best