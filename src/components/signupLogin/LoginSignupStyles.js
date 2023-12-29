import styled from "styled-components";
import careerocityLogo from '../../assets/images/careerocityLogo.jpeg'
export const Container = styled.div `
  background-color: #110f1a;
  border-radius: 6px;
  border: 1px solid;
  font-family: "Poppins";
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Form = styled.form `
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 50%px;
  ${'' /* height: 960px; */}
  left: 65%;
  top: 150px;
  background: #110f1a;

  & > * {
    margin: 10px 0;
    width: 100%;
  }
`;

export const Row = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h2 `
  color: #fff;
  font-size: 20px;
`;

export const InputLabel = styled.label `
  color: #fff;
  width: 30%;
  font-weight: 500;
  text-align: left;
  font-size: 12px;
`;

export const Input = styled.input `
  padding: 10px;
  border-radius: 4px;
  border: solid 0.5px;
  font-family: "Poppins", sans-serif;
 
  font-size: 14px;
  width: 70%;
  background-color: #333;
  color: #fff;

  &::placeholder {
    color: #b3b3b3;
  }
`;

export const Button = styled.button `
  margin: 20px 0;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #1565d8;
  color: #fff;
  font-family: "Poppins";
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: #1565d8;
  }
`;

export const CheckboxLabel = styled.label `
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
`;

export const CheckboxInput = styled.input `
  margin-right: 10px;
`;

export const link = styled.div `
  align-items: center;
`;

export const ErrorContainer = styled.div `
  background-color: #ffecec;
  color: #9c2727;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const ErrorText = styled.p `
  margin: 0;
  font-size: 12px;
`;

export const ImageContainer = styled.div `
position: absolute;
left: 2.15%;
width: 60%;
height: 99%;
background: linear-gradient(0deg, rgba(21, 101, 216, 0.9), rgba(21, 101, 216, 0.9)), url(${careerocityLogo});
`;