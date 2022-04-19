import React from 'react';
import { Helmet } from 'react-helmet-async';
import Services from '../Services/Services';
import Footer from '../Sheard/Footer/Footer';
import PageTitle from '../Sheard/PageTitle/PageTitle';
import Banner from './Banner/Banner';
import Experts from './Experts/Experts';

const Home = () => {
    return (
        <>
        
        <PageTitle title={'Home'}></PageTitle>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
            <Footer></Footer>
           
        </>
    );
};

export default Home;