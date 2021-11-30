const Banner = () => {
	return (
		<section
			className="banner-05 bg-holder space-ptb"
			style={{ backgroundImage: "url(images/bg/10.jpg)" }}
		>
			<div className="container">
				<div className="row">
					<div className="col-md-8 offset-md-2">
						<div className="content text-center">
							<h6 className="mb-0">
								Discover best classes for the best learning
							</h6>
							<h1 className="mb-0">
								Education your door to the future
							</h1>
							<a className="btn btn-md btn-primary mt-3" href="#">
								Learn more
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
