import React from 'react';

const Blog = ({blogs}) => {
    return (
        <section className="space-ptb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9 col-sm-10">
              <div className="section-title text-center">
                <h2>News, Tips & Articles</h2>
                <p>The best way is to develop and follow a plan. Start with your goals in mind and then work.
                   backwards to develop the plan. What steps are required to get you to the goals.</p>
              </div>
            </div>
          </div>
          <div className="row">
{/* 
          {blogs ? blogs.map(blog => {

            <div className="col-md-4">
              <div className="blog-post-style-02 mb-4 mb-md-0">
                <div className="blog-post-img">
                  <img className="img-fluid" src="images/blog/13.jpg" alt="" />
                </div>
                <div className="blog-post-info">
                  <div className="blog-post-category">
                    <a href="#">Education,</a>
                    <a href="#">Course</a>
                  </div>
                  <h5 className="blog-post-title"><a href="#">You can expand students access to learning</a></h5>
                </div>
              </div>
            </div>
          }) : 'No post found'} */}

            <div className="col-md-4">
              <div className="blog-post-style-02 mb-4 mb-md-0">
                <div className="blog-post-img">
                  <img className="img-fluid" src="images/blog/12.jpg" alt="" />
                </div>
                <div className="blog-post-info">
                  <div className="blog-post-category">
                    <a href="#">Study,</a>
                    <a href="#">Learning</a>
                  </div>
                  <h5 className="blog-post-title"><a href="#">The greatest choice of courses</a></h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-post-style-02">
                <div className="blog-post-img">
                  <img className="img-fluid" src="images/blog/14.jpg" alt="" />
                </div>
                <div className="blog-post-info">
                  <div className="blog-post-category">
                    <a href="#">Leadership,</a>
                    <a href="#">University</a>
                  </div>
                  <h5 className="blog-post-title"><a href="#">12 great free online courses</a></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Blog;