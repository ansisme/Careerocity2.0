import React from 'react'
import styled from "styled-components";
import careerocityLogo from '../../assets/images/careerocityLogo.jpeg'
const Container = styled.div`
  background-color: #242424;
  border-radius: 6px;
  border: 1px solid;
  font-family: "Poppins";
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
`;
const Homepage = () => {
  return (
    <Container>
         <div>
         <h1 >
         Careerocity

         </h1>
         <img src= {careerocityLogo} alt="img"/>
        </div>
    </Container>
   
  )
}

export default Homepage