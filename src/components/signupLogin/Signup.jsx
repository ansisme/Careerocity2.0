import React, {useState, useEffect} from 'react';
import { Link , Navigate} from "react-router-dom";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {auth } from '../../firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Form,
  Row,
  Title,
  InputLabel,
  Input,
  Button,
  CheckboxLabel,
  CheckboxInput,
  ErrorContainer,
  ErrorText,
  ImageContainer
} from './LoginSignupStyles';

function Signup(){


    //backend
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [agree, setAgree] = useState(false);
    const [errors, setErrors] = useState("");
    const [error, setError] =useState(null);
    //googlesignin
    // const [value, setValue]=useState('');

    // useEffect(()=>{
    //     setValue(localStorage.getItem("email"))
    // });
    
    // const signup=(e) => {
    //     e.preventDefault();
    //     createUserWithEmailAndPassword(auth,email,password, name, confirmpassword, agree )
    //     .then((userCredential) => {
    //         console.log(userCredential)}).catch((error) => {
    //             console.log(error);
    //         });
    // }

    const signup = (e) => {
      e.preventDefault();
      setErrors([]);
      if (!agree) {
        setErrors((prevErrors) => [...prevErrors, "Please check the terms and conditions"]);
      }
  
      if (password !== confirmPassword) {
        setErrors((prevErrors) => [...prevErrors, "Passwords do not match"]);
      }
  
      if (!name) {
        setErrors((prevErrors) => [...prevErrors, "Please enter your name"]);
      } else if (!name.match(/^[a-zA-Z]+$/)) {
        setErrors((prevErrors) => [...prevErrors, "Name should contain only alphabets"]);
      } else if (name.length < 3) {
        setErrors((prevErrors) => [...prevErrors, "Name should be at least 3 characters"]);
      } else if (name.length > 20) {
        setErrors((prevErrors) => [...prevErrors, "Name should be less than 20 characters"]);
      }
      
      if (!email) {
        setErrors((prevErrors) => [...prevErrors, "Please enter your email"]);
      } else if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        setErrors((prevErrors) => [...prevErrors, "Invalid email"]);
      } else if (email.length > 50) {
        setErrors((prevErrors) => [...prevErrors, "Email should be less than 50 characters"]);
      }
  
      if (!password) {
        setErrors((prevErrors) => [...prevErrors, "Please enter your password"]);
      } else if (password.length < 6) {
        setErrors((prevErrors) => [...prevErrors, "Password should be at least 6 characters"]);
      }


      if (errors.length === 0) {
        createUserWithEmailAndPassword(auth, email, password, name, confirmPassword)
        .then((userCredential) => {
          console.log(userCredential);
          <Navigate to = "/login"/>;
        })
        .catch((error) => {
          console.log(error);
          const newErrors = [];
          switch (error.code) {
            case "auth/invalid-email":
              newErrors.push("Invalid email");
              break;
            case "auth/user-disabled":
              newErrors.push("This account has been disabled");
              break;
            case "auth/email-already-in-use":
              newErrors.push("This email is already in use");
              break;
            case "auth/weak-password":
              newErrors.push("Password should be at least 6 characters");
              break;
            case "auth/wrong-password":
              newErrors.push("Incorrect password");
              break;
            default:
              newErrors.push("Something went wrong");
              break;
          }
          setErrors(newErrors);
        });
              
      }
        
    };

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
    <ImageContainer className="col-lg-12 col-md-8n col-sm-3">
       {/* <img src={careerocityLogo} alt="img" /> */}
    </ImageContainer>
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
          <Input type="password" placeholder="Confirm Password" value = {confirmPassword} onChange= {(e)=>setConfirmPassword(e.target.value)} />
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

{/*   error container */}
{errors.length > 0 && (
        <ErrorContainer>
          {errors.map((error) => (
            <ErrorText key={error}>{error}</ErrorText>
          ))}
        </ErrorContainer>
      )}

        <CheckboxLabel htmlFor="agree" >
          <CheckboxInput type="checkbox" id="agree" name="agree" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
          I agree to the terms and conditions
        </CheckboxLabel>
        
        <p style ={{color: "white"}}>Already have an account?
        <Link to="/login"  >Login here</Link> 
        </p>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </Form>
    </Container>
  );
}

export default Signup;
