import React from 'react';

const Footer = () => {
    return (
        <>
        <footer className="footer footer-dark pb-5 space-pt bg-dark">
            <div className="container">
                <div className="row">
                <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                    <div className="footer-contact-info">
                    <div className="footer-logo mb-2">
                        <a href="index.html"><img className="img-fluid" src="images/logo.svg" alt="" /></a>
                    </div>
                    <div className="contact-address">
                        <div className="contact-item mb-3 mb-md-4">
                        <p>17504 Carlton Cuevas Rd, <br />Gulfport, MS, 39503</p>
                        </div>
                        <div className="contact-item mb-3 mb-md-4">
                        <h4 className="mb-0 font-weight-normal"><a href="#" className="text-primary">+(704) 279-1249</a></h4>
                        </div>
                        <div className="contact-item">
                        <a href="#">letstalk@guruma.com</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3 col-lg-4 mb-4 mb-lg-0">
                    <h5 className="footer-title text-primary">Explore</h5>
                    <div className="footer-link">
                    <ul className="list-unstyled mb-0">
                        <li><a href="#">Overview</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Success story</a></li>
                        <li><a href="#">Teachers</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                    <ul className="list-unstyled mb-0">
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Our news</a></li>
                        <li><a href="#">Courses</a></li>
                        <li><a href="#">Research</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3 col-lg-2 mb-4 mb-sm-0">
                    <h5 className="footer-title text-primary">Resources</h5>
                    <div className="footer-link">
                    <ul className="list-unstyled mb-0">
                        <li><a href="#">Donors</a></li>
                        <li><a href="#">Educators</a></li>
                        <li><a href="#">Professionals</a></li>
                        <li><a href="#">Become A Teacher</a></li>
                        <li><a href="#">Student Profile</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <h5 className="footer-title text-primary">Subscribe us</h5>
                    <p>Sign up to our newsletter to get the latest news and offers.</p>
                    <form>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email*" />
                    </div>
                    <button type="submit" className="btn btn-sm btn-primary">Subscribe</button>
                    </form>
                </div>
                </div>
            </div>
            <div className="footer-bottom pt-5 pb-0 bg-dark">
                <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <div className="social-icon text-md-left text-center mb-3 mb-md-0">
                        <ul>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fab fa-google"></i></a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="copyright text-md-right text-center">
                        <p className="mb-0 small">© Copyright 2020 <a href="">Guruma</a> All Rights Reserved.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </footer>

            <div id="back-to-top" className="back-to-top">
             <a href="#"><i className="fas fa-chevron-up"></i></a>
            </div>
        </>
    );
};

export default Footer;