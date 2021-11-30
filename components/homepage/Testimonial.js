import React from 'react';

const Testimonial = () => {
    return (
        <section className="space-ptb bg-primary" data-jarallax='{"speed": 0.5}' style={{backgroundImage: `url('images/bg/09.png')`, backgroundSize: 'cover'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 text-center">
              <div className="section-title">
                <h2 className="text-white">What people say</h2>
                <p className="mb-0 text-white">It is truly amazing the damage that we, as parents, can inflict on our children. So why do we do it? For the most part, we don’t do it intentionally or with malice.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="owl-carousel owl-nav-bottom-center" data-nav-arrow="false" data-items="2" data-md-items="2" data-sm-items="1" data-xs-items="1" data-xx-items="1" data-space="0" data-autoheight="true">
                <div className="item">
                  <div className="testimonial-style-03">
                    <div className="testimonial-info">
                      <div className="testimonial-quote">
                        <i className="text-white opacity-5 flaticon-quote"></i>
                      </div>
                      <div className="testimonial-content">
                        Excellent Customer support! These guys reply within minutes sometimes and really help you with when you need them. The theme itself is very extended as well. Happy with my purchase!
                      </div>
                      <div className="testimonial-author">
                        <div className="avatar avatar-md">
                          <img className="img-fluid " src="images/avatar/04.jpg" alt="" />
                        </div>
                        <div className="testimonial-name">
                          <h6 className="text-white">Felica Queen</h6>
                          <span className="text-white">- CEO</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-style-03">
                    <div className="testimonial-info">
                      <div className="testimonial-quote">
                        <i className="text-white opacity-5 flaticon-quote"></i>
                      </div>
                      <div className="testimonial-content">
                        I had a few things I needed help with on this theme... Their customer service was amazing and helped me out many times. One of the complete themes with different requirements.
                      </div>
                      <div className="testimonial-author">
                        <div className="avatar avatar-md">
                          <img className="img-fluid " src="images/avatar/05.jpg" alt="" />
                        </div>
                        <div className="testimonial-name">
                          <h6 className="text-white">Sara Lisbon</h6>
                          <span className="text-white">- CTO</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-style-03">
                    <div className="testimonial-info">
                      <div className="testimonial-quote">
                        <i className="text-white opacity-5 flaticon-quote"></i>
                      </div>
                      <div className="testimonial-content">
                        One of the most complete themes here. Thanks a lot for such great features, pages, shortcodes and home variations. And the best of all, great introductions prices.
                      </div>
                      <div className="testimonial-author">
                        <div className="avatar avatar-md">
                          <img className="img-fluid " src="images/avatar/06.jpg" alt="" />
                        </div>
                        <div className="testimonial-name">
                          <h6 className="text-white">Alice Williams</h6>
                          <span className="text-white">- Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Testimonial;