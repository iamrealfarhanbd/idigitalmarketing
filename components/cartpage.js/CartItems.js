const CartItems = () => {
    return (
        <section className="space-ptb bg-holder">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mb-4 mb-lg-0">
                        <div className="cart-table">
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th className="product-remove">&nbsp;</th>
                                            <th className="product-thumbnail">&nbsp;</th>
                                            <th className="product-name">Product</th>
                                            <th className="product-price">Price</th>
                                            <th className="product-quantity">Quantity</th>
                                            <th className="product-subtotal">Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="product-remove"><a href="#"><i className="far fa-trash-alt"></i></a></td>
                                            <td className="product-thumbnail"><a href="#"><img src="images/shop/01.jpg" alt="" /></a></td>
                                            <td className="product-name"><a href="#">Landscape Visitors Book..</a></td>
                                            <td className="product-price"><span className="amount">$12.49</span></td>
                                            <td className="product-quantity">
                                            <form>
                                                <div className="form-group">
                                                <input type="number" className="form-control" id="number" value="1" />
                                                </div>
                                            </form>
                                            </td>
                                            <td className="product-subtotal"><span className="subtotal">$12.49</span></td>
                                        </tr>
                                        <tr>
                                            <td className="product-remove"><a href="#"><i className="far fa-trash-alt"></i></a></td>
                                            <td className="product-thumbnail"><a href="#"><img src="images/shop/02.jpg" alt="" /></a></td>
                                            <td className="product-name"><a href="#">Leather Visitors Notebook.</a></td>
                                            <td className="product-price"><span className="amount">$15.00</span></td>
                                            <td className="product-quantity">
                                            <form>
                                                <div className="form-group">
                                                    <input type="number" className="form-control" id="number2" value="2" />
                                                </div>
                                            </form>
                                            </td>
                                            <td className="product-subtotal"><span className="subtotal">$15.00</span></td>
                                        </tr>
                                        <tr>
                                            <td className="product-remove"><a href="#"><i className="far fa-trash-alt"></i></a></td>
                                            <td className="product-thumbnail"><a href="#"><img src="images/shop/03.jpg" alt="" /></a></td>
                                            <td className="product-name"><a href="#">Hard Bound Notebook.</a></td>
                                            <td className="product-price"><span className="amount">$17.49</span></td>
                                            <td className="product-quantity">
                                            <form>
                                                <div className="form-group">
                                                <input type="number" className="form-control" id="number3" value="3" />
                                                </div>
                                            </form>
                                            </td>
                                            <td className="product-subtotal"><span className="subtotal">$17.49</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                                </div>
                                <div className="actions">
                                <div className="coupon">
                                    <form className="form-inline">
                                    <div className="form-group">
                                        <input type="text" id="coupon_code" name="coupon_code" className="form-control"  value="" placeholder="Coupon code" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Apply coupon</button>
                                    </form>
                                </div>
                                <div className="update-cart"> <a className="btn btn-primary" href="#"> Update cart</a></div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4">
                            <div className="cart-totals">
                                <h4 className="cart-totals-title">Cart totals</h4>
                                <div className="table-responsive">
                                <table className="table table-bordered">
                                    <tbody>
                                    <tr className="cart-subtotal">
                                        <th>Subtotal</th>
                                        <td><span className="subtotal">$9.82</span></td>
                                    </tr>
                                    <tr className="shipping">
                                        <th>Shipping</th>
                                        <td>
                                        <form>
                                            <div className="form-group">
                                            <div className="custom-control custom-radio">
                                                <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                                                <label className="custom-control-label" for="customRadio1">Flat rate</label>
                                            </div>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                                                <label className="custom-control-label" for="customRadio2">Local pickup</label>
                                            </div>
                                            </div>
                                        </form>
                                        </td>
                                    </tr>
                                    <tr className="order-total">
                                        <th>Total</th>
                                        <td>
                                        <span className="amount">$9.82</span>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="text-center">
                                <a href="shop-checkout.html" className="btn btn-dark checkout-button">Proceed to checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CartItems;