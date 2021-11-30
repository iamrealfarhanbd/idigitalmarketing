import React from "react";

const InfoBox = () => {
	return (
		<section className="bg-primary">
			<div className="container">
				<div className="row feature-info-02">
					<div className="col-sm-4 py-4 text-center">
						<i className="flaticon-online-learning-1 fa-3x text-white"></i>
						<h4 className="fw-5 mt-3 mb-0 text-white">
							100,000 online courses
						</h4>
						<p className="mb-0 text-white">
							Focus is having the unwavering attention.
						</p>
					</div>
					<div className="col-sm-4 py-4 text-center">
						<i className="flaticon-lock fa-3x text-white"></i>
						<h4 className="fw-5 mt-3 mb-0 text-white">
							Lifetime entrance
						</h4>
						<p className="mb-0 text-white">
							The best way is to develop and follow.
						</p>
					</div>
					<div className="col-sm-4 py-4 text-center">
						<i className="flaticon-strategy fa-3x mt-2 text-white"></i>
						<h4 className="fw-5 mt-3 mb-0 text-white">Live learning</h4>
						<p className="mb-0 text-white">
							Start with your goals in mind and then work.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default InfoBox;
