import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`,
            backgroundAttachment:'fixed'
        }} 
        className="flex justify-center items-center my-20">

            <div className="flex-1 hidden lg:block">
                <img className="mt-[-120px]" src={doctor} alt="" />
            </div>
            <div className="flex-1 py-20 lg:py-5 px-2">
                <h3 className="text-xl text-primary">
                    Appointment
                </h3>
                <h2 className="text-3xl text-white my-5 font-semibold">Make an Appointment Today</h2>
                <p className="text-white mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quis, doloribus dolorem voluptas accusantium culpa nulla at voluptates tenetur labore porro cumque numquam sit, facilis, commodi alias fuga quaerat ipsam perferendis. Natus odio nesciunt reiciendis, quo commodi explicabo hic perferendis!</p>
                <PrimaryButton btnText="Get Started" />
            </div>

        </section>
    );
};

export default MakeAppointment;