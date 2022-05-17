import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import contactBg from '../../assets/images/appointment.png'
const ContactUs = () => {
    return (
        <section style={{
            background: `url(${contactBg})`,
            backgroundAttachment:'fixed'
        }} className="text-center py-10 mt-8">
            <h4 className="text-xl text-primary font-semibold">Contact Us</h4>
            <h2 className="text-4xl text-white">Stay connected with us</h2>

            <div className="contact-form max-w-md mx-auto mt-5">
                <form onSubmit={(e)=>e.preventDefault()} className="flex flex-col gap-y-5 px-3">
                    <input type="email" placeholder="Email Address" className="input input-bordered input-primary w-full" />
                    <input type="text" placeholder="Subject" className="input input-bordered input-primary w-full" />
                    <textarea className="textarea textarea-primary" placeholder="Your message here"></textarea>
                    <PrimaryButton btnText="Submit" />
                </form>
            </div>
        </section>
    );
};

export default ContactUs;