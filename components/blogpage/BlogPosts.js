const BlogPosts = ({posts}) => {
    console.log(posts)
    return (
        <div>
            {posts ? posts.map(post => 
                <div key={post.id} className="blog-post mb-4 mb-sm-5">
                    <div className="blog-post-image">
                        <img className="img-fluid rounded-sm" src="images/blog/02.jpg" alt="" />
                    </div>
                    <div className="blog-post-content">
                    <div className="blog-post-info">
                        <div className="blog-post-author">
                        <a href="#" className="btn btn-link"><i className="far fa-folder-open"></i>Marketing</a>
                        </div>
                        <div className="blog-post-date"><a href="#"><i className="far fa-calendar"></i>Jan 4, 2020 </a></div>
                    </div>
                    <div className="blog-post-details">
                        <h5 className="blog-post-title">
                        <a href="blog-single.html">You can expand students access to learning</a>
                        </h5>
                        <p>Concentrate on your breathing, engage in the moment and spend some time being still, quiet and drift inside of your own mind. Hypnotize yourself here.</p>
                    </div>
                    <div className="blog-post-footer d-flex align-items-center">
                        <a href="#" className="btn btn-primary">Read more</a>
                        <div className="social-share ml-auto">
                        <a href="#"><i className="fas fa-share-alt mr-2 text-primary"></i></a>
                        <ul className="social-share">
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
            ) : 'Nothing found'}

            <div className="blog-post mb-4 mb-sm-5">
                <div className="blog-post-image">
                    <img className="img-fluid rounded-sm" src="images/blog/01.jpg" alt="" />
                </div>
                <div className="blog-post-content">
                    <div className="blog-post-info">
                        <div className="blog-post-author">
                        <a href="#" className="btn btn-link"><i className="far fa-folder-open"></i>Strategy</a>
                        </div>
                        <div className="blog-post-date"><a href="#"><i className="far fa-calendar"></i>May 13, 2020 </a></div>
                    </div>
                    <div className="blog-post-details">
                        <h5 className="blog-post-title">
                        <a href="blog-single.html">The greatest choice of courses</a>
                        </h5>
                        <p>If you look back, you will notice that your past is there; everything you have ever done or experienced is behind you. Become aware of the temperature, the sights, the sounds and enjoy walking along the path of your life.</p>
                    </div>
                    <div className="blog-post-footer d-flex align-items-center">
                        <a href="#" className="btn btn-primary">Read more</a>
                        <div className="social-share ml-auto">
                        <a href="#"><i className="fas fa-share-alt mr-2 text-primary"></i></a>
                        <ul className="social-share">
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog-post mb-4 mb-sm-5">
                <div className="blog-post-image">
                    <img className="img-fluid rounded-sm" src="images/blog/03.jpg" alt="" />
                </div>
                <div className="blog-post-content">
                <div className="blog-post-info">
                    <div className="blog-post-author">
                    <a href="#" className="btn btn-link"><i className="far fa-folder-open"></i>Finance</a>
                    </div>
                    <div className="blog-post-date"><a href="#"><i className="far fa-calendar"></i>April 18, 2020 </a></div>
                </div>
                <div className="blog-post-details">
                    <h5 className="blog-post-title">
                    <a href="blog-single.html">12 great free online courses</a>
                    </h5>
                    <p>Make it sensory rich and get comfortable with the idea. Imagine the feeling of your feet walking along the path and the sound they make. Engage with the idea of really being there.</p>
                </div>
                <div className="blog-post-footer d-flex align-items-center">
                    <a href="#" className="btn btn-primary">Read more</a>
                    <div className="social-share ml-auto">
                    <a href="#"><i className="fas fa-share-alt mr-2 text-primary"></i></a>
                    <ul className="social-share">
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            <div className="blog-post">
                <div className="blog-post-image">
                    <iframe style={{width: '100%', height: '465px'}}
                        src="https://www.youtube.com/embed/rGtcmKIZi5c" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                </div>
                <div className="blog-post-content">
                <div className="blog-post-info">
                    <div className="blog-post-author">
                    <a href="#" className="btn btn-link"><i className="far fa-folder-open"></i>Operations </a>
                    </div>
                    <div className="blog-post-date"><a href="#"><i className="far fa-calendar"></i>May 27, 2020 </a></div>
                </div>
                <div className="blog-post-details">
                    <h5 className="blog-post-title">
                    <a href="blog-single.html">Most people believe that success is difficult.</a>
                    </h5>
                    <p>Imagine that a few more steps ahead there is a place where the path splits, where is goes off to the left and off to the right. Pause here for a few moments and have a think.</p>
                </div>
                <div className="blog-post-footer d-flex align-items-center">
                    <a href="#" className="btn btn-primary">Read more</a>
                    <div className="social-share ml-auto">
                    <a href="#"><i className="fas fa-share-alt mr-2 text-primary"></i></a>
                    <ul className="social-share">
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPosts;