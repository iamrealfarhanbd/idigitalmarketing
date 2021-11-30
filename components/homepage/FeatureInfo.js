import React from 'react';

const FeatureInfo = () => {
    return (
        <section className="space-pb overflowx-h">
            <div className="container">
            <div className="row">
                <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="bg-dark bg-overlay-left-100 p-3 p-sm-4 p-xl-5 rounded-md-right">
                    <div className="m-2">
                    <div className="d-flex align-items-center mb-3">
                        <i className="flaticon-book fa-4x text-white mr-4"></i>
                        <h3 className="mb-0 mt-0 text-white">Become a instructor on Guruma</h3>
                    </div>
                    <p className="mb-4 text-white lead">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                    <a className="btn btn-outline-primary" href="#">Start teaching today</a>
                    </div>
                </div>
                </div>
                <div className="col-lg-6">
                <div className="bg-primary bg-overlay-right-100 p-3 p-sm-4 p-xl-5 rounded-left">
                    <div className="m-2">
                    <div className="d-flex align-items-center mb-3">
                        <i className="flaticon-book-1 fa-4x text-white mr-4"></i>
                        <h3 className="mb-0 mt-0 text-white">Guruma for business & Community</h3>
                    </div>
                    <p className="mb-4 text-white lead">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
                    <a className="btn btn-light" href="#">Get guruma for business</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default FeatureInfo;