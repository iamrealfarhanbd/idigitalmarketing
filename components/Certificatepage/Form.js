import { useForm } from "react-hook-form";
import certificatecontent from "./certificatecontent"
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
                <h3>Order New Certificate</h3>

                <form onSubmit={handleSubmit(onSubmit)} className="contact-form  form-flat-style">
                    <div className="row">
                        {certificatecontent.certificateInfo.map((certificateInfo, cidx) => 
                            <div key={cidx} className="col-lg-12">
                                <div className="form-group">
                                    <label htmlFor={certificateInfo.name}>{certificateInfo.label} </label>
                                    <select name={certificateInfo.name} className={certificateInfo.className} id={certificateInfo.idName} ref={register}>
                                        {certificateInfo.options.map((ctop, copx) => 
                                             <option key={copx} value={ctop.value}>{ctop.label}</option>
                                        
                                        )}
                                    </select>
                                    <span className="alert-error" />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <h3>Enter Personal Details</h3>
                        </div>
                        {certificatecontent.personalInfo.map((personalInfo, pidx) => 
                            <div key={pidx} className="col-lg-12">
                                {personalInfo.type === 'textarea' ?  
                                    <div className="form-group">
                                        <label htmlFor="additionali">Any Additional Info:</label>
                                        <textarea 
                                            className={personalInfo.className} 
                                            id={personalInfo.idName}
                                            name={personalInfo.name}  
                                            ref={register}>
                                        </textarea>
                                        <span className="alert-error" />
                                    </div> :
                                    
                                    <div className="form-group">
                                        <input 
                                            className={personalInfo.className} 
                                            id={personalInfo.idName}
                                            name={personalInfo.name}
                                            placeholder={personalInfo.placeholder} 
                                            type={personalInfo.type}
                                            ref={register} 
                                        />
                                        <span className="alert-error" />
                                    </div>
                                }
                            </div> 
                        )}
                    
                        <div className="col-lg-12">
                            <div className="form-group">
                                <h3>Shipping and Handling:</h3>
                                <p>ID Card Price: £ 9.99</p>
                                <span className="alert-error" />
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-group">
                                <label htmlFor="shipping">Shipping : </label>
                                <select name="shipping" className="form-control" id="shipping" ref={register}>
                                    <option value="uk delivery">UK Delivery</option>
                                    <option value="international standard">International Standard +£ 10.01</option>
                                    <option value="international dhl express">International DHL Express +£ 38.01</option>
                                </select>
                                <span className="alert-error" />
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-group">
                                <p>VAT: £ 9.99</p>
                                <span className="alert-error" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <p>Total Fee: £ 39.99</p>
                                <span className="alert-error" />
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <h3>Payment:</h3>
                        </div>


                        <div className="col-md-12">
                            <div className="row">
                                {certificatecontent.paymentInfo.map((paymentInfo, payidx) => 
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
                            <button type="submit" className="btn btn-primary" name="submit" id="submit" onClick={handleSubmit(onSubmit)}>
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

