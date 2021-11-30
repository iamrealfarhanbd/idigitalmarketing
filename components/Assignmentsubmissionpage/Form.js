import { useForm } from "react-hook-form";
import assignFrmContent from "./assignmentSubmissionContent";
const Form = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
      console.log(data);
    };

    return (
         
    <div className="contact-area " style={{paddingBottom:"200px", paddingTop:"80px"}}>
        <div className="container">
            <div className="contact-items">
            <div className="row align-center">
                <div className="col-lg-9 right-item">
                <h3>Submit Your Assignment</h3>

                <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                    <div className="row">

                    {assignFrmContent.certificateInfo.map((certificate, ctidx) => 
                        <div key={ctidx} className="col-lg-12">
                            <div className="form-group">
                                <label htmlFor={certificate.name}> {certificate.label} </label>
                                <select name={certificate.name} className="basic-select form-control" id={certificate.idName} ref={register}>
                                    {certificate.options.map((option, copIdx) => 
                                        <option key={copIdx} value={option.value}>{option.label}</option>
                                    )}
                                </select>
                                <span className="alert-error" />
                            </div>
                        </div>
                    )}

                        <div className="col-lg-12">
                            <div className="form-group">
                            <p>VAT: £ 9.99</p>
                            <span className="alert-error" />
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-group">
                            <p>Certification Fee: £ 39.99</p>
                            <span className="alert-error" />
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <h3>Enter Personal Details</h3>
                            <div className="form-group">
                            </div>
                        </div>
                        {
                            assignFrmContent.personalInfo.map((pInfo, pidx) => 
                                <div key={pidx} className="col-lg-12">
                                    <div className="form-group">
                                    { pInfo.label && <label htmlFor={pInfo.name}>{pInfo.label}</label>}
                                    <input className={pInfo.className} id={pInfo.idName} name={pInfo.name} placeholder={pInfo.placeholder} type={pInfo.type} ref={register} />
                                    <span className="alert-error" />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="col-lg-12">
                    <div className="row">
                            <div className="form-group">
                            <h3>Payment:</h3>
         
                        </div>

                        <div className="row">
                                {assignFrmContent.paymentInfo.map((paymentInfo, payidx) => 
                                    {
                                        switch (paymentInfo.type) {
                                            case "select":
                                                return (<div key={payidx} className={paymentInfo.widthClass}>
                                                    <div className="form-group">
                                                        <select
                                                            name={paymentInfo.name}
                                                            id={paymentInfo.idName}
                                                            className={paymentInfo.className}
                                                            ref={register}
                                                        >
                                                            <option value="">{paymentInfo.label}</option>
                                                            {paymentInfo.options.map((option, idx) => (
                                                                <option key={idx} value={option.value}> {option.label}</option>
                                                            ))}
                                                        </select>
                                                        <span className="alert-error" />
                                                    </div> 
                                                </div>
                                            )
                                            case "textarea":
                                                return (
                                                    <div key={payidx} className={paymentInfo.widthClass}>
                                                        <div className="form-group">
                                                            <label htmlFor={paymentInfo.name}>{paymentInfo.label}</label>
                                                            <textarea 
                                                                className={paymentInfo.className}
                                                                id={paymentInfo.idName} 
                                                                name={paymentInfo.name} 
                                                                placeholder={paymentInfo.placeholder} 
                                                                ref={register}>
                                                            </textarea>
                                                            <span className="alert-error" />
                                                        </div> 
                                                    </div>  
                                            )
                                            default: 
                                                return (
                                                    <div key={payidx} className={paymentInfo.widthClass}>
                                                        <div className="form-group">
                                                            <label htmlFor={paymentInfo.name}>{paymentInfo.label}</label>
                                                            <input  className={paymentInfo.className}  id={paymentInfo.idName} name={paymentInfo.name} placeholder={paymentInfo.placeholder} ref={register} />
                                                            <span className="alert-error" />
                                                        </div> 
                                                    </div>  
                                                )
                                        }
    
                                    })}
                            </div>
                        </div>
                    </div>
                   
                    <div className="row">
                    <div className="col-lg-12">
                        <button type="submit" name="submit" className="btn btn-primary" id="submit" onClick={handleSubmit(onSubmit)}>
                        Submit <i className="fa fa-paper-plane" />
                        </button>
                    </div>
                    </div>
                    {/* Alert Message */}
                    <div className="col-lg-12 alert-notification">
                    <div id="message" className="alert-msg" />
                    </div>
                </form>

                </div>
            </div>
            </div>
        </div>
    </div>

    )
}

export default Form

