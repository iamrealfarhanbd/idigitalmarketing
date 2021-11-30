

const FeatureInfoProgress = () => {
    return (
        <section className="space-pb">
            <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <img className="img-fluid rounded-sm" src="images/about/04.jpg" alt="" />
                </div>
                <div className="col-lg-3 col-md-6">
                <img className="img-fluid rounded-sm" src="images/about/06.jpg" alt="" />
                </div>
                <div className="col-lg-6 mt-4 mt-lg-0">
                <div className="section-title">
                    <h2>What we do</h2>
                    <p>Along with your plans, you should consider developing an action orientation that will keep you 
                        motivated to move forward at all times. This requires a little self-discipline, but is a crucial component to achievement of any kind.</p>
                </div>
                <div className="progress-style-1">
                    <div className="progress-item">
                    <div className="progress-title">Finance</div>
                    <div className="progress" style={{height: "5px"}}>
                        <div className="progress-bar bg-danger" role="progressbar" style={{width: '60%'}} aria-valuenow="58" aria-valuemin="0" aria-valuemax="100">
                        <span>58%</span>
                        </div>
                    </div>
                    </div>
                    <div className="progress-item">
                    <div className="progress-title">Marketing</div>
                    <div className="progress" style={{height: "5px"}}>
                        <div className="progress-bar bg-warning" role="progressbar" style={{width: '80%'}} aria-valuenow="79" aria-valuemin="0" aria-valuemax="100">
                        <span>60%</span>
                        </div>
                    </div>
                    </div>
                    <div className="progress-item">
                    <div className="progress-title">Business</div>
                    <div className="progress" style={{height: "5px"}}>
                        <div className="progress-bar bg-success" role="progressbar" style={{width: '85%'}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                        <span>85%</span>
                        </div>
                    </div>
                    </div>
                    <div className="progress-item">
                    <div className="progress-title">Design</div>
                    <div className="progress" style={{height: "5px"}}>
                        <div className="progress-bar bg-info" role="progressbar" style={{width: '91%'}} aria-valuenow="91" aria-valuemin="0" aria-valuemax="100">
                            <span>87%</span>
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

export default FeatureInfoProgress;