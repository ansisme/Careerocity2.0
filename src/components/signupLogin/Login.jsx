import { signInWithEmailAndPassword } from 'firebase/auth';
import React , {useState} from 'react';
import styled from "styled-components";
import {auth } from '../../firebase';
const Container = styled.div`
  background-color: #242424;
  border-radius: 6px;
  border: 1px solid;
  font-family: "Poppins";
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin: 10px 0;
    width: 100%;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 30px;
`;

const InputLabel = styled.label`
  color: #fff;
  width: 30%;
  font-weight: 500;
  text-align: left;
  font-size: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: solid 0.5px;
  font-family: "Poppins", sans-serif;
 
  font-size: 16px;
  width: 70%;
  background-color: #333;
  color: #fff;

  &::placeholder {
    color: #b3b3b3;
  }
`;

const Button = styled.button`
  margin: 20px 0;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #1565d8;
  color: #fff;
  font-family: "Poppins";
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: #1565d8;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
`;

const CheckboxInput = styled.input`
  margin-right: 10px;
`;

function Login() {

    //backend
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const login=(e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password )
        .then((userCredential) => {
            console.log(userCredential);
        }).catch((error) => {
                console.log(error);
            });
    }
    //frontend
  return (
    <Container>
    
      <Form onSubmit={login}>
        <Title>Login into your account!</Title>
        <br></br>
        <hr></hr><br></br>
        
        <Row>
          <InputLabel>EMAIL</InputLabel>
          <Input type="email" placeholder="Enter Email ID"  value = {email} onChange= {(e)=>setEmail(e.target.value)}/>
        </Row>
        <Row>
          <InputLabel>PASSWORD</InputLabel>
          <Input type="password" placeholder="Enter Password" value = {password} onChange= {(e)=>setPassword(e.target.value)} />
        </Row>
        
        <Button type= "submit">LOGIN</Button>
        <CheckboxLabel htmlFor="agree">
          <CheckboxInput type="checkbox" id="agree" name="agree" />
          Keep me logged in
        </CheckboxLabel>
      </Form>
    </Container>
  );
}

export default Login;
