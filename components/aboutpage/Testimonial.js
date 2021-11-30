import React from 'react';

const Testimonial = () => {
    return (
        <section className="space-ptb">
            <div className="container">
                <div className="row">
                <div className="col-md-8 offset-md-2 text-center">
                    <div className="owl-carousel testimonial-style-02" data-nav-arrow="true" data-nav-dots="false" data-items="1" data-lg-items="1" data-md-items="1" data-sm-items="1" data-space="0" data-autoheight="true">
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
            </section>
    );
};

export default Testimonial;