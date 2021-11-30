const BlogSidebar = () => {
    return (
<div className="blog-sidebar">
                <div className="widgets">
                  <div className="widget">
                    <h6 className="widget-title">Opening hours</h6>
                    <div className="widget-content">
                      <ul className="list-unstyled mb-0">
                        <li className="d-flex align-items-center mb-2">
                          <i className="far fa-clock text-primary mr-2"></i><b className="text-dark mr-auto">Monday</b>
                          <label className="mb-0">10:00 - 07:30</label>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                          <i className="far fa-clock text-primary mr-2"></i><b className="text-dark mr-auto">Tuesday</b>
                          <label className="mb-0">10:00 - 07:30</label>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                          <i className="far fa-clock text-primary mr-2"></i><b className="text-dark mr-auto">Wednesday</b>
                          <label className="mb-0">10:00 - 07:30</label>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                          <i className="far fa-clock text-primary mr-2"></i><b className="text-dark mr-auto">Thursday</b>
                          <label className="mb-0">10:00 - 07:30</label>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                          <i className="far fa-clock text-primary mr-2"></i><b className="text-dark mr-auto">Friday</b>
                          <label className="mb-0">10:00 - 07:30</label>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                          <i className="far fa-clock text-primary mr-2"></i><b className="text-dark mr-auto">Saturday</b>
                          <label className="mb-0">10:00 - 07:30</label>
                        </li>
                        <li className="d-flex align-items-center">
                          <i className="far fa-clock text-primary mr-2"></i><b className="text-dark mr-auto">Sunday</b>
                          <label className="mb-0">Closed</label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="widget">
                    <h6 className="widget-title">Recent post </h6>
                    <div className="widget-content">
                      <div className="row">
                        <div className="col-12 d-flex mb-3">
                          <div className="recent-post-img avatar avatar-lg mr-3">
                            <img className="img-fluid" src="images/blog/05.jpg" alt="" />
                          </div>
                          <div className="recent-post-info">
                            <small className="d-block">January 05, 2020</small>
                            <a href="#"><b>The greatest choice of courses</b></a>
                          </div>
                        </div>
                        <div className="col-12 d-flex mb-3">
                          <div className="recent-post-img avatar avatar-lg mr-3">
                            <img className="img-fluid" src="images/blog/06.jpg" alt="" />
                          </div>
                          <div className="recent-post-info">
                            <small className="d-block">February 20, 2020</small>
                            <a href="#"><b>You can expand students access to learning</b></a>
                          </div>
                        </div>
                        <div className="col-12 d-flex">
                          <div className="recent-post-img avatar avatar-lg mr-3">
                            <img className="img-fluid" src="images/blog/07.jpg" alt="" />
                          </div>
                          <div className="recent-post-info">
                            <small className="d-block">June 10, 2020</small>
                            <a href="#"><b>12 great free online courses</b></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="widget">
                    <h6 className="widget-title">Where To Find Us </h6>
                    <div className="widget-content">
                      <div className="row">
                        <div className="col-12 d-flex mb-3">
                          <div className="text-primary mr-3">
                            <i className="fas fa-2x fa-map-signs"></i>
                          </div>
                          <div className="recent-post-info">
                            <span>214 West Arnold St Rd New York, NY 10002</span>
                          </div>
                        </div>
                        <div className="col-12 d-flex mb-3">
                          <div className="text-primary mr-3">
                            <i className="far fa-2x fa-envelope"></i>
                          </div>
                          <div className="recent-post-info">
                            <span>letstalk@consult.com<br/> Mon-Fri 10:00am-7:30pm</span>
                          </div>
                        </div>
                        <div className="col-12 d-flex">
                          <div className="text-primary mr-3">
                            <i className="fas fa-2x fa-headphones-alt"></i>
                          </div>
                          <div className="recent-post-info">
                            <span> <a className="text-body" href="tel:+123-345-6789">+(123) 345-6789</a><br /> 24 X 7 online support</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="widget">
                    <h6 className="widget-title">Sign up for our newsletter</h6>
                    <div className="widget-content">
                      <p>Sign up to our Newsletter to get the latest news and offers. </p>
                      <form className="form-inline input-with-btn">
                        <div className="form-group">
                          <input type="text" className="form-control form-control-sm" placeholder="Enter your email" />
                        </div>
                        <button type="submit" className="btn btn-sm btn-primary">Submit</button>
                      </form>
                    </div>
                  </div>
                  <div className="widget">
                    <h6 className="widget-title">Testimonials</h6>
                    <div className="widget-content">
                      <div className="owl-carousel testimonial-style-02" data-nav-arrow="false" data-nav-dots="false" data-items="1" data-lg-items="1" data-md-items="1" data-sm-items="1" data-space="0" data-autoheight="true">
                        <div className="item">
                          <div className="testimonial-item">
                            <div className="author-img">
                              <img src="images/avatar/01.jpg" alt="" />
                            </div>
                            <div className="testimonial-content">
                              <p>We were treated like royalty. Needless to say we are extremely satisfied with the results. Thank you for making it painless, pleasant and most of all hassle free! It fits our needs perfectly.</p>
                            </div>
                            <div className="testimonial-author">
                              <div className="testimonial-name">
                                <p className="mb-1 text-dark font-weight-bold">Michael Bean</p>
                                <small>Web Developer</small>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="testimonial-item">
                            <div className="author-img">
                              <img src="images/avatar/02.jpg" alt="" />
                            </div>
                            <div className="testimonial-content">
                              <p>I have gotten at least 50 times the value from Guruma. I will let my mum know about this, she could really make use of Guruma! Wow what great service, I love it! Guruma is the real deal!</p>
                            </div>
                            <div className="testimonial-author">
                              <div className="testimonial-name">
                                <p className="mb-1 text-dark font-weight-bold">Mariquilla V.</p>
                                <small>Production Manager</small>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="testimonial-item">
                            <div className="author-img">
                              <img src="images/avatar/03.jpg" alt="" />
                            </div>
                            <div className="testimonial-content">
                              <p>We've seen amazing results already. Since I invested in Guruma I made over 100,000 dollars profits. It's the perfect solution for our business. I was amazed at the quality of Guruma.</p>
                            </div>
                            <div className="testimonial-author">
                              <div className="testimonial-name">
                                <p className="mb-1 text-dark font-weight-bold">Fern W.</p>
                                <small>Vetrov Systems Development</small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    );
};

export default BlogSidebar;