import { useForm } from "react-hook-form";
import RedeemFormContent from './RedeemFormContent';
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
                    <div className="col-lg-8 right-item">
                        <form  onSubmit={handleSubmit(onSubmit)}  className="contact-form form-flat-style">
                            <div className="row">
                                {RedeemFormContent.formInfo.map((formData, fid) => 
                                    <div key={fid} className={formData.widthClass}>
                                        <div className="form-group">
                                            <input className={formData.className} id={formData.idName} name={formData.name} placeholder={formData.placeholder} type={formData.type} ref={register} />
                                            <span className="alert-error" />
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <button type="submit" name="submit" id="submit" className={RedeemFormContent.buttonInfo.className} onClick={handleSubmit(onSubmit)}>
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
