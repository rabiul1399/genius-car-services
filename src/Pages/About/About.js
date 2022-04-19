import React from 'react';
import Helmet from 'react-helmet';
import PageTitle from '../Sheard/PageTitle/PageTitle';
import MyLocation from '../SocialPage/MyLocation/MyLocation';

const About = () => {
    return (
        <div className='d-flex justify-content-center'>
           <div>
           <PageTitle title={'about'}></PageTitle>
           <h3>This is about </h3>
           <MyLocation></MyLocation>
           </div>
        </div>
    );
};

export default About;