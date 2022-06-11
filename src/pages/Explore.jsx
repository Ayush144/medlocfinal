import React from 'react';
import useCollapse from 'react-collapsed';
import './Explore.css';
// import Map from "./Map";
function Collapsible() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return (
        <div className="collapsible">
            <div className="header" {...getToggleProps()}>
                {isExpanded ? 'Collapse Map' : 'Expand Map'}
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    <div className='mxheight2'>
                        {/* <Map/> */}
                    {/* <iframe src="<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.141585413062!2d82.1590835147827!3d22.08240918543721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b1a6fc108ef%3A0x6df268efff2b3350!2sLIFE%20CARE%20MEDICAL%20STORE!5e0!3m2!1sen!2sin!4v1654354698157!5m2!1sen!2sin" style={{ width:'600px', height:'760px', style:'border:0', loading:'lazy', referrerpolicy:'no-referrer-when-downgrade' }} ></iframe> */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.141585413062!2d82.1590835147827!3d22.08240918543721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b1a6fc108ef%3A0x6df268efff2b3350!2sLIFE%20CARE%20MEDICAL%20STORE!5e0!3m2!1sen!2sin!4v1654354698157!5m2!1sen!2sin" style={{ width:'100%', height:'670px', style:'border:0', loading:'lazy', referrerpolicy:'no-referrer-when-downgrade' }}></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
function Explore() {
    return (
        <Collapsible />
    );
}
export default Explore;