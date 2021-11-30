import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const CustomCart = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
      console.log(data);
    };
    const[cardform, setCardForm] = useState(false);
    const[billingForm, setBillingForm] = useState(false);
    const handlePaymentClick = () => {
        setCardForm(!cardform);
    }
    const handleBillingForm = () => {
        setBillingForm(!billingForm);
    }
    return (
        <>
        <div className="cartCheckout">
        <section className="checkoutHero">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="inner-body">
                            <div className="innerContent">
                                <h4>New Year Special Offer</h4>
                                <p>Yes, please add the Personal Development 10 courses 
                                bundle to my order for only <b>₤19.99</b></p>
                            </div>
                            <div className="tvl-btn">
                                <button type="submit" name="submit" id="submit" className="btn btn-primary"> + Add to Order </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="container">
            <p class="slsupport">If you face any issues please contact support <b>020 3890 6420</b></p>
        </div>
        <section className="cartBody">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="cartInfo">
                            <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h4>Account Information</h4>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="">First Name</label>
                                            <input className="form-control" id="fname" name="fname" placeholder="First Name" type="text" ref={register} />
                                            <span className="alert-error" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="">Last Name</label>
                                            <input className="form-control" id="lname" name="lname" placeholder="Last Name" type="text" ref={register} />
                                            <span className="alert-error" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="">Email</label>
                                            <input className="form-control" id="email" name="email" placeholder="Enter email" type="email" ref={register} />
                                            <span className="alert-error" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="">Set Password</label>
                                            <input className="form-control" id="password" name="password" placeholder="Enter Password" type="password" ref={register} />
                                            <span className="alert-error" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-12">
                                        <h4>Payment Options</h4>
                                    </div>

                                    <div className="col-sm-12">
                                        <div className="payimg" onClick={handlePaymentClick}>
                                            <h4>Bank Card</h4>
                                            <p>Pay with Mastercard, Amex, Visa & Mastero</p>
                                        </div>
                                    </div>

                                    {cardform && <div className="col-lg-12 mt-3 mb-3">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="">Card Number</label>
                                                    <input className="form-control" id="fname" name="fname" placeholder="Enter your card number" type="text" ref={register} />
                                                    <span className="alert-error" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="">Expiration Date</label>
                                                    <input className="form-control" id="expire" name="expire" placeholder="Expire date" type="text" ref={register} />
                                                    <span className="alert-error" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="">Security</label>
                                                    <input className="form-control" id="security" name="security" placeholder="CVV" type="security" ref={register} />
                                                    <span className="alert-error" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="">Card Name</label>
                                                    <input className="form-control" id="cname" name="cname" placeholder="Enter Card name" type="text" ref={register} />
                                                    <span className="alert-error" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>}

                                    <div className="col-sm-12 mb-3">
                                        <div className="payimg">
                                            <h4>Paypal</h4>
                                            <p>Simple & Secure to pay</p>
                                        </div>
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col-sm-12">
                                        <h4 className="billingAdds" onClick={handleBillingForm}> Additional Billing Details  (Optional) <i class="fas fa-chevron-down fa-xs"></i></h4>
                                    </div>
                                    { billingForm && <>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="">First Name</label>
                                                <input className="form-control" id="fname" name="fname" placeholder="First Name" type="text" ref={register} />
                                                <span className="alert-error" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="">Last Name</label>
                                                <input className="form-control" id="lname" name="lname" placeholder="Last Name" type="text" ref={register} />
                                                <span className="alert-error" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="">Email</label>
                                                <input className="form-control" id="email" name="email" placeholder="Enter Email" type="email" ref={register} />
                                                <span className="alert-error" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="">Billing address</label>
                                                <input className="form-control" id="billingAddresss" name="billingAddresss" placeholder="Billing Address" type="text" ref={register} />
                                                <span className="alert-error" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="">Additional Notes</label>
                                                <textarea className="form-control" id="notes" name="notes" placeholder="additional Notes" ref={register} ></textarea>
                                                <span className="alert-error" />
                                            </div>
                                        </div>
                                    </>}
                                </div>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <button type="submit" name="submit" className="btn btn-block btn-primary" id="submit" onClick={handleSubmit(onSubmit)}>
                                             Checkout and Pay 
                                        </button>
                                    </div>
                                </div>


                            </form>
                        </div>
                    </div>

                    <div className="col-md-5">
                        <div className="orderItems">
                            <h4>Your Orders</h4>
                            <ul className="items">
                                <li>
                                    <div className="itemImg">
                                        <img src="images/shop/01.jpg" alt="" className="img-fluid img-responsive"/>
                                    </div>
                                    <div className="contents">
                                        <h5>Ultimate Photography Bundle</h5>
                                        <p><span>425.00  x 1</span> <div>£450.00</div></p>
                                    </div>
                                </li>
                                <li>
                                    <div className="itemImg">
                                        <img src="images/shop/01.jpg" alt="" className="img-fluid img-responsive"/>
                                    </div>
                                    <div className="contents">
                                        <h5>Ultimate Photography Bundle</h5>
                                        <p><span>425.00  x 1</span> <div>£450.00</div></p>
                                    </div>
                                </li>
                                <li>
                                    <div className="itemImg">
                                        <img src="images/shop/01.jpg" alt="" className="img-fluid img-responsive"/>
                                    </div>
                                    <div className="contents">
                                        <h5>Ultimate Photography Bundle</h5>
                                        <p><span>425.00  x 1</span> <div>£450.00</div></p>
                                    </div>
                                </li>
                            </ul>
                            <hr/>
                            <ul className="totalAmount">
                                <li><b>Subtotal</b> <b className="amounts">$500</b></li>
                                <li><b>Vat</b> <b className="amounts">$500</b></li>
                                <li><b>Total</b> <b className="amounts">$500</b></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
        </>
    );
};

export default CustomCart;