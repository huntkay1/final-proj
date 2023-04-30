import logo from './blab.png';
import banner from './banner2.jpg';
import everything from './everything.jpg';
import React, { useState, useEffect } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://laicjuordudizaoukukg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhaWNqdW9yZHVkaXphb3VrdWtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgxMzI5MzgsImV4cCI6MTk5MzcwODkzOH0.6RVFmMqlii7oCPwuLFHfzOzbAfWtDtFzFDh9dN8jpmM'
const supabase = createClient(supabaseUrl, supabaseKey)


function Navbar() {
  
  return(
    <Container fluid className= "pb-3 pt-3">
      <Row className= "justify-content-between py-3 align-items-center" >

        <Col>
          <form className="search-bar">
          <input id="search-input" className="search-area" type="search" placeholder="what are we watching?" />
            <button className="search-button"></button>
          </form>
        </Col>

        <Col className="d-flex align-items-center justify-content-center banner">
          <img src={logo} className="App-logo"></img>
        </Col>

        <Col className="d-flex justify-content-end pr-0">
          <ul className= "d-flex list-inline">
            <li className="list-inline-item mr-3"><a href="" className="nav-link">Log In</a></li>
            <li className="list-inline-item"><a href="" className="nav-link">Sign Up</a></li>
          </ul>
        </Col>
        
    </Row>
  </Container>
  )
}

function Banner() {
  return(
    <Container fluid>

      <Row className="justify-content-center">
        <Col className="text-center">
        <img src={banner} className="banner-img" alt="Everything,Everywhere,All at Once Scene"></img>
        </Col>
      </Row>

    </Container>

  )
}


function ImageCarousel() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        "https://imdb-api.com/en/API/InTheaters/k_jih9bpg0"
      );
      const data = await response.json();
      setMovies(data.items.slice(0, 10)); 
    }
    fetchMovies();
  }, []);


  return (
    <div>
      <h1 className="carousel-head">What Everyone's Talking About</h1>
      <div className="container text-center">
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop
          centerMode
          centerSlidePercentage={30}
          selectedItem={2}
          dynamicHeight={false}
          width="100%"
        >
          {movies.map((movie) => (
            <div key={movie.id}>
              <img className="carousel-image" src={movie.image} style={{ width: "300px", height: "400px" }}></img>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}





function Review() {


  return (
    <Container fluid className="review-area mt-5">
      <Row>
        <Col className="review-img-container col-lg-2">
          <img height={350} width={260} src={everything} alt="Everything, Everywhere, All at Once poster" />
        </Col>

        <Col md={5} className="review-text-container">
          <h1>Everything, Everywhere, All at Once</h1>
          <h2>Tell us what you thought.</h2>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control
                as="textarea"
                rows={5}
                style={{ backgroundColor: "#151515", color: "white" }}
              />
              <button type="submit" className="button" >Submit</button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}



function App() {
  return (
    <div className="body">
      <Navbar />
      <Banner />
      <ImageCarousel />
      <Review />
    </div>
  );
}

export default App;
