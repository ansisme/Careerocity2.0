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

<<<<<<< HEAD
      
    
    <div class="hidden md:block mr-10" id="navbar-sticky">
      <ul class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-lg font-medium">
        <li>
          <a href="/" class="block px-3 py-2 rounded-lg hover:bg-gray-700 text-white md:hover:bg-blue-700 md:text-blue-700">Home</a>
        </li>
        <li>
          <a href="/aboutus" class="block px-3 py-2 rounded-lg hover:bg-gray-700 text-gray-400 md:hover:text-white md:hover:bg-blue-700 md:text-blue-700">About</a>
        </li>
        <li>
          <a href="/login" class="block px-3 py-2 rounded-lg hover:bg-gray-700 text-gray-400 md:hover:text-white md:hover:bg-blue-700 md:text-blue-700">Login</a>
        </li>
        <li>
          <a href="/signup" class="block px-3 py-2 rounded-lg hover:bg-gray-700 text-gray-400 md:hover:text-white md:hover:bg-blue-700 md:text-blue-700">Sign Up</a>
        </li>
      </ul>
    </div>
    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-lg px-5 ml-20 py-2.5 md:text-xl md:px-7 md:py-3">
        Get Started
      </button>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-600">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
  </div>
  </div>
</nav>

    </Container>
=======
    {/* </Container> */}
>>>>>>> master

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
                <Card.Link href="/api/generateLinks">View Entire List</Card.Link>
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
                <Card.Link href="/api/generateGithubLinks">View Entire List</Card.Link>
              </Card.Body>
            </Card>
            
          </Col>

        </Row>
        <Row>
        <Col>
        <h1 className="trackheading" >
      Keep track of your progress here !
      </h1>
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
      <Col>
      <Footer className = "footer"/>
      </Col>
        
      </Row>
    </Container>
    
  </div>
  </>
  );
}

export default Homepage;