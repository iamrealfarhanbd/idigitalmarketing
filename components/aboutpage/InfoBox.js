import React from 'react';

const InfoBox = () => {
    return (
        <section className="space-pb">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 text-center mb-4 mb-md-0">
                        <div className="feature-info-04">
                            <i className="feature-icon flaticon-lecture fa-3x"></i>
                            <h4 className="feature-title my-3">Our Support Center</h4>
                            <p>It is truly amazing the damage that we, as parents, can inflict on our children. </p>
                            <a className="btn btn-link" href="#">Start Now</a>
                        </div>
                    </div>
                    <div className="col-md-4 text-center mb-4 mb-md-0">
                        <div className="feature-info-04">
                            <i className="feature-icon flaticon-online-learning-1 fa-3x"></i>
                            <h4 className="feature-title my-3">Learn at your own pace</h4>
                            <p>So why do we do it? For the most part, we don’t do it intentionally or with malice.</p>
                            <a className="btn btn-link" href="#">Start Now</a>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="feature-info-04">
                            <i className="feature-icon flaticon-guarantee fa-3x"></i>
                            <h4 className="feature-title my-3">Focus on success</h4>
                            <p>In the majority of cases, the cause is a well-meaning but unskilled or un-thinking parent.</p>
                            <a className="btn btn-link" href="#">Start Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoBox;