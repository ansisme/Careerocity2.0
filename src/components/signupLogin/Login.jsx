import { signInWithEmailAndPassword } from 'firebase/auth';
import React , {useState} from 'react';
import {auth } from '../../firebase';
import {Link , Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Form,
  Row,
  Title,
  InputLabel,
  Input,
  Button,
  ImageContainer
} from './LoginSignupStyles';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email");
      return;
    }
    if (!password) {
      setError("Please enter your password");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        // Redirect to home page or dashboard
        <Navigate to="/" />
      })
      .catch((error) => {
        console.log(error);
        switch (error.code) {
          case "auth/invalid-email":
            setError("Invalid email");
            break;
          case "auth/user-disabled":
            setError("This account has been disabled");
            break;
          case "auth/user-not-found":
            setError("This email is not registered");
            break;
          case "auth/wrong-password":
            setError("Wrong password, please try again");
            break;
          case "auth/email-already-in-use":
            setError("This email is already in use");
            break;
          default:
            setError("Something went wrong, please try again");
            break;
        }
      });
  };

  return (
    <Container>
    <ImageContainer className="col-lg-12 col-md-8n col-sm-3">
    </ImageContainer>
      
      <Form onSubmit={login}>
        <Title>Login into your account!</Title>
        <br></br>
        <hr></hr><br></br>
        
        <Row>
          <InputLabel>EMAIL</InputLabel>
          <Input type="email" placeholder="Enter Email ID"  value={email} onChange={(e)=>setEmail(e.target.value)} />
        </Row>
        <Row>
          <InputLabel>PASSWORD</InputLabel>
          <Input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </Row>
        
        <Button>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>LOGIN</Link>
        </Button>
        
        {/* <CheckboxLabel htmlFor="agree">
          <CheckboxInput type="checkbox" id="agree" name="agree" />
          Keep me logged in
        </CheckboxLabel> */}
        <p style = {{color: "white"}}>Don't have an account?
         <Link to="/signup">Sign up here</Link>
      </p>
        {error && <p style={{color: 'red'}}>{error}</p>}
        
      </Form>
    </Container>
  );
}

export default Login;