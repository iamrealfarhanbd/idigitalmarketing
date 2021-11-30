import React from 'react';

const Students = () => {
    return (
        <section className="space-ptb bg-overlay-light-97" style={{backgroundImage: `url('images/bg/08.png')`}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-title text-center">
                <h2>Meet out Students</h2>
                <p>Without clarity, you send a very garbled message out to the Universe. We know that the Law of Attraction says that we will attract what we focus on, so if we don’t have clarity, we will attract confusion.</p>
              </div>
            </div>
          </div>
          <div className="owl-carousel teachers-shadow" data-nav-arrow="false" data-nav-dots="true" data-items="3" data-lg-items="2" data-md-items="2" data-sm-items="2" data-space="30" data-autoheight="true">
            <div className="item">
              <div className="teachers">
                <img className="img-fluid" src="images/teachers/05.jpg" alt="" />
                <div className="content pt-0">
                  <div className="bg-white position-relative z-index-1 pt-3">
                    <h6 className="name">Felica Queen</h6>
                    <span>Stock trading</span>
                  </div>
                  <div className="social-icon-round mt-3 text-center">
                    <ul className="d-inline-block">
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                      <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="teachers">
                <img className="img-fluid" src="images/teachers/04.jpg" alt="" />
                <div className="content pt-0">
                  <div className="bg-white position-relative z-index-1 pt-3">
                    <h6 className="name">Alice Williams</h6>
                    <span>Law</span>
                  </div>
                  <div className="social-icon-round mt-3 text-center">
                    <ul className="d-inline-block">
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                      <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="teachers">
                <img className="img-fluid" src="images/teachers/03.jpg" alt="" />
                <div className="content pt-0">
                  <div className="bg-white position-relative z-index-1 pt-3">
                    <h6 className="name">Joana Williams</h6>
                    <span>Digital Marketing</span>
                  </div>
                  <div className="social-icon-round mt-3 text-center">
                    <ul className="d-inline-block">
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                      <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="teachers">
                <img className="img-fluid" src="images/teachers/13.jpg" alt="" />
                <div className="content pt-0">
                  <div className="bg-white position-relative z-index-1 pt-3">
                    <h6 className="name">Mellissa Doe</h6>
                    <span>Public Speaking</span>
                  </div>
                  <div className="social-icon-round mt-3 text-center">
                    <ul className="d-inline-block">
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                      <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Students;