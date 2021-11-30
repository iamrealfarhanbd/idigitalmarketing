const ContactInfo = () => {
    return (
        <section className="space-pb">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                    <div className="section-title">
                    <h2>Additional Contact Info</h2>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                    <div className="text-center px-0 px-sm-3 mb-4 mb-md-0">
                    <i className="flaticon-support fa-3x text-primary"></i>
                    <h4 className="my-4">Our Support Center</h4>
                    <p className="mb-0">For those of you who are serious about having more, doing more, giving more and being more, success is achievable.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="text-center px-0 px-sm-3 mb-4 mb-md-0">
                    <i className="flaticon-video fa-3x text-primary"></i>
                    <h4 className="my-4">Chat To Us Online</h4>
                    <p className="mb-0">The first thing to remember about success is that it is a process – nothing more, nothing less. There is really no magic.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="text-center px-0 px-sm-3">
                        <i className="flaticon-clock-1 fa-3x text-primary"></i>
                        <h4 className="my-4">Education Hours</h4>
                        <p className="mb-0">Monday to Friday : 10 am – 7 pm.<br /> Saturday : 9 am – 1 pm. <br />Sunday : Closed</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;