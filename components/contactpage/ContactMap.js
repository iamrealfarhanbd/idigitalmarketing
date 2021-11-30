const ContactMap = () => {
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 p-0">
                        <iframe className="w-100 border-0" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8402891185456!2d144.95373631584474!3d-37.81720974201458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1598418458630!5m2!1sen!2sin" 
                            style={{border:0, width: '100%', height: '500px'}} allowfullscreen="">
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMap;