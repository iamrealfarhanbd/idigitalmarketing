const Nav = () => {
	return (
		<nav className="navbar navbar-static-top navbar-expand-lg px-3 px-md-5">
			<div className="container-fluid position-relative px-0">
				<button
					type="button"
					className="navbar-toggler"
					data-toggle="collapse"
					data-target=".navbar-collapse"
				>
					<i className="fas fa-align-left"></i>
				</button>
				<a className="navbar-brand" href="index.html">
					<img
						className="img-fluid"
						src="images/logo-dark.svg"
						alt="logo"
					/>
				</a>
				<a className="navbar-brand navbar-brand-sticky" href="index.html">
					<img className="img-fluid" src="images/logo.svg" alt="logo" />
				</a>
				<div className="navbar-collapse collapse">
					<ul className="nav navbar-nav">
						<li className="nav-item active">
							<a className="nav-link" href="/"> Home  </a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/about">
								About Us
							</a>
						</li>
						<li className="dropdown nav-item">
							<a
								className="nav-link"
								href="#:void(0)"
								data-toggle="dropdown"
							>
								Course<i className="fas fa-chevron-down fa-xs"></i>
							</a>
							<ul className="dropdown-menu megamenu dropdown-menu-md">
								<li>
									<div className="row no-gutters">
										<div className="col-sm-6">
											<h6 className="nav-title">
												Course Pages
											</h6>
											<ul className="list-unstyled mt-lg-1">
												<li>
													<a
														className="dropdown-item"
														href="/coursesingle"
													>
														<span>Course Details</span>
													</a>
												</li>
												<li>
													<a
														className="dropdown-item"
														href="/course"
													>
														<span>
															Course
														</span>
													</a>
												</li>
											</ul>
										</div>
										
									</div>
								</li>
							</ul>
						</li>
						<li className="dropdown nav-item">
							<a
								className="nav-link"
								href="#"
								data-toggle="dropdown"
							>
								Pages<i className="fas fa-chevron-down fa-xs"></i>
							</a>
							<ul className="dropdown-menu megamenu dropdown-menu-lg">
								<li>
									<div className="row no-gutters">
										<div className="col-sm-6 col-md-4">
											<h6 className="nav-title">
												Basic Pages
											</h6>
											<ul className="list-unstyled mt-lg-1">
												<li>
													<a
														className="dropdown-item"
														href="/privacy"
													>
														<span>privacy</span>
													</a>
												</li>
												<li>
													<a
														className="dropdown-item"
														href="/terms"
													>
														<span>Terms and Consditions</span>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</li>
							</ul>
						</li>
						<li className="dropdown nav-item">
							<a
								className="nav-link"
								href="#:void(0)"
								data-toggle="dropdown"
							>
								Blog <i className="fas fa-chevron-down fa-xs"></i>
							</a>
							<ul
								className="dropdown-menu"
								aria-labelledby="navbarDropdown"
							>
								<li>
									<a
										className="dropdown-item"
										href="/blog"
									>
										<span>Blog</span>
									</a>
								</li>
								<li>
									<a
										className="dropdown-item"
										href="/blogsingle"
									>
										<span>Blog Single</span>
									</a>
								</li>
							</ul>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link"
								href="#"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Shop<i className="fas fa-chevron-down fa-xs"></i>
							</a>
							<ul
								className="dropdown-menu"
								aria-labelledby="navbarDropdown"
							>
								<li>
									<a className="dropdown-item" href="/course">
										<span>Course</span>
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="/cart">
										<span>Cart</span>
									</a>
								</li>
								<li>
									<a
										className="dropdown-item"
										href="/checkout"
									>
										<span>Checkout</span>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a className="nav-link" href="/contact">
								Contact us
							</a>
						</li>
					</ul>
				</div>
				<div className="woo-action">
					<ul className="list-unstyled">
						<li className="user">
							<a
								data-toggle="modal"
								data-target="#loginModal"
								href="#"
							>
								Hello sign in
								<i className="fa fa-user pl-2 text-primary"></i>
							</a>
						</li>
						<li className="cart dropdown">
							<button
								className="dropdown-toggle"
								type="button"
								id="dropdownMenuButton"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								<span className="cart-icon">
									<i className="fas fa-shopping-cart"></i>
								</span>
							</button>
							<div
								className="dropdown-menu-right"
								aria-labelledby="dropdownMenuButton"
							>
								<ul className="cart-list pl-0">
									<li className="d-flex">
										<a className="remove-item" href="#">
											<i className="fas fa-times text-danger"></i>
										</a>
										<img
											className="img-fluid mr-3"
											src="images/shop/01.jpg"
											alt=""
										/>
										<div className="cart-info">
											<a href="#">
												Landscape Visitors Book - 122
												Pages, A Design, A4
											</a>
											<span className="d-block">
												1 x 12.49
											</span>
										</div>
									</li>
									<li className="d-flex">
										<a className="remove-item" href="#">
											<i className="fas fa-times text-danger"></i>
										</a>
										<img
											className="img-fluid mr-3"
											src="images/shop/02.jpg"
											alt=""
										/>
										<div className="cart-info">
											<a href="#">
												Leather Visitors Notebook
												True-Ally A4 Faux
											</a>
											<span className="d-block">
												1 x 28.72
											</span>
										</div>
									</li>
								</ul>
								<div className="cart-footer">
									<div className="d-flex mb-3">
										<b className="mr-auto text-dark">
											Subtotal:
										</b>
										<span>$41.21</span>
									</div>
									<div className="d-inline-block d-sm-flex">
										<a
											className="btn btn-sm btn-primary text-white mr-2 px-4"
											href="#"
										>
											View cart
										</a>
										<a
											className="btn btn-sm btn-dark text-white ml-0 mt-1 mt-sm-0 ml-sm-2 px-4"
											href="#"
										>
											Checkout
										</a>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
