
const Video = () => {
    return (
        <section className="space-pb">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="section-title">
                <h2>Having the best place for education</h2>
                <p>One of the main areas that I work on with my clients is shedding these non-supportive beliefs and replacing them with beliefs that will help them to accomplish their desires.</p>
              </div>
              <div className="video-image">
                <img className="img-fluid w-100 rounded-sm" src="images/about/05.jpg" alt="" />
                <a className="popup-icon popup-youtube" href="https://www.youtube.com/watch?v=LgvseYYhqU0">
                  <i className="fa fa-play"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row mb-0 mb-sm-4">
                <div className="col-sm-6">
                  <div className="p-3 bg-white">
                    <i className="flaticon-online-learning-1 fa-4x text-primary"></i>
                    <div className="counter mt-3">
                      <div className="counter-number">
                        <h2 className="timer" data-to="1790" data-speed="2000">1790</h2>
                      </div>
                    </div>
                    <h5>Students learning</h5>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="p-3 bg-white">
                    <i className="flaticon-online fa-4x text-primary"></i>
                    <div className="counter mt-3">
                      <div className="counter-number">
                        <h2 className="timer" data-to="245" data-speed="2000">245</h2>
                      </div>
                    </div>
                    <h5>Active courses</h5>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="p-3 bg-white">
                    <i className="flaticon-lecture fa-4x text-primary"></i>
                    <div className="counter mt-3">
                      <div className="counter-number">
                        <h2 className="timer" data-to="491" data-speed="2000">491</h2>
                      </div>
                    </div>
                    <h5>Online instructors</h5>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="p-3 bg-white">
                    <i className="flaticon-guarantee fa-4x text-primary"></i>
                    <div className="counter mt-3">
                      <div className="counter-number">
                        <h2 className="timer" data-to="1090" data-speed="2000">1090</h2>
                      </div>
                    </div>
                    <h5>Courses & Video</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Video;