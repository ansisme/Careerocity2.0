import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
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

const link = styled.div`
  align-items: center;
`;

function Signup(){


    //backend
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState(false);
    
    //googlesignin
    // const [value, setValue]=useState('');

    // useEffect(()=>{
    //     setValue(localStorage.getItem("email"))
    // });
    
    const signup=(e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password, name, confirmpassword, agree )
        .then((userCredential) => {
            console.log(userCredential)}).catch((error) => {
                console.log(error);
            });
    }

    //function for google signin
    // const googleSignIn = () => {
        
    //     const handleClick =()=>{
    //         signInWithPopup(auth, GoogleAuthProvider)
    //     .then((data) => {
    //         setValue(data.user.email)
    //         localStorage.setItem("email", data.user.email)
           
    //     })
    // };

    
    //frontend

  return (
    <Container>
    
      <Form onSubmit={signup}>
        <Title>Register into Individual Account here!</Title>
        <br></br>
        <hr></hr><br></br>
        <Row>
          <InputLabel>FULL NAME</InputLabel>
          <Input type="name" placeholder="Enter Full Name" />
        </Row>
        <Row>
          <InputLabel>EMAIL</InputLabel>
          <Input type="email" placeholder="Enter Email ID" value = {email} onChange= {(e)=>setEmail(e.target.value)}/>
        </Row>
        <Row>
          <InputLabel>PASSWORD</InputLabel>
          <Input type="password" placeholder="Enter Password" value = {password} onChange= {(e)=>setPassword(e.target.value)}/>
        </Row>
        <Row>
          <InputLabel>CONFIRM PASSWORD</InputLabel>
          <Input type="password" placeholder="Confirm Password" value = {confirmpassword} onChange= {(e)=>setConfirmPassword(e.target.value)} />
        </Row>
        {/* <Link to="/login" className = "link"> */}
          <Button>
              <Link to = "/login" style={{ color: 'white', textDecoration: 'none' }}>
              REGISTER
              </Link>
          </Button>
          {/* <Button>
                <Link to = "/login" style={{ color: 'white', textDecoration: 'none' }}>
                GOOGLE SIGN IN
                </Link>
            </Button> */}
        {/* </Link> */}

        <CheckboxLabel htmlFor="agree">
          <CheckboxInput type="checkbox" id="agree" name="agree" />
          I agree to the terms and conditions
        </CheckboxLabel>
      </Form>
    </Container>
  );
}

export default Signup;
