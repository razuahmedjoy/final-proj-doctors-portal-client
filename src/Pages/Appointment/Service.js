import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="card-title text-secondary justify-center">{name}</h2>
                <p>
                    {
                        slots.length ?
                            <span>{slots[0]}</span>
                            :
                            <span className="text-red-500">No slot Avaiable</span>
                    }
                </p>

                <p>{slots.length} spaces available</p>

                <div className="card-actions justify-center">

                    <label
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        className="btn btn-secondary text-white" htmlFor="booking-modal"
                    >
                        Book  Appointment

                    </label>

                </div>
            </div>

           

        </div>
    );
};

export default Service;