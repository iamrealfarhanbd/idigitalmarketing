const CheckoutDetails = () => {
    return (
        <section className="space-ptb">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="checkout-info mb-4 mb-md-5">
                <p className="mb-0"><strong>Returning customer?</strong> <a href="login.html">Click here to login</a></p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="checkout-info-coupon mb-5">
                <p className="checkout-info"><strong>Have a coupon?</strong>
                  <a data-toggle="collapse" href="#collapse" role="button" aria-expanded="false" aria-controls="collapse">
                    Click here to enter your code
                  </a>
                </p>
                <div className="collapse" id="collapse">
                  <div className="checkout-coupon">
                    <p>If you have a coupon code, please apply it below.</p>
                    <form className="form-row">
                      <div className="form-group col-sm-12">
                        <input type="text" className="form-control" id="coupon_code" placeholder="Coupon code" />
                      </div>
                    </form>
                    <a href="#" className="btn btn-primary">Apply coupon</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="checkout">
                <div className="section-title">
                  <h4 className="title">Billing details</h4>
                </div>
                <form className="form-row mt-4">
                  <div className="form-group col-sm-12">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="" />
                  </div>
                  <div className="form-group col-sm-12">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="" />
                  </div>
                  <div className="form-group col-sm-12">
                    <label>Company name</label>
                    <input type="text" className="form-control" placeholder="" />
                  </div>
                  <div className="form-group select-border col-sm-12">
                    <label>Country</label>
                    <select className="form-control basic-select">
                      <option value="value 01" selected="selected">Armenia</option>
                      <option value="AR">Argentina</option>
                      <option value="AM">Armenia</option>
                      <option value="AW">Aruba</option>
                      <option value="AU">Australia</option>
                      <option value="BS">Bahamas</option>
                      <option value="BH">Bahrain</option>
                      <option value="BD">Bangladesh</option>
                      <option value="BB">Barbados</option>
                      <option value="KH">Cambodia</option>
                      <option value="CM">Cameroon</option>
                      <option value="CA">Canada</option>
                      <option value="DK">Denmark</option>
                      <option value="DJ">Djibouti</option>
                      <option value="DM">Dominica</option>
                      <option value="ER">Eritrea</option>
                      <option value="EE">Estonia</option>
                      <option value="ET">Ethiopia</option>
                      <option value="FJ">Fiji</option>
                      <option value="FI">Finland</option>
                      <option value="FR">France</option>
                      <option value="GA">Gabon</option>
                      <option value="GM">Gambia</option>
                      <option value="GE">Georgia</option>
                      <option value="HT">Haiti</option>
                      <option value="HK">Hong Kong</option>
                      <option value="HU">Hungary</option>
                      <option value="IS">Iceland</option>
                      <option value="IN">India</option>
                      <option value="ID">Indonesia</option>
                      <option value="JP">Japan</option>
                      <option value="JE">Jersey</option>
                      <option value="JO">Jordan</option>
                      <option value="KZ">Kazakhstan</option>
                      <option value="KE">Kenya</option>
                      <option value="KI">Kiribati</option>
                      <option value="LV">Latvia</option>
                      <option value="LB">Lebanon</option>
                      <option value="LS">Lesotho</option>
                      <option value="MG">Madagascar</option>
                      <option value="MW">Malawi</option>
                      <option value="MY">Malaysia</option>
                      <option value="NA">Namibia</option>
                      <option value="NR">Nauru</option>
                      <option value="NP">Nepal</option>
                      <option value="OM">Oman</option>
                      <option value="PK">Pakistan</option>
                      <option value="PW">Palau</option>
                      <option value="PE">Peru</option>
                      <option value="QA">Qatar</option>
                      <option value="RE">Réunion</option>
                      <option value="RO">Romania</option>
                      <option value="RW">Rwanda</option>
                      <option value="LC">Saint Lucia</option>
                      <option value="WS">Samoa</option>
                      <option value="SM">San Marino</option>
                      <option value="TH">Thailand</option>
                      <option value="TL">Timor-Leste</option>
                      <option value="TG">Togo</option>
                      <option value="UG">Uganda</option>
                      <option value="UA">Ukraine</option>
                      <option value="UY">Uruguay</option>
                      <option value="VU">Vanuatu</option>
                      <option value="VN">Viet Nam</option>
                      <option value="EH">Western Sahara</option>
                      <option value="YE">Yemen</option>
                      <option value="ZM">Zambia</option>
                      <option value="ZW">Zimbabwe</option>
                    </select>
                  </div>
                  <div className="form-group col-sm-12">
                    <label>Street Address</label>
                    <input type="text" className="form-control" placeholder="" />
                  </div>
                  <div className="form-group col-sm-12">
                    <input type="text" className="form-control" placeholder="" />
                  </div>
                  <div className="form-group col-sm-12 select-border">
                    <label>City</label>
                    <select className="form-control basic-select">
                      <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                      <option value="Daman and Diu">Daman and Diu</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Lakshadweep">Lakshadweep</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Orissa">Orissa</option>
                      <option value="Pondicherry">Pondicherry</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Tripura">Tripura</option>
                      <option value="Uttaranchal">Uttaranchal</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="West Bengal">West Bengal</option>
                    </select>
                  </div>
                  <div className="form-group select-border col-sm-12">
                    <label>State</label>
                    <select className="form-control basic-select">
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="DC">District Of Columbia</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </select>
                  </div>
                  <div className="form-group col-sm-12">
                    <label>ZIP</label>
                    <input type="text" className="form-control" placeholder="" />
                  </div>
                  <div className="form-group col-sm-12">
                    <label>Phone</label>
                    <input type="text" className="form-control" placeholder="" />
                  </div>
                  <div className="form-group col-sm-12 mb-0">
                    <label>Email Address:</label>
                    <input type="email" className="form-control" placeholder="" />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 mt-5 mt-md-0">
              <div className="section-title">
                <h4 className="title">Your order</h4>
              </div>
              <div className="checkout-review">
                <div className="table-responsive">
                  <table className="table cart">
                    <tbody>
                      <tr>
                        <th className="border-top-0 product-name" scope="row">Product</th>
                        <th className="border-top-0 product-total" scope="row">Subtotal</th>
                      </tr>
                      <tr>
                        <td> Landscape Visitors Book - 122 Pages, A Design, A4 </td>
                        <td> $360.00 </td>
                      </tr>
                      <tr>
                        <td> Leather Visitors Notebook True-Ally A4 Faux </td>
                        <td> $348.00 </td>
                      </tr>
                      <tr>
                        <th className="product-name" scope="row">Subtotal</th>
                        <td className="product-total amount"><strong> $708.00 </strong></td>
                      </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                      <th className="shipping">Shipping</th>
                      <td>
                        <div className="custom-control custom-radio">
                          <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                          <label className="custom-control-label" for="customRadio1">Flat rate</label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                          <label className="custom-control-label" for="customRadio2">Local pickup</label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th className="product-total" scope="row">Total</th>
                      <td className="product-total amount text-primary"><strong> $708.00 </strong></td>
                    </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="accordion mb-3" id="accordion-faq">
                  <div className="card">
                    <div className="accordion-icon card-header" id="headingOne">
                      <h6 className="mb-0">
                      <button className="btn" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Direct bank transfer
                      </button>
                      </h6>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion-faq">
                      <div className="card-body">
                        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="accordion-icon card-header" id="headingTwo">
                      <h6 className="mb-0">
                      <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Check payments
                      </button>
                      </h6>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion-faq">
                      <div className="card-body">
                        Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="accordion-icon card-header" id="headingthree">
                      <h6 className="mb-0">
                      <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapsethree" aria-expanded="false" aria-controls="collapsethree">
                      Cash on delivery
                      </button>
                      </h6>
                    </div>
                    <div id="collapsethree" className="collapse" aria-labelledby="headingthree" data-parent="#accordion-faq">
                      <div className="card-body">
                        Pay with cash upon delivery.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="accordion-icon card-header" id="headingfor">
                      <h6 className="mb-0">
                      <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapsefor" aria-expanded="false" aria-controls="collapsefor">
                      PayPal
                      </button>
                      </h6>
                    </div>
                    <div id="collapsefor" className="collapse" aria-labelledby="headingfor" data-parent="#accordion-faq">
                      <div className="card-body">
                        Pay with cash upon delivery.
                      </div>
                    </div>
                  </div>
                </div>
                <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our<a href="#"> privacy policy.</a></p>
                <div className="custom-control custom-checkbox my-4">
                  <input type="checkbox" className="custom-control-input" id="dateposted1" />
                  <label className="custom-control-label" for="dateposted1"> I have read and agree to the website <a href="#">terms and conditions</a></label>
                </div>
                <button type="button" className="btn btn-primary btn-lg btn-block">Place order</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default CheckoutDetails;