import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import CareBanner from './CareBanner';
import ContactUs from './ContactUs';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
        
            <Banner/>
            <Info/>
            <Services/>
            <CareBanner/>
            <MakeAppointment/>
            <Testimonials/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Home;