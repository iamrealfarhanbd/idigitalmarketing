import React from 'react';

const CoursePageHeader = () => {
    return (
        <section className="space-ptb bg-holder bg-overlay-black-90" style={{backgroundImage: 'url(images/bg/03.jpg)'}}>
            <div className="container">
                <div className="find-Course">
                <div className="row">
                    <div className="col-md-12 text-center">
                    <h3 className="text-white mb-4">1000+ Popular Courses</h3>
                    </div>
                </div>
                <div className="row">
                    <form className="col-md-10 offset-md-1">
                    <div className="form-row align-items-center">
                        <div className="col-md-4 col-lg-3 mb-3 mb-md-0">
                        <input type="text" className="form-control rounded-sm" placeholder="Search Course" />
                        </div>
                        <div className="col-md-4 col-lg-3 mb-3 mb-md-0">
                        <input type="text" className="form-control rounded-sm" placeholder="Location" />
                        </div>
                        <div className="col-md-4 col-lg-3">
                        <select className="basic-select form-control">
                            <option selected="selected">Choose Instructor</option>
                            <option>Design</option>
                            <option>Development</option>
                            <option>Marketing</option>
                            <option>IT & software</option>
                            <option>Photography</option>
                            <option>Music</option>
                            <option>Personal Development</option>
                            <option>Business</option>
                        </select>
                        </div>
                        <div className="col-12 col-lg-3 text-left mt-3 mt-lg-0">
                        <a className="btn btn-primary d-lg-block rounded-sm" href="#">Search course</a>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </section>
    );
};

export default CoursePageHeader;