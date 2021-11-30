import React from 'react';
import CoursePageHeader from '../../components/coursepage/CoursePageHeader';
import Courses from '../../components/coursepage/Courses';


const course = ({courses}) => {
    return (
        <div>
            <CoursePageHeader />
            <Courses courses={courses}/>
        </div>
    );
};

export default course;


export const getStaticProps = async () => {
    const courses = await fetchData();
    return {
        props: { courses },
    };
};
  