import React from "react"
import Heading from "./Heading"
import "./about.css"
import { homeAbout } from "../../dummyData"

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='https://slidesigma.nyc/templatemonster/react/findpharma/assets/img/home-2/635x450.jpg' alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='FIND ANYTHING' title='Benefits About Online Searching Medicine' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutCard
