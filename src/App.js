import logo from './blab.png';
import banner from './banner.jpg';
import menu from './menu.jpeg';
import mario from './mario.jpg';
import dnd from './dnd.jpg';
import Carousel from 'react-bootstrap/Carousel';
import './App.css';

 

function Navbar() {
  return(
    <nav className = "Navbar">
    <img src={logo} className="App-logo"></img>

    <form className="search-bar">
    <input className="search-area" type="search" placeholder="what are we watching?" />
      <button></button>
    </form>

    <ul className="navbar-nav">
      <li className="nav-item">Log In</li>
      <li className="nav-item">Sign Up</li>
    </ul>
      
  </nav>
  )
}

function Banner() {
  return(
  <img src={banner} className="banner" alt="Everything,Everywhere,All at Once Scene"></img>
  )
}

function ImageCarousel() {
  return(
    <Carousel>
      <Carousel.Item>
        <img className="carousel-img" src={menu}></img>
        <img className="carousel-img" src={mario}></img>
        <img className="carousel-img" src={dnd}></img>
        <Carousel.Caption>
          <p>rating here</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


function App() {
  return (
    <div className="body">
      <Navbar />
      <Banner />
      <ImageCarousel />
    </div>
  );
}

export default App;
