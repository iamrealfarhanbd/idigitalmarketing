const ClientsLogo = () => {
    return (
        <section className="space-ptb">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-12 mb-4">
                        <div className="section-title">
                            <h2>Trusted by companies</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="owl-carousel our-clients" data-nav-arrow="false" data-items="6" data-md-items="5" data-sm-items="4" data-xs-items="3" data-xx-items="1" data-space="30" data-autoheight="true" data-autospeed="4000">
                        <div className="item">
                            <a href="#"><img className="img-fluid" src="images/client/01.svg" alt="" /></a>
                        </div>
                        <div className="item">
                            <a href="#"><img className="img-fluid" src="images/client/02.svg" alt="" /></a>
                        </div>
                        <div className="item">
                            <a href="#"><img className="img-fluid" src="images/client/03.svg" alt="" /></a>
                        </div>
                        <div className="item">
                            <a href="#"><img className="img-fluid" src="images/client/04.svg" alt="" /></a>
                        </div>
                        <div className="item">
                            <a href="#"><img className="img-fluid" src="images/client/05.svg" alt="" /></a>
                        </div>
                        <div className="item">
                            <a href="#"><img className="img-fluid" src="images/client/06.svg" alt="" /></a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientsLogo;