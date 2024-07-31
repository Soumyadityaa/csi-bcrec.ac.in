import React, { useState, useEffect} from 'react';
import './App.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { MdExplore } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { GrCertificate } from "react-icons/gr";
import { GiLightBulb } from "react-icons/gi";
import { MdOutlineRadioButtonChecked } from "react-icons/md";


function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [boxCarouselIndex, setBoxCarouselIndex] = useState(0);


  const slides = [
    {
      src: "https://i.postimg.cc/yNtMTgpM/pexels-photo-6193659.png",
      label: "Learn new things",
      label1: "To explore daily",
      caption: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      src: "https://i.postimg.cc/qBhR7Tyq/pexels-photo-6193659-1.png",
      label: "Join weekly tasks",
      label1: "To stand out ",
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      src: "https://i.postimg.cc/1zSMKqLd/pexels-photo-6193659-2.png",
      label: "Read daily blogs &",
      label1: "Keep in touch",
      caption: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
    }
  ];

  const boxSlides = [
    { 
      title: "A Proud Leader",
      content: "Serving as the Chairperson of the Computer Society of India BCREC Student's Chapter was an enriching experience. It honed my leadership skills and deepened my passion for technology. I am proud to have been part of a team that fostered innovation and learning",
      src: "https://i.postimg.cc/xdcNYjYG/Passport-Size-Photo-Surajit-Bhattacharyya.jpg",
      label: "Surajit Bhattacharyya",
      label1: "Ex-Chairperson",
    },
    { content: "Box 2" },
    { content: "Box 3" }
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const handleBoxCarouselPrev = () => {
    setBoxCarouselIndex((prevIndex) => (prevIndex === 0 ? boxSlides.length - 1 : prevIndex - 1));
  };

  const handleBoxCarouselNext = () => {
    setBoxCarouselIndex((prevIndex) => (prevIndex === boxSlides.length - 1 ? 0 : prevIndex + 1));
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    window.location.href = "#home"; // Navigate to the home section
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarVisible(true);
      } else {
        setNavbarVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <header className ={`navbar ${navbarVisible ? 'navbar-visible' : ''}`}>
        <div className="logo">
          <img src="https://i.postimg.cc/GpfSp5f1/file-65.png" alt="Logo" />
          <p>CSI BCREC</p>
        </div>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#courses">Contests</a></li>
            <li><a href="#ourteam">Our Team</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="close-menu" onClick={closeMenu}>
            <FaTimes size={25} />
          </div>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <FaBars size={25} />
        </div>
      </header>
      <div className="carousel">
        <div className="carousel-inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
            >
              <img src={slide.src} alt={slide.label} />
              <div className="carousel-caption">
                <h1>Technology for Masses!</h1>
                <h3>{slide.label}</h3>
                <h2>{slide.label1}</h2>
                <p>{slide.caption}</p>
                <button onClick={handleClick} className={clicked ? 'clicked' : ''}>DISCOVER MORE<MdExplore className="discover" size={25} style={{marginTop: "-2px", position: 'absolute', paddingLeft: "5px"}}/></button>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-buttons">
          <button className="carousel-button" onClick={handlePrev}>
           <IoIosArrowBack size={30}/>  
          </button>
          <button className="carousel-button" onClick={handleNext}>
            <IoIosArrowForward size={30}/>
          </button>
        </div>
      </div>
      <section className="box-section">
        <div className="box">
         <GiLightBulb size={80} className='icon'/>
         <div className='box-caption'>
            <h4>Learn Skills</h4>
            <h3>with unlimited contests</h3>
          </div>
        </div>
        <div className="box">
          <LiaChalkboardTeacherSolid  size={80} className='icon'/>
          <div className='box-caption'>
            <h4>Expert Teachers</h4>
            <h3>best & highly qualified</h3>
          </div>
        </div>
        <div className="box">
        <GrCertificate size={80} className='icon'/>
          <div className='box-caption'>
            <h4>Certificates</h4>
            <h3>value all over India</h3>
          </div>
        </div>
      </section>
      <section className="carousel-section">
        <p>Our Testimonials</p>
        <h4>What They Say?</h4>
        <div className="carousel-boxes-inner" style={{ transform: `translateX(-${boxCarouselIndex * 100}%)` }}>
          {boxSlides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-box-item ${index === boxCarouselIndex ? 'active' : ''}`}
            >
              <div className="box">
                <h1>{slide.title}</h1>
                <p>{slide.content}</p>
                <div className='person'>
                  <img src= {slide.src} alt={slide.label} />
                  <div>
                    <h2>{slide.label}</h2>
                    <h3>{slide.label1}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-buttons">
          <button className="carousel-button" onClick={handleBoxCarouselPrev}>
            <MdOutlineRadioButtonChecked size={30} className='icon'/>
          </button>
          <button className="carousel-button" onClick={handleBoxCarouselNext}>
            <MdOutlineRadioButtonChecked size={30}  className='icon'/>
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
