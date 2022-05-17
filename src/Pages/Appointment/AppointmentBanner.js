import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = ({date,setDate}) => {

    


    return (
        <section>
            <div className="hero min-h-[85vh]">
                <div className="hero-content flex-col lg:flex-row-reverse px-2 lg:gap-x-10">
                    <img src={chair} className="w-full md:max-w-sm rounded-lg shadow-2xl" alt="" />
                    <div className="bg-white shadow-xl rounded-xl p-4">
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                        <p className="text-center">You have selected: {format(date, 'PP')}
                        
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;