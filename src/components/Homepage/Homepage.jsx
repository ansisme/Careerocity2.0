import React from 'react'
import {Navigate} from 'react-router-dom';
import YoutubeLogo from '../../assets/images/YoutubeLogo.png';
import careerocityLogo  from '../../assets/images/careerocityLogo.jpeg';
import ResearchPaper from '../../assets/images/ResearchPaper.png';
import JobsLogo from '../../assets/images/JobsLogo.png';
import GithubLogo from '../../assets/images/GithubLogo.png';
import LinkedInLogo from '../../assets/images/LinkedInLogo.png';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../components/Homepage/homepage.css";
import "./homepage.css";
import {Container, Row, Col, InputGroup, FormControl} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
function Homepage() {
  
  return (

     <div className="homepage">
    <Container fluid>  
      <Row xs={12}  md={4} className=" gy-4">
      <Col className='sidebar' xs={12} md={2}>
           <img src ={careerocityLogo} className='logo' alt='logo'/>
      </Col>
      {/* <Col className='homelogo'><FontAwesomeIcon icon={faSearch} /></Col> */}
      
      <Row>
        <Col>
          <h1 className='heading'>
          Careerocity
          </h1>
        </Col>
      </Row>

      <Row className='searchbar'>
        <Col >
        <InputGroup className="mb-3">
  <FormControl placeholder="Data Science" aria-label="Search"/>
  <InputGroup.Text>
  
    <FontAwesomeIcon icon={faSearch} />
  </InputGroup.Text>
  </InputGroup>
        </Col>
      </Row>
    
      <Col xs={12} md={10}>
        <Row xs={12} sm={8} md={4} className="gx-2 gx-md-1 gy-4">
          
        <Col xs={12} md={4}>
            <Card className='card1'>
              <Card.Img variant="top" className='img1' src={JobsLogo} />
              <Card.Body>
                <Card.Title>Jobs and Internships</Card.Title>
                <Card.Subtitle className="mb-2">15</Card.Subtitle>
                <Card.Link href="/login">View Entire List</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
          <Card className='card2'>
              <Card.Img className='img2'variant="top" src={ResearchPaper} />
              <Card.Body>
                <Card.Title>Research Papers</Card.Title>
                <Card.Subtitle className="mb-2">57</Card.Subtitle>
                <Card.Link href="/login">View Entire List</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
          <Card className='card3'>
              <Card.Img className='img3' variant="top"src={YoutubeLogo} />
              <Card.Body>
                <Card.Title>Youtube Links</Card.Title>
                <Card.Subtitle className="mb-2">23</Card.Subtitle>
                <Card.Link href="/login">View Entire List</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
          <Card className='card4'>
              <Card.Img variant="top" className='img4' src={LinkedInLogo} />
              <Card.Body>
                <Card.Title>LinkedIn Profiles</Card.Title>
                <Card.Subtitle className="mb-2">5</Card.Subtitle>
                <Card.Link href="/login">View Entire List</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
          <Card className='card5'>
              <Card.Img variant="top" className='img5' src={GithubLogo} />
              <Card.Body>
                <Card.Title>Github Repos</Card.Title>
                <Card.Subtitle className="mb-2">30</Card.Subtitle>
                <Card.Link href="/login">View Entire List</Card.Link>
              </Card.Body>
            </Card>
            
          </Col>

        </Row>
        <Row>
        <Col>
        <h1 >
      Keep track of your progress here !
      </h1>
        </Col>
        </Row>
        <Row>
          <Col className='components'>
          </Col>
          <Col className='components'>
          </Col>
          <Col className='components'>
          </Col>
        </Row>
      </Col>
      <Row>
      <Col className='rightbar' xs={12} md={1}></Col>
      </Row>
      </Row>
    </Container>
    
  </div>
  );
}

export default Homepage;