import styled from "styled-components"
import React from 'react'
import Login from './Login'

const Container = styled.div`
// border: 1px solid red;
`;

const MainLogin = () => {
  return (
    <Container>
        <Login/>
    </Container>
  )
}

export default MainLogin