import Head from "next/head";
import Banner from "../components/homepage/Banner";
import Blog from "../components/homepage/Blog";
import Course from "../components/homepage/Course";
import FeatureInfo from "../components/homepage/FeatureInfo";
import FeatureInfoProgress from "../components/homepage/FeatureInfoProgress";
import Testimonial from "../components/homepage/Testimonial";
import Video from "../components/homepage/Video";
import axios from 'axios'
const fetchData = async () => 
    await axios.get('')
    .then(res => ({
        error: false,
        users: res.data,
    }))
    .catch(() => ({
      error: true,
      users: null,
    }),
);

const fetchBlogData = async () => 
    await axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => ({
        error: false,
        blog: res.data,
    }))
    .catch(() => ({
      error: true,
      blog: null,
    }),
);
const homepage = ({courses, blogs}) => {
	return (
		<div>
			<Banner />
			<Course courses={courses} />
			<FeatureInfo />
			<FeatureInfoProgress />
			<Video />
			<Testimonial />
			<Blog blogs={blogs}/>
		</div>
	);
};

export default homepage;

export const getStaticProps = async () => {
	const courses = await fetchData();
	const blogs = await fetchBlogData();
	return {
		props: { courses, blogs },
	};
  };
  