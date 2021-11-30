const ContactForm = () => {
    return (
        <section className="space-ptb">
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                <div className="section-title">
                    <h2>Get In Touch</h2>
                    <p>If success is a process with a number of defined steps, then it is just like any other process. So, what is the first step in any process?</p>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-9">
                <form className="row fill-form mb-4 mb-md-0 form-flat-style">
                    <div className="form-group col-sm-6">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="" />
                    </div>
                    <div className="form-group col-sm-6">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="" />
                    </div>
                    <div className="form-group col-sm-6">
                    <label>Subject</label>
                    <input type="text" className="form-control" placeholder="" />
                    </div>
                    <div className="form-group col-sm-6">
                    <label>Phone</label>
                    <input type="text" className="form-control" placeholder="" />
                    </div>
                    <div className="form-group col-sm-12">
                    <label>Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                    <div className="form-group col-sm-12">
                    <button type="submit" className="btn btn-primary">Send us</button>
                    </div>
                </form>
                </div>
                <div className="col-md-3">
                <h4 className="mb-4">Contact Detail</h4>
                <p className="mb-2">6580 Allison Turnpike Creminfort, AL 32808-4509</p>
                <p className="mb-2"><b className="text-dark">Call us:</b>  +123 4567 8910</p>
                <p className="mb-4"><b className="text-dark">Mail us:</b>  support@online-courses.com</p>
                <div className="social-icon-round icon-sm">
                    <ul>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default ContactForm;