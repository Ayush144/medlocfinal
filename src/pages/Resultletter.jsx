// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import styled from 'styled-components';
// import Response from './Response';
import React from 'react'
import './ResultletterCSS.css';
import Explore from './Explore';
import { ShoppingBag } from '@mui/icons-material';
// import 'G:/React/ecommerceapp/node_modules/bootstrap/dist/css/bootstrap.min.css';

const Container = styled.div`
    height: 100%;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Resultletter = (props) => {
    return (
        <Container>
            <div className="retable">
                <div className="resultA">
                    <table className="relayout" cellSpacing="0" cellPadding="0">
                        <tr>
                            <td className="lefttb"><LocalHospitalOutlinedIcon className="sym" /> <span>{props.name}</span></td>
                            <td className="righttbr"><span className="sym">&#8377; </span><span> {props.price}&#8377;</span></td>
                        </tr>
                        <tr>
                            <td className="lefttb"><LocationOnIcon className="sym" />{props.address}</td>
                            <td className="righttb"><ShoppingBag className="sym" /><a href="https://goo.gl/maps/72u4RDauSFHAr8Uh6">Buy</a></td>
                        </tr>
                        <tr>
                            <td className="lefttb"><AddIcCallIcon className="sym" /> {props.contactNo}</td>
                            <td ></td>
                        </tr>
                    </table>
                    <Explore/>
                    
                </div>
            </div>
        </Container>
    )
}

export default Resultletter
