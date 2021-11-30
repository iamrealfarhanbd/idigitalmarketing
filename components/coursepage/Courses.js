import React from 'react';

const Courses = ({courses}) => {
    console.log(courses)
    return (
    <section className="space-ptb course-details">
        <div className="container">
        <div className="row">
            <div className="col-lg-4">
                <div className="widgets">
                    <div className="widget widget-serach">
                        <h6 className="widget-title">Search</h6>
                        <div className="widget-content">
                            <form className="fill-form">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search" />
                            </div>
                            <button type="button" className="btn btn-primary">Search</button>
                            </form>
                        </div>
                    </div>
                    <div className="widget widget-Categories">
                        <h6 className="widget-title">Categories</h6>
                        <div className="widget-content">
                            <div className="custom-control custom-checkbox mb-3">
                                <input type="checkbox" className="custom-control-input" id="checkbox1" />
                                <label className="custom-control-label" for="checkbox1">Design</label>
                            </div>
                            <div className="custom-control custom-checkbox mb-3">
                                <input type="checkbox" className="custom-control-input" id="checkbox2" />
                                <label className="custom-control-label" for="checkbox2">Development</label>
                            </div>
                            <div className="custom-control custom-checkbox mb-3">
                                <input type="checkbox" className="custom-control-input" id="checkbox3" />
                                <label className="custom-control-label" for="checkbox3">Marketing</label>
                            </div>
                            <div className="custom-control custom-checkbox mb-3">
                            <input type="checkbox" className="custom-control-input" id="checkbox4" />
                            <label className="custom-control-label" for="checkbox4">IT & software</label>
                            </div>
                            <div className="custom-control custom-checkbox mb-3">
                            <input type="checkbox" className="custom-control-input" id="checkbox5" />
                            <label className="custom-control-label" for="checkbox5">Photography</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="checkbox6" />
                            <label className="custom-control-label" for="checkbox6">Music</label>
                            </div>
                        </div>
                    </div>
                    <div className="widget">
                        <div className="widget-title">
                            <h6>Levels</h6>
                        </div>
                        <div className="widget-content">
                            <div className="custom-control custom-checkbox mb-3">
                                <input type="checkbox" className="custom-control-input" id="checkbox7" />
                                <label className="custom-control-label" for="checkbox7">Beginner</label>
                            </div>
                            <div className="custom-control custom-checkbox mb-3">
                            <input type="checkbox" className="custom-control-input" id="checkbox8" />
                            <label className="custom-control-label" for="checkbox8">Intermediate</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="checkbox9" />
                            <label className="custom-control-label" for="checkbox9">Advanced</label>
                            </div>
                        </div>
                    </div>
                    <div className="widget">
                        <div className="widget-title">
                            <h6>Type</h6>
                        </div>
                        <div className="widget-content">
                            <div className="custom-control custom-checkbox mb-3">
                                <input type="checkbox" className="custom-control-input" id="checkbox12" />
                                <label className="custom-control-label" for="checkbox12">Free Course</label>
                            </div>
                            <div className="custom-control custom-checkbox mb-3">
                                <input type="checkbox" className="custom-control-input" id="checkbox10" />
                                <label className="custom-control-label" for="checkbox10">Paid Course</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="checkbox11" />
                                <label className="custom-control-label" for="checkbox11">Offline Course</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-8 mt-5 mt-lg-0">
            <div className="row mb-4">
                <div className="col-12">
                <h6 className="mb-0">Showing 1-5 of <span className="text-primary">{courses && courses.length} course</span></h6>
                </div>
            </div>
            <div className="course-filter d-sm-flex mb-4">
                <ul className="course-short list-unstyled d-sm-flex mb-0">
                    <li>
                        <form className="form-inline">
                            <div className="form-group d-sm-flex d-block">
                                <label className="justify-content-start">Short by:</label>
                                <div className="short-by">
                                <select className="form-control basic-select">
                                    <option>Date new to old</option>
                                    <option>Price Low to High</option>
                                    <option>Price High to Low</option>
                                    <option>Date Old to New</option>
                                    <option>Date New to Old</option>
                                </select>
                                </div>
                            </div>
                        </form>
                    </li>
                </ul>
                <ul className="course-view-list list-unstyled d-flex mb-0">
                <li>
                    <form className="form-inline">
                        <div className="form-group d-sm-flex d-block">
                            <label className="justify-content-start pr-4">Sort by: </label>
                            <div className="short-by">
                            <select className="form-control basic-select">
                                <option>12</option>
                                <option>18 </option>
                                <option>24 </option>
                                <option>64 </option>
                                <option>128</option>
                            </select>
                            </div>
                        </div>
                    </form>
                </li>
                <li><a href="index-05.html"><i className="fas fa-map-marker-alt fa-lg"></i></a></li>
                <li><a className="course-list-icon" href="course-list.html">
                    <span></span>
                    <span></span>
                    <span></span>
                </a></li>
                <li><a className="course-grid-icon active" href="course-grid.html">
                    <span></span>
                    <span></span>
                    <span></span>
                </a></li>
                </ul>
            </div>
            <div className="row">
                {courses && courses.map(course => {
                    <div key={course.id} className="col-sm-6 mb-4 pb-2">
                        <div className="course">
                            <div className="course-img">
                                <img className="img-fluid" src="images/course/01.jpg" alt="" />
                                <a href="#" className="course-category"><i className="far fa-bookmark"></i>Development</a>
                            </div>
                            <div className="course-info">
                                <div className="course-title">
                                    <a href="#">Basic web development & coding online course</a>
                                </div>
                                <div className="course-instructor">by
                                    <a href="#">Alice Williams</a>
                                </div>
                                <div className="course-rate-price">
                                    <div className="rating">
                                        <span>4.1</span>
                                        <a href="#">101 Ratings</a>                      
                                    </div>
                                    <div className="price">$59</div>
                                </div>
                            </div>
                        </div>
                    </div>
                })}

                <div className="col-sm-6 mb-4 pb-2">
                    <div className="course">
                        <div className="course-img">
                            <img className="img-fluid" src="images/course/07.jpg" alt="" />
                            <a href="#" className="course-category"><i className="far fa-bookmark"></i>Development</a>
                        </div>
                        <div className="course-info">
                            <div className="course-title">
                            <a href="#">Great thinking devices to help you learn tough topics</a>
                            </div>
                            <div className="course-instructor">by
                            <a href="#">Alice Williams</a>
                            </div>
                            <div className="course-rate-price">
                            <div className="rating">
                                    <span>4.4</span>
                                    <a href="#">578 Ratings</a>                      
                                    </div>
                                    <div className="price">$79</div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="col-sm-6 mb-4 pb-2">
                    <div className="course">
                        <div className="course-img">
                                <img className="img-fluid" src="images/course/02.jpg" alt="" />
                                <a href="#" className="course-category"><i className="far fa-bookmark"></i> Design</a>
                            </div>
                            <div className="course-info">
                            <div className="course-title">
                                <a href="#">UX & web design master course: Strategy, design..</a>
                            </div>
                            <div className="course-instructor">by
                                <a href="#">Joana Williams</a>
                            </div>
                            <div className="course-rate-price">
                                <div className="rating">
                                <span>3.1</span>
                                <a href="#">57 Ratings</a>
                                </div>
                                <div className="price">$49</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-4 pb-2">
                    <div className="grid-item" data-groups='["marketing"]'>
                        <div className="course">
                        <div className="course-img">
                            <img className="img-fluid" src="images/course/03.jpg" alt="" />
                            <a href="#" className="course-category"><i className="far fa-bookmark"></i> Marketing</a>
                        </div>
                        <div className="course-info">
                            <div className="course-title">
                            <a href="#">Diploma in marketing management course</a>
                            </div>
                            <div className="course-instructor">by
                            <a href="#">Felica Queen</a>
                            </div>
                            <div className="course-rate-price">
                            <div className="rating">
                                <span>3.4</span>
                                <a href="#">97 Ratings</a>
                            </div>
                            <div className="price">$19</div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-4 pb-2">
                    <div className="course">
                        <div className="course-img">
                        <img className="img-fluid" src="images/course/04.jpg" alt="" />
                        <a href="#" className="course-category"><i className="far fa-bookmark"></i> IT & software</a>
                        </div>
                        <div className="course-info">
                        <div className="course-title">
                            <a href="#">Introduction to robotic process automation (RPA)</a>
                        </div>
                        <div className="course-instructor">by
                            <a href="#">Ricardo Marshall</a>
                        </div>
                        <div className="course-rate-price">
                            <div className="rating">
                            <span>4.2</span>
                            <a href="#">172 Ratings</a>
                            </div>
                            <div className="price">$99</div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-4 pb-2">
                    <div className="course">
                        <div className="course-img">
                        <img className="img-fluid" src="images/course/05.jpg" alt="" />
                        <a href="#" className="course-category"><i className="far fa-bookmark"></i> Photography</a>
                        </div>
                        <div className="course-info">
                        <div className="course-title">
                            <a href="#">Certificate in camera and photography course</a>
                        </div>
                        <div className="course-instructor">by
                            <a href="#">Mellissa Doe</a>
                        </div>
                        <div className="course-rate-price">
                            <div className="rating">
                            <span>3.4</span>
                            <a href="#">48 Ratings</a>
                            </div>
                            <div className="price">$199</div>
                        </div>
                        </div>
                    </div>
                </div>
                    <div className="col-sm-6 mb-4 pb-2 mb-sm-0 pb-lg-0">
                        <div className="course">
                            <div className="course-img">
                            <img className="img-fluid" src="images/course/06.jpg" alt="" />
                            <a href="#" className="course-category"><i className="far fa-bookmark"></i> Music</a>
                            </div>
                            <div className="course-info">
                            <div className="course-title">
                                <a href="#">Composing music with others online course</a>
                            </div>
                            <div className="course-instructor">by
                                <a href="#">Paul Flavius</a>
                            </div>
                            <div className="course-rate-price">
                                <div className="rating">
                                <span>1.4</span>
                                <a href="#">157 Ratings</a>
                                </div>
                                <div className="price">$149</div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="course">
                            <div className="course-img">
                            <img className="img-fluid" src="images/course/07.jpg" alt="" />
                            <a href="#" className="course-category"><i className="far fa-bookmark"></i> Personal Development</a>
                            </div>
                            <div className="course-info">
                            <div className="course-title">
                                <a href="#">Great thinking devices to help you learn tough topics</a>
                            </div>
                            <div className="course-instructor">by
                                <a href="#">Alice Williams</a>
                            </div>
                            <div className="course-rate-price">
                                <div className="rating">
                                <span>4.4</span>
                                <a href="#">18 Ratings</a>
                                </div>
                                <div className="price">$79</div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-12 text-center mt-4 mt-md-5">
                    <nav>
                        <ul className="pagination justify-content-center mb-0">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                                </a>
                            </li>
                            <li className="page-item active">
                                <span className="page-link">
                                1
                                <span className="sr-only">(current)</span>
                                </span>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                            <li className="page-item"><a className="page-link" href="#">5</a></li>
                            <li className="page-item"><a className="page-link" href="#">6</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    </div>
                </div>
                </div>
            </div>
            </div>
      </section>
    );
};

export default Courses;