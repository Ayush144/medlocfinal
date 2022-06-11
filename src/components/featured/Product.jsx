import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
// import { FcSearch} from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
import { SearchOutlined } from '@material-ui/icons';


const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;

`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;
`;


const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease-in;

    &:hover{
        opacity: 0.7;
        background-image: linear-gradient(45deg, #5651e5 0%, #709dff 100%);
    transform: scale(1.1);

    }
`;

const Product = ({ item }) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                    <Link className="alink" to="/produ"><SearchOutlined/></Link>
                </Icon>
                <Icon>
                    <FaChevronRight/>
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
