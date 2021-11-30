import React from 'react';

const CourseDetailsSidebar = () => {
    return (
<div className="widgets">
                    <div className="widget widget-price">
                        <h6 className="widget-title">Price</h6>
                        <div className="widget-content">
                            <a className="btn btn-primary" href="#">Get course</a>
                            <span className="font-weight-bold text-success lead ml-3">Free</span>
                        </div>
                    </div>
                    <div className="widget">
                        <h6 className="widget-title">Search Classes</h6>
                        <div className="widget-content">
                            <form className="form-flat-style">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search popular class" />
                            </div>
                            <div className="form-check pl-0">
                                <div className="form-group select-border">
                                <select className="form-control basic-select">
                                    <option value="1" selected="selected">Development</option>
                                    <option value="3">Design</option>
                                    <option value="4">Marketing</option>
                                    <option value="2">IT & software</option>
                                    <option value="2">Photography</option>
                                    <option value="2">Music</option>
                                    <option value="2">Personal Development</option>
                                    <option value="2">Business</option>
                                </select>
                                </div>
                            </div>
                            <button type="button" className="btn btn-dark">Search</button>
                            </form>
                        </div>
                    </div>
                    <div className="widget widget-course-instructor">
                        <h6 className="widget-title">Course Instructor</h6>
                        <div className="widget-content">
                            <div className="row">
                                <div className="col-sm-4">
                                    <img className="rounded-circle img-fluid mb-2" src="images/avatar/04.jpg" alt="" />
                                </div>
                            </div>
                            <span className="lead fw-6 text-dark">Felica Queen</span>
                            <p className="mb-0">Member Since May 2009</p>
                            <ul className="d-flex mb-0 list-unstyled mt-2">
                            <li><a className="btn btn-outline-dark-hover btn-sm py-1 px-2 mx-1" href="#">497 Views</a></li>
                            <li><a className="btn btn-outline-primary-hover btn-sm py-1 px-2 mx-1" href="#">795 Courses</a></li>
                            <li><a className="btn btn-outline-dark-hover btn-sm py-1 px-2 mx-1" href="#">See all course</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="widget widget-course-info">
                        <h6 className="widget-title">Course info</h6>
                        <div className="widget-content">
                            <ul className="list">
                            <li>
                                <b>Course Date :</b>
                                <span>17 Feb 2020 - 20 May 2020</span>
                            </li>
                            <li>
                                <b>Time :</b>
                                <span>09:00 - 01:00</span>
                            </li>
                            <li>
                                <b>Duration :</b>
                                <span>90 Hours</span>
                            </li>
                            <li>
                                <b>Lectures :</b>
                                <span>23</span>
                            </li>
                            <li>
                                <b>Levels :</b>
                                <span>Beginner</span>
                            </li>
                            <li>
                                <b>Enrolled :</b>
                                <span>1874 Students</span>
                            </li>
                            <li>
                                <b>Video :</b>
                                <span>12 Hours</span>
                            </li>
                            </ul>
                        </div>
                    </div>
                    <div className="widget">
                        <h6 className="widget-title">Social share</h6>
                        <div className="widget-content">
                            <div className="social-icon-round">
                            <ul>
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fab fa-google"></i></a></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div className="widget widget-tag">
                        <h6 className="widget-title">Popular Classes</h6>
                        <div className="widget-content">
                            <ul className="list">
                            <li><a href="#">MBA</a></li>
                            <li><a href="#">Bachelor</a></li>
                            <li><a href="#">BSc</a></li>
                            <li><a href="#">BA</a></li>
                            <li><a href="#">BBA</a></li>
                            <li><a href="#">Diploma</a></li>
                            <li><a href="#">Library</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="widget">
                        <h6 className="widget-title">Map location</h6>
                        <div className="widget-content">
                            <iframe 
                                className="w-100 border-0" 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8402891185456!2d144.95373631584474!3d-37.81720974201458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1598418458630!5m2!1sen!2sin"
                                style={{border: 0, width: '100%', height: '250px'}}
                                allowfullscreen="">
                            </iframe>
                        </div>
                    </div>
                </div>
    );
};

export default CourseDetailsSidebar;