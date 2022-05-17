import React from 'react';
import SingleService from './SingleService';
import flouride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Flouride Treatment',
            description: '',
            img: flouride

        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: '',
            img: cavity

        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: '',
            img: whitening

        },
    ];

    return (
        <div className="my-20">
            <div className="text-center">
                <h3 className="text-primary text-xl font-bold uppercase">Our Services</h3>
                <h2 className="text-5xl">Services We Provide</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-12 mt-5">
                {
                    services.map(service =>
                        <SingleService key={service._id} service={service} />
                    )
                }
            </div>
        </div>
    );
};

export default Services;