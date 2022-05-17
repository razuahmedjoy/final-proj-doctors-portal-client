import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import phone from '../../assets/icons/phone.svg';
import marker from '../../assets/icons/marker.svg';

const Info = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-1 md:px-12">
            <InfoCard icon={clock} bgClass="bg-gradient-to-r from-secondary to-primary" cardTitle="Opening Hours" />
            <InfoCard icon={marker} bgClass="bg-accent" cardTitle="Our Locations"/>
            <InfoCard icon={phone} bgClass="bg-gradient-to-r from-secondary to-primary" cardTitle="Contact Us"/>
            
        </div>
    );
};

export default Info;