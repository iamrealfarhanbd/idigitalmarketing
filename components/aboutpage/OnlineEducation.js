import React from 'react';

const OnlineEducation = () => {
    return (
        <section className="space-ptb">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img className="img-fluid" alt="" src="images/about/03.jpg" />
            </div>
            <div className="col-md-6">
              <h2>Discover best classes for the best learning</h2>
              <p className="mb-4">Commitment is something that comes from understanding that everything has its price and then having the willingness to pay that price. This is important because nobody wants to put significant effort into something, only to find out after the fact that the price was too high.</p>
              <div className="row">
                <div className="col-6 col-sm-6 col-md-3 mb-md-0 mb-3">
                  <div className="counter">
                    <div className="counter-number">
                      <h3 className="timer" data-to="2208" data-speed="2000">2208</h3>
                    </div>
                    <p className="mb-0 fw-6">Happy Students</p>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-3 mb-md-0 mb-3">
                  <div className="counter">
                    <div className="counter-number">
                      <h3 className="timer" data-to="250" data-speed="2000">250</h3>
                    </div>
                    <p className="mb-0 fw-6">Our Courses</p>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                  <div className="counter">
                    <div className="counter-number">
                      <h3 className="timer" data-to="130" data-speed="2000">130</h3>
                    </div>
                    <p className="mb-0 fw-6">Our Teachers</p>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                  <div className="counter">
                    <div className="counter-number">
                      <h3 className="timer" data-to="26" data-speed="2000">26</h3>
                    </div>
                    <p className="mb-0 fw-6">Awards Won</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default OnlineEducation;