import React from 'react'
import './Featured.css'
import Slider from './Slider';

const Featured = () => {
    return (
        <div className='featuredFirst'>
            <h1 className='featured-text'>Top Featured Listings</h1>
            <p className='featured-text'>Selected listings by City, State, & Zip based on views.</p>
            <br />
            <Slider />
            {/* Section section */}
            <div className='quotesmg'>
                <h1>Best Doctors in Bilaspur for consultancy</h1>
            </div>
            <div className='container '>
                <div className='img_position'>
                    <img className='order-2 consl-2' src="https://images1-fabric.practo.com/doctor/619309/dr-vijay-kumar-srivas-59e44f2ad6113.jpg" alt='' />
                    <div className='img_overlay-2'>
                        <div className='img_info'>
                            <h2>Dr. Vijay Shrivas</h2>
                            <h3>General Physician</h3>
                            {/* <h4>more info search icon</h4> */}
                            <a href='https://www.practo.com/bilaspur/doctor/dr-vijay-shrivas-general-physician'>More info</a>
                        </div>
                    </div>
                </div>
                <div className='img_position'>
                    <img className='order-3 consl-2' src="https://images1-fabric.practo.com/doctor/618567/dr-ashish-jaiswal-59c3bf012c7d1.jpg" alt='' />
                    <div className='img_overlay-2'>
                        <div className='img_info'>
                            <h2>Dr. Ashish Jaiswal</h2>
                            <h3>Orthopedist</h3>
                            <a href='https://www.practo.com/bilaspur/doctor/dr-ashish-jaiswal-1-orthopedist'>More info</a>
                        </div>
                    </div>
                </div>
                <div className='img_position'>
                    <img className='order-3 consl-2' src="https://images1-fabric.practo.com/doctor/420621/dr-sudhanshu-pathak-58e37c0614b5a.jpg" alt='' />
                    <div className='img_overlay-2'>
                        <div className='img_info'>
                            <h2>Dr. Sudhanshu Pathak</h2>
                            <h3>Dentist</h3>
                            <a href='https://www.practo.com/bilaspur/doctor/sudhanshu-pathak-1-dentist'>More info</a>
                        </div>
                    </div>
                </div>
                <div className='img_position'>
                    <img className='order-3 consl-2' src="https://images1-fabric.practo.com/doctor/618744/dr-rajib-lochan-bhanja-59c3d3b26b380.jpg" alt='' />
                    <div className='img_overlay-2'>
                        <div className='img_info'>
                            <h2>Dr. Rajib Lochan Bhanja</h2>
                            <h3>Cardiologist</h3>
                            <a href='https://www.practo.com/bilaspur/doctor/dr-rajib-lochan-bhanja-cardiologist'>More info</a>
                        </div>
                    </div>
                </div>
                <div className='img_position'>
                    <img className='order-3 consl-2' src="https://images1-fabric.practo.com/doctor/618748/dr-rashmi-sharma-59c3ddb5e1f6b.jpg" alt='' />
                    <div className='img_overlay-2'>
                        <div className='img_info'>
                            <h2>Dr. Rashmi Sharma</h2>
                            <h3>Obstetrician, Gynecologist</h3>
                            <a href='https://www.practo.com/bilaspur/doctor/dr-rashmi-sharma-1-gynecologist-obstetrician'>More info</a>
                        </div>
                    </div>
                </div>
                <div className='img_position'>
                    <img className='order-3 consl-2' src="https://images1-fabric.practo.com/doctor/618589/dr-indira-mishra-59c4c2ac494f9.jpg" alt='' />
                    <div className='img_overlay-2'>
                        <div className='img_info'>
                            <h2>Dr. Indira Mishra</h2>
                            <h3>Pediatrician</h3>
                            <a href='https://www.practo.com/bilaspur/doctor/dr-indira-mishra-pediatrician'>More info</a>
                        </div>
                    </div>
                </div>
                <div className='img_position'>
                    <img className='order-3 consl-2' src="https://images1-fabric.practo.com/doctor/618488/dr-kavita-babbar-59c3aa61bfb8d.jpg" alt='' />
                    <div className='img_overlay-2'>
                        <div className='img_info'>
                            <h2>Dr. Kavita Babbar</h2>
                            <h3>Gynecologist</h3>
                            <a href='https://www.practo.com/bilaspur/doctor/dr-kavita-babbar-1-gynecologist-obstetrician'>More info</a>
                        </div>
                    </div>
                </div>
                {/* <img className='span-3 image-grid-row-2 order-1' src="https://cdn.pixabay.com/photo/2015/12/06/18/28/capsules-1079838_960_720.jpg" alt='' /> */}
                {/* <img className='span-3 image-grid-row-2 order-1' src="https://cdn.pixabay.com/photo/2015/12/06/18/28/capsules-1079838_960_720.jpg" alt='' /> */}
                <div className='img_position'>
                    <img className='order-4 consl-2' src="https://images1-fabric.practo.com/doctor/619137/dr-sandhya-chandrakar-59c4c2c95bf83.jpg" alt='' />
                    <div className='img_overlay-2'>
                        <div className='img_info'>
                            <h2>Dr. Sandhya Chandrakar</h2>
                            <h3>specilist in --Surgery</h3>
                            <a href='https://www.practo.com/bilaspur/doctor/dr-sandhya-chandrakar-general-practitioner'>More info</a>
                        </div>
                    </div>
                </div>
            </div>
            <br>
        </br>
        <br>
        </br>
        </div>
        
    )
}

export default Featured