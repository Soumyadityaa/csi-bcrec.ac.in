import React, { useState, useEffect } from 'react';
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
  const [activeIndex2, setActiveIndex2] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const slides2 = [
    {
      title: "A Proud Leader",
      testimony: "Serving as the Chairperson of the Computer Society of India BCREC Student's Chapter was an enriching experience. It honed my leadership skills and deepened my passion for technology. I am proud to have been part of a team that fostered innovation and learning.",
      imgSrc: 'https://i.postimg.cc/xdcNYjYG/Passport-Size-Photo-Surajit-Bhattacharyya.jpg',
      name: "Surajit Bhattacharyya",
      role: "Ex-Chairperson",

      title1: "Enriching Journey",
      testimony1: "CSI, a professional body committed to the advancement of Information Technology, can be a pivotal part of your academic journey. The student chapter offers numerous opportunities for skill enhancement through engaging competitions and project development.",
      imgSrc1: 'https://imgtr.ee/images/2024/08/01/0446952af73bba82d9b56368338fe0c1.jpeg',
      name1: "Priyanka Roy",
      role1: "Ex-Secretary",

      title2: "A Transformative Experience",
      testimony2: "Being the Treasurer of the Computer Society of India BCREC Student's Chapter was a truly transformative experience. Through its diverse range of skill-building opportunities, I enhanced my technical abilities, grew in confidence and shaped my professional career.",
      imgSrc2: 'https://imgtr.ee/images/2024/08/01/325dc446724c94ba230c3de70b848888.jpeg',
      name2: "Sayak Rudra",
      role2: "Ex-Treasurer",

    },
    {
      title: "Testimony Coming Soon!",
      testimony: "",
      imgSrc: '',
      name: "",
      role: "",
      
      title1: "Testimony Coming Soon!",
      testimony1: "",
      imgSrc1: '',
      name1: "",
      role1: "",

      title2: "Testimony Coming Soon!",
      testimony2: "",
      imgSrc2: '',
      name2: "",
      role2: "",
    },
    {
      title: "Testimony Coming Soon!",
      testimony: "",
      imgSrc: '',
      name: "",
      role: "",
      
      title1: "Testimony Coming Soon!",
      testimony1: "",
      imgSrc1: '',
      name1: "",
      role1: "",

      title2: "Testimony Coming Soon!",
      testimony2: "",
      imgSrc2: '',
      name2: "",
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev2 = () => {
    setActiveIndex2((prevIndex) => (prevIndex === 0 ? slides2.length - 1 : prevIndex - 1));
  };

  const handleNext2 = () => {
    setActiveIndex2((prevIndex) => (prevIndex === slides2.length - 1 ? 0 : prevIndex + 1));
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
      <header className={`navbar ${navbarVisible ? 'navbar-visible' : ''}`}>
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
            <li><a href="#testimonials">Testimonials</a></li>
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
      <div className="carousel" id='home'>
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
                <button onClick={handleClick} className={clicked ? 'clicked' : ''}>
                  DISCOVER MORE
                  <MdExplore className="discover" size={25} style={{ marginTop: "-2px", position: 'absolute', paddingLeft: "5px" }} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-buttons">
          <button className="carousel-button" onClick={handlePrev}>
            <IoIosArrowBack size={30} />
          </button>
          <button className="carousel-button" onClick={handleNext}>
            <IoIosArrowForward size={30} />
          </button>
        </div>
      </div>
      <section className="box-section">
        <div className="box">
          <GiLightBulb size={80} className='icon' />
          <div className='box-caption'>
            <h4>Learn Skills</h4>
            <h3>with unlimited contests</h3>
          </div>
        </div>
        <div className="box">
          <LiaChalkboardTeacherSolid size={80} className='icon' />
          <div className='box-caption'>
            <h4>Expert Teachers</h4>
            <h3>best & highly qualified</h3>
          </div>
        </div>
        <div className="box">
          <GrCertificate size={80} className='icon' />
          <div className='box-caption'>
            <h4>Certificates</h4>
            <h3>value all over India</h3>
          </div>
        </div>
      </section>
      <div className="carousel" id='second-carousel'>
        <h4>Our Testimonials</h4>
        <h3>What They Say?</h3>
        <div className="carousel-inner" style={{ transform: `translateX(-${activeIndex2 * 100}%)` }}>
          {slides2.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === activeIndex2 ? 'active' : ''}`}
            >
              <div className="carousel-boxes">
                <div className="carousel-box">
                  <p>{slide.title}</p>
                  <p className='testimony'>{slide.testimony}</p>
                  <div className='testimonial'>
                    <img src={slide.imgSrc} alt={slide.name} />
                    <div className='testimonial-caption'>
                      <p>{slide.name}</p>
                      <pre>{slide.role}</pre>
                    </div>
                  </div>
                </div>
                <div className="carousel-box">
                  <p>{slide.title1}</p>
                  <p className='testimony'>{slide.testimony1}</p>
                  <div className='testimonial'>
                    <img src={slide.imgSrc1} alt={slide.name1} />
                    <div className='testimonial-caption'>
                      <p>{slide.name1}</p>
                      <pre>{slide.role1}</pre>
                    </div>
                  </div>
                </div>
                <div className="carousel-box">
                  <p>{slide.title2}</p>
                  <p className='testimony'>{slide.testimony2}</p>
                  <div className='testimonial'>
                    <img src={slide.imgSrc2} alt={slide.name2} />
                    <div className='testimonial-caption'>
                      <p>{slide.name2}</p>
                      <pre>{slide.role2}</pre>
                    </div>
                  </div>
                </div>
                {/* Add more boxes here if needed */}
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-buttons bottom-center">
          <button className="carousel-button" onClick={handlePrev2}>
            <MdOutlineRadioButtonChecked size={30} />
          </button>
          <button className="carousel-button" onClick={handleNext2}>
            <MdOutlineRadioButtonChecked size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
