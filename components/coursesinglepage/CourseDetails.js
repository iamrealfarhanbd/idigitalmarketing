import React from 'react';
import CourseDetailsSidebar from './CourseDetailsSidebar';

const CourseDetails = () => {
    return (
        <section className="space-ptb course-details">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-xl-8">
              <img className="img-fluid  mb-4" src="images/course/10.jpg" alt="" />
              <h4 className="news-title mb-2">PMP Exam Prep Seminar - PMBOK Guide 6</h4>
              <div className="d-flex align-items-center">
                <span className="text-warning h6 mb-0 mr-2">3.5</span>
                <ul className="list-unstyled d-flex mb-0 mr-2">
                  <li><i className="fas fa-star text-warning"></i></li>
                  <li><i className="fas fa-star text-warning"></i></li>
                  <li><i className="fas fa-star text-warning"></i></li>
                  <li><i className="fas fa-star-half-alt text-warning"></i></li>
                  <li><i className="far fa-star text-warning"></i></li>
                </ul>
              </div>
              <div><b className="mr-2">Created by </b><a href="#">Felica Queen</a></div>
              <ul className="list-unstyled d-sm-flex mt-3 mb-4">
                <li className="d-inline"><a className="btn btn-outline-dark-hover btn-sm mr-3 mb-sm-0 mb-3" href="#">Wishlist</a></li>
                <li className="d-inline social-share">
                  <a className="btn btn-outline-primary-hover btn-sm mr-3 mb-sm-0 mb-3" href="#">Share</a>
                  <ul>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                  </ul>
                </li>
                <li className="d-inline"><a className="btn btn-outline-dark-hover btn-sm" href="#">Gift this course</a></li>
              </ul>
              <ul className="list-unstyled d-flex flex-wrap mb-5">
                <li className="course-d-Teacher mr-3 mr-lg-5 mb-2 mb-lg-0">
                  <div className="d-flex">
                    <img className="mr-2 mr-lg-3 mt-2" src="images/avatar/11.jpg" alt="" />
                    <div className="d-block">
                      <p className="mb-0">Teacher</p>
                      <span className="lead fw-6 text-dark">Alice Williams</span>
                    </div>
                  </div>
                </li>
                <li className="mr-3 mr-lg-5 mb-2 mb-lg-0">
                  <div className="d-flex">
                    <i className="flaticon-bookmark fa-3x mt-2 mr-2 mr-lg-3 text-primary"></i>
                    <div className="d-block">
                      <p className="mb-0">Categories</p>
                      <span className="lead fw-6 text-dark">Project Management</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex">
                    <i className="flaticon-student fa-3x mt-2 mr-2 mr-lg-3 text-primary"></i>
                    <div className="d-block">
                      <p className="mb-0">Students</p>
                      <span className="lead fw-6 text-dark">157 (Registered)</span>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="border mb-4">
                <h6 className="text-dark px-4 py-2 bg-light mb-0">Description</h6>
                <div className="p-4 border-top">
                  <span className="lead text-dark fw-6">Course Description</span>
                  <p className="mt-2">Where there is no change. Briefly imagine that you are not going to live and discover your unfulfilled dreams. Instead, you continue doing what you have in the past. What will life be like in 10 years time? Step out, every step you take you get older, days pass, weeks pass. Notice how your body is, how your mind is, how you feel about staying on this path. </p>
                  <p className="mb-4">Walk out into your future to the 10 year point. Walk out 10 years into your future and feel how it feels to carry on doing the same thing. This path is just like today, with one difference: you have 10 fewer years remaining in your life.</p>
                  <span className="lead text-dark fw-6">Main features</span>
                  <ul className="list mt-2">
                    <li><i className="far fa-circle"></i>Use a past defeat as a motivator. </li>
                    <li><i className="far fa-circle"></i>Most people believe that success is difficult.</li>
                    <li><i className="far fa-circle"></i>Success is something of which we all want more.</li>
                    <li><i className="far fa-circle"></i>Give yourself the power of responsibility. </li>
                    <li><i className="far fa-circle"></i>Remind yourself the only thing stopping you is yourself.</li>
                    <li><i className="far fa-circle"></i>They’re wrong – it’s not!</li>
                  </ul>
                </div>
              </div>
              <div className="border mb-4">
                <h6 className="text-dark px-4 py-2 bg-light mb-0">Curriculum</h6>
                <div className="p-4 border-top">
                  <span className="lead text-dark fw-6">Overview</span>
                  <ul className="list-unstyled mt-3">
                    <li className="d-sm-flex align-items-center border-bottom pb-3 mb-3">
                      <i className="flaticon-list-1 fa-sm mr-2 text-primary"></i>
                      <span className="mr-4">Lecture 1 :</span>
                      <span>Getting Started</span>
                      <div className="ml-auto">
                        <i className="far fa-clock text-primary mr-2"></i>
                        <span>45 min</span>
                      </div>
                    </li>
                    <li className="d-sm-flex align-items-center border-bottom pb-3 mb-3">
                      <i className="flaticon-list-1 fa-sm mr-2 text-primary"></i>
                      <span className="mr-4">Lecture 2 :</span>
                      <span>YouTube Video</span>
                      <div className="ml-auto">
                        <i className="far fa-clock text-primary mr-2"></i>
                        <span>30 min</span>
                      </div>
                    </li>
                    <li className="d-sm-flex align-items-center pb-3 mb-3">
                      <i className="flaticon-list-1 fa-sm mr-2 text-primary"></i>
                      <span className="mr-4">Lecture 3 :</span>
                      <span>Live lesson - zoom</span>
                      <div className="ml-auto">
                        <i className="far fa-clock text-primary mr-2"></i>
                        <span>20 min</span>
                      </div>
                    </li>
                  </ul>
                  <span className="lead text-dark fw-6">Beginner</span>
                  <ul className="list-unstyled mt-3 mb-0">
                    <li className="d-sm-flex align-items-center border-bottom pb-3 mb-3">
                      <i className="flaticon-list-1 fa-sm mr-2 text-primary"></i>
                      <span className="mr-4">Lecture 1 :</span>
                      <span>Getting Started</span>
                      <div className="ml-auto">
                        <i className="far fa-clock text-primary mr-2"></i>
                        <span>45 min</span>
                      </div>
                    </li>
                    <li className="d-sm-flex align-items-center border-bottom pb-3 mb-3">
                      <i className="flaticon-list-1 fa-sm mr-2 text-primary"></i>
                      <span className="mr-4">Lecture 2 :</span>
                      <span>YouTube Video</span>
                      <div className="ml-auto">
                        <i className="far fa-clock text-primary mr-2"></i>
                        <span>30 min</span>
                      </div>
                    </li>
                    <li className="d-sm-flex align-items-center">
                      <i className="flaticon-list-1 fa-sm mr-2 text-primary"></i>
                      <span className="mr-4">Lecture 3 :</span>
                      <span>Live lesson - zoom</span>
                      <div className="ml-auto">
                        <i className="far fa-clock text-primary mr-2"></i>
                        <span>20 min</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border mb-4">
                <h6 className="text-dark px-4 py-2 bg-light mb-0">Student feedback </h6>
                <div className="p-4 border-top">
                  <div className="d-flex align-items-center mb-2">
                    <div className="mr-auto">
                      <span>40 Reviews</span>
                      <ul className="list-unstyled d-flex mb-0">
                        <li><i className="fas fa-star text-warning"></i></li>
                        <li><i className="fas fa-star text-warning"></i></li>
                        <li><i className="fas fa-star text-warning"></i></li>
                        <li><i className="fas fa-star-half-alt text-warning"></i></li>
                        <li><i className="far fa-star text-warning"></i></li>
                      </ul>
                    </div>
                    <b className="display-4 text-warning font-weight-bold">3.5</b>
                  </div>
                  <div className="progress-item mb-2">
                    <div className="d-flex">
                      <div className="progress-title mb-1 mr-auto">5 Stars</div>
                      <span>14</span>
                    </div>
                    <div className="progress rounded" style={{height: '6px'}}>
                      <div className="progress-bar bg-warning rounded" role="progressbar" style={{width: '75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="progress-item mb-2">
                    <div className="d-flex">
                      <div className="progress-title mb-1 mr-auto">4 Stars</div>
                      <span>12</span>
                    </div>
                    <div className="progress rounded" style={{height: '6px'}}>
                      <div className="progress-bar bg-warning rounded" role="progressbar" style={{width: '55%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="progress-item mb-2">
                    <div className="d-flex">
                      <div className="progress-title mb-1 mr-auto">3 Stars</div>
                      <span>3</span>
                    </div>
                    <div className="progress rounded" style={{height: '6px'}}>
                      <div className="progress-bar bg-warning rounded" role="progressbar" style={{width: '75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="progress-item mb-2">
                    <div className="d-flex">
                      <div className="progress-title mb-1 mr-auto">2 Stars</div>
                      <span>4</span>
                    </div>
                    <div className="progress rounded" style={{height: '6px'}}>
                      <div className="progress-bar bg-warning rounded" role="progressbar" style={{width: '35%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="progress-item">
                    <div className="d-flex">
                      <div className="progress-title mb-1 mr-auto">1 Stars</div>
                      <span>7</span>
                    </div>
                    <div className="progress rounded" style={{height: '6px'}}>
                      <div className="progress-bar bg-warning rounded" role="progressbar" style={{width: '75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border mb-4">
                <h6 className="text-dark px-4 py-2 bg-light mb-0">Listing 5 Reviews For PMP Exam Prep Seminar - PMBOK Guide 6 </h6>
                <div className="p-4 border-top">
                  <div className="mb-4 d-xl-inline-flex">
                    <img className="mr-3 media-img" src="images/avatar/06.jpg" alt="" />
                    <div className="media-body">
                      <div className="px-xl-4 mt-3 mt-xl-0">
                        <div className="d-flex align-items-center">
                          <h6 className="mt-0">Felica Queen </h6>
                          <div className="d-flex ml-auto mb-3">
                            <span className="px-2 border text-success rounded-sm d-inline-block mr-2">4.0</span>
                            <ul className="list-unstyled d-flex mb-0">
                              <li><i className="fas fa-star text-warning"></i></li>
                              <li><i className="fas fa-star text-warning"></i></li>
                              <li><i className="fas fa-star text-warning"></i></li>
                              <li><i className="fas fa-star text-warning"></i></li>
                              <li><i className="far fa-star text-warning"></i></li>
                            </ul>
                          </div>
                        </div>
                        <p>Then work backwards to develop the plan. What steps are required to get you to the goals? Make the plan as detailed as possible. Try to visualize and then plan.</p>
                        <div className="d-sm-flex">
                          <a className="bg-light text-dark rounded-sm px-3 py-1 mr-2 mr-xl-4 font-sm d-inline-block mb-2 mb-sm-0" href="#"> <i className="fas fa-reply pr-1"></i> Reply Review </a>
                          <a className="bg-success-soft text-success rounded-sm px-3 py-1 mr-2 mr-xl-4 font-sm d-inline-block" href="#"> <i className="far fa-thumbs-up pr-1"></i> 56 Votes</a>
                          <a className="bg-danger-soft text-danger rounded-sm px-3 py-1 font-sm d-inline-block" href="#"> <i className="far fa-thumbs-down pr-1"></i> 06</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="d-xl-inline-flex mt-4 mb-4">
                    <img className="mr-3 media-img" src="images/avatar/11.jpg" alt="" />
                    <div className="media-body">
                      <div className="px-xl-4 mt-3 mt-xl-0">
                        <div className="d-flex align-items-center">
                          <h6 className="mt-0">Alice Williams </h6>
                          <div className="d-flex ml-auto mb-3">
                            <span className="px-2 border text-success border-radius d-inline-block mr-2">3.0</span>
                            <ul className="list-unstyled d-flex mb-0">
                              <li><i className="fas fa-star text-warning"></i></li>
                              <li><i className="fas fa-star text-warning"></i></li>
                              <li><i className="fas fa-star text-warning"></i></li>
                              <li><i className="far fa-star text-warning"></i></li>
                              <li><i className="far fa-star text-warning"></i></li>
                            </ul>
                          </div>
                        </div>
                        <p>Along with your plans, you should consider developing an action orientation that will keep you motivated to move forward at all times This requires a little.</p>
                        <div className="d-sm-flex">
                          <a className="bg-light text-dark rounded-sm px-3 py-1 mr-2 mr-xl-4 font-sm d-inline-block mb-2 mb-sm-0" href="#"> <i className="fas fa-reply pr-1"></i> Reply Review </a>
                          <a className="bg-success-soft text-success rounded-sm px-3 py-1 mr-2 mr-xl-4 font-sm d-inline-block" href="#"> <i className="far fa-thumbs-up pr-1"></i> 67 Votes</a>
                          <a className="bg-danger-soft text-danger rounded-sm px-3 py-1 font-sm d-inline-block" href="#"> <i className="far fa-thumbs-down pr-1"></i> 04</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="d-xl-inline-flex">
                    <img className="mr-3 media-img" src="images/avatar/05.jpg" alt="" />
                    <div className="media-body">
                      <div className="px-xl-4 mt-3 mt-xl-0">
                        <div className="d-flex align-items-center">
                          <h6 className="mt-0">Mellissa Doe</h6>
                          <div className="d-flex ml-auto mb-3">
                            <span className="px-2 border text-success rounded-sm d-inline-block mr-2">5.0</span>
                            <ul className="list-unstyled d-flex mb-0">
                              <li><i className="fas fa-star text-warning"></i></li>
                              <li><i className="fas fa-star text-warning"></i></li>
                              <li><i className="fas fa-star text-warning"></i></li>
                              <li><i className="fas fa-star text-warning"></i></li>
                              <li><i className="fas fa-star text-warning"></i></li>
                            </ul>
                          </div>
                        </div>
                        <p>I coach my clients to practice the 3 D’s – Defer, Delegate or Delete. Can the particular activity be done later? Defer it! Can it be done by someone else? Delegate</p>
                        <div className="d-sm-flex">
                          <a className="bg-light text-dark rounded-sm px-3 py-1 mr-2 mr-xl-4 font-sm d-inline-block mb-2 mb-sm-0" href="#"> <i className="fas fa-reply pr-1"></i> Reply Review </a>
                          <a className="bg-success-soft text-success rounded-sm px-3 py-1 mr-2 mr-xl-4 font-sm d-inline-block" href="#"> <i className="far fa-thumbs-up pr-1"></i> 48 Votes</a>
                          <a className="bg-danger-soft text-danger rounded-sm px-3 py-1 font-sm d-inline-block" href="#"> <i className="far fa-thumbs-down pr-1"></i> 09</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border">
                <h6 className="text-dark px-4 py-2 bg-light mb-0">Add a Review</h6>
                <div className="p-4 border-top">
                  <form className="form-flat-style">
                    <div className="form-row">
                      <div className="form-group col-md-12">
                        <div className="ratings">
                          <input type="radio" id="star5" name="ratings" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
                          <input type="radio" id="star4half" name="ratings" value="4 and a half" /><label className="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                          <input type="radio" id="star4" name="ratings" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                          <input type="radio" id="star3half" name="ratings" value="3 and a half" /><label className="half" for="star3half" title="Meh - 3.5 stars"></label>
                          <input type="radio" id="star3" name="ratings" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
                          <input type="radio" id="star2half" name="ratings" value="2 and a half" /><label className="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                          <input type="radio" id="star2" name="ratings" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                          <input type="radio" id="star1half" name="ratings" value="1 and a half" /><label className="half" for="star1half" title="Meh - 1.5 stars"></label>
                          <input type="radio" id="star1" name="ratings" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                          <input type="radio" id="starhalf" name="ratings" value="half" /><label className="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                        </div>
                      </div>
                      <div className="form-group col-lg-4">
                        <label>Your name</label>
                        <input type="text" className="form-control" placeholder="Your name" />
                      </div>
                      <div className="form-group col-lg-4">
                        <label>Your email</label>
                        <input type="email" className="form-control" placeholder="Your email" />
                      </div>
                      <div className="form-group col-lg-4">
                        <label>Subject</label>
                        <input type="text" className="form-control" id="phone" placeholder="Subject" />
                      </div>
                      <div className="form-group col-lg-12">
                        <label>Your message</label>
                        <textarea className="form-control" rows="4" placeholder="Your message"></textarea>
                      </div>
                      <div className="col-md-12">
                        <a className="btn btn-primary" href="#">Submit review</a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-xl-4 mt-5 mt-md-0">
                <CourseDetailsSidebar />
            </div>
          </div>
        </div>
      </section>
    );
};

export default CourseDetails;