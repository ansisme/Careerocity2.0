import React from 'react'
import YoutubeLogo from '../../assets/images/YoutubeLogo.png';import ResearchPaper from '../../assets/images/ResearchPaper.png';
import JobsLogo from '../../assets/images/JobsLogo.png';
import GithubLogo from '../../assets/images/GithubLogo.png';
import LinkedInLogo from '../../assets/images/LinkedInLogo.png';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../components/Homepage/homepage.css";
import "./homepage.css";
import {Container, Row, Col} from 'react-bootstrap';
import Footer from "../Footer/Footer";
import styles from '../../style';
import Highlight from './Highlighted';
import Navbar from './Navbar';
const cards = [
  {
    title: 'Card 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Card 2',
    description: 'Praesent vel lectus at sapien rhoncus imperdiet nec vel nisi.',
  },
  {
    title: 'Card 3',
    description: 'Etiam sed lectus at risus mollis egestas in vitae orci.',
  },
];


const Cardi = ({ title, description }) => (
  <div className="bg-black cardi rounded-md shadow-lg p-4 text-white">
    <h2 className="text-xl font-bold">{title}</h2>
    <p className="mt-2">{description}</p>
  </div>
);

const CardList = ({ cards }) => (
  <div className="flex flex-wrap justify-center ">
    {cards.map((card, index) => (
      <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-4 ">
        <Cardi {...card} />
      </div>
    ))}
  </div>
);

function Homepage() {
  
  return (

<>


     <div className="homepage">
    {/* <Container fluid >   */}
    <div className= " w-full overflow-hidden">
      <div className= {`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      </div>

    {/* </Container> */}

    <br></br>
    <br></br>
     
    <div className = { ` ${styles.flexStart}`}>
        <div className= {`${styles.boxWidth}`}>
          <Highlight/>
        </div>
      </div>
    
    <Container fluid>

     
    
      <Col xs={12} md={10}>
        <Row xs={12} sm={8} md={4} className="gx-2 gx-md-1 gy-4">
          
        <Col xs={12} md={4}>
            <Card className='card1'>
              <Card.Img variant="top" className='img1' src={JobsLogo} />
              <Card.Body>
                <Card.Title>Jobs and Internships</Card.Title>
                {/* <Card.Subtitle className="mb-2">15</Card.Subtitle> */}
                <Card.Link href="/login">View Entire List</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
          <Card className='card2'>
              <Card.Img className='img2'variant="top" src={ResearchPaper} />
              <Card.Body>
                <Card.Title>Research Papers</Card.Title>
                {/* <Card.Subtitle className="mb-2">57</Card.Subtitle> */}
                <Card.Link href="/login">View Entire List</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
          <Card className='card3'>
              <Card.Img className='img3' variant="top"src={YoutubeLogo} />
              <Card.Body>
                <Card.Title>Youtube Links</Card.Title>
                {/* <Card.Subtitle className="mb-2">23</Card.Subtitle> */}
                <Card.Link href="/api/generateLinks">View Entire List</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
          <Card className='card4'>
              <Card.Img variant="top" className='img4' src={LinkedInLogo} />
              <Card.Body>
                <Card.Title>LinkedIn Profiles</Card.Title>
                {/* <Card.Subtitle className="mb-2">5</Card.Subtitle> */}
                <Card.Link href="/login">View Entire List</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
          <Card className='card5'>
              <Card.Img variant="top" className='img5' src={GithubLogo} />
              <Card.Body>
                <Card.Title>Github Repos</Card.Title>
                {/* <Card.Subtitle className="mb-2">30</Card.Subtitle> */}
                <Card.Link href="/api/generateGithubLinks">View Entire List</Card.Link>
              </Card.Body>
            </Card>
            
          </Col>

        </Row>
        <Row>
        <Col>
        {/* <h1 className="trackheading" >
      Keep track of your progress here !
      </h1> */}
        </Col>
        </Row>
{/*         
        <Row>
          <CardList cards= {cards} />
        </Row> */}

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br><br></br>
      </Col>
      {/* <Row>
      <Col className='rightbar' xs={12} md={1}></Col>
      </Row> */}
      <Row>
      {/* <Col>
      <Footer className = "footer"/>
      </Col> */}
        
      </Row>
    </Container>
    
  </div>
  </>
  );
}

export default Homepage;