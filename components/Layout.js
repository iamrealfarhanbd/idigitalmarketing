import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import LoginPopUp from "./LoginPopUp";
import { useRouter } from 'next/router';
import Header1 from "./Header1";
import Header2 from "./Header2";


const Layout = ({ children }) => {
    const router = useRouter();
	const currentRouter = router.pathname;
    console.log(currentRouter);
	return (
		<div>
			<Head>
				<meta charset="UTF-8" />
				<meta name="keywords" content="HTML5 Template" />
				<meta
					name="description"
					content="Guruma - Online Course & Education HTML Template"
				/>
				<meta name="author" content="potenzaglobalsolutions.com" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<title>Guruma - Online Course & Education HTML Template</title>
				<link
					href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
					rel="stylesheet"
				/>

				<link rel="stylesheet" href="css/font-awesome/all.min.css" />
				<link rel="stylesheet" href="css/flaticon/flaticon.css" />
				<link rel="stylesheet" href="css/bootstrap/bootstrap.min.css" />
				<link rel="stylesheet" href="css/select2/select2.css" />
				<link
					rel="stylesheet"
					href="css/owl-carousel/owl.carousel.min.css"
				/>
				<link rel="stylesheet" href="css/swiper/swiper.min.css" />
				<link
					rel="stylesheet"
					href="css/magnific-popup/magnific-popup.css"
				/>
				<link rel="stylesheet" href="css/animate/animate.min.css" />
				<link rel="stylesheet" href="css/style.css" />
				<script src="js/jquery-3.4.1.min.js"></script>
				<script src="js/popper/popper.min.js"></script>
				<script src="js/bootstrap/bootstrap.min.js"></script>
				<script src="js/jquery.appear.js"></script>
				<script src="js/select2/select2.full.js"></script>
				<script src="js/owl-carousel/owl.carousel.min.js"></script>
				<script src="js/swiper/swiper.min.js"></script>
				<script src="js/shuffle/shuffle.min.js"></script>
				<script src="js/jarallax/jarallax.min.js"></script>
				<script src="js/magnific-popup/jquery.magnific-popup.min.js"></script>
				<script src="js/swiperanimation/SwiperAnimation.min.js"></script>
				<script src="js/countdown/jquery.downCount.js"></script>
				<script src="js/counter/jquery.countTo.js"></script>
				<script src="js/custom.js"></script>
			</Head>
            { currentRouter === "/" ?  <Header1 /> : <Header2 />}
			<LoginPopUp />
			{children}
            <Footer />
		</div>
	);
};

export default Layout;
