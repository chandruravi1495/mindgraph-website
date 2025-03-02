import React from 'react';
import SideBar from './SideBar';
import { FaBars } from 'react-icons/fa';
import {Link} from 'react-router-dom';

function ImageSlider() {

  const[open,setOpen] = React.useState(false)

  const [scrollPosition, setScrollPosition] = React.useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    if(position > 400) {
      
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <>
      {
            open 
            ?
                <SideBar status={setOpen} />
            :
            null
        }
        <div>
          <div className="banner">
              <div className={scrollPosition > 50 ? `home-nav fixed-top color-secondary-bg py-3` : 'home-nav fixed-top py-3'}>
                  <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to="/">
                          <img loading="lazy" src={"logo.png"} className="logo" alt="" />
                      </Link>
                        <div>
                            {/* <img loading="lazy" src="home.png" className="icon icon-1 me-4" alt="" /> */}
                            <FaBars size={30} onClick={() => setOpen(true)} className="nav-icon" color="#fff"/>
                        </div>
                    </div>
                  </div>
              </div>
              <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="carousel-text">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h1>AI <br /> AT YOUR SERVICE</h1>
                          <p className="banner-text">Enterprise AI services for your <br /> journey into tomorrow</p>
                        </div>
                        <div className="box-border">
                            <p className="mb-0">SAY HELLO FUTURE </p>
                        </div>
                      </div>
                    </div>
                    <img loading="lazy" src="bnr-1.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <div className="carousel-text">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h1>IMAGINE <br /> POSSIBILITIES </h1>
                          <p className="banner-text">Connecting AI and HUMAN Minds </p>
                        </div>
                        <p></p>
                        <div className="box-border">
                            <p className="mb-0">SAY HELLO FUTURE</p>
                        </div>
                      </div>
                    </div>
                    <img loading="lazy" src="bnr-2.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <div className="carousel-text">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h1>TRUST YOUR FUTURE <br /> WITH THE MACHINE</h1>
                          <p className="banner-text">Explainable AI from Principal to Practice</p>
                        </div>
                        <div className="box-border">
                            <p className="mb-0">SAY HELLO FUTURE </p>
                        </div>
                      </div>
                    </div>
                    <img loading="lazy" src="bnr-3.png" className="d-block w-100" alt="..." />
                  </div>
                </div>
              </div>
          </div>
      </div>
      </>
  );
}

export default ImageSlider;
