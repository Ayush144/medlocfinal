import React from "react"
import "./about.css"
// import Back from "../common/back/Back"
import AboutCard from "./AboutCard"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
const About = () => {
  return (
    <>
      <Navbar/>
      {/* <Back title='About Us' /> */}
      <AboutCard />
      <Footer/>
    </>
  )
}

export default About