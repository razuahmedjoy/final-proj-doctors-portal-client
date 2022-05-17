import { format } from 'date-fns/esm';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment;

    const [user, loading, error] = useAuthState(auth);

    const handleBooking = event => {

        event.preventDefault();
        const slot = event.target.slot.value;
        // console.log(slot);

        const bookingData = {
            treatmentId: _id,
            treatmentName: name,
            date: format(date, "PP"),
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone?.value,


        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if(data.success){
                    refetch()
                    toast.success("Submitted Booking Data",{
                        duration:3000
                    })

                }
                else{
                    toast.error(`${data.message} on ${data?.booking?.date}`)
                }
               
            })

        // console.log(bookingData)

        setTreatment(null);
    }
    return (
        <div>


            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="font-bold text-lg mt-5">Booking for: {name}</h3>

                    <form onSubmit={handleBooking} className="grid grid-cols-1 gap-4 justify-items-center py-5">
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" value={format(date, "PP")} readOnly />

                        <select name="slot" className="select select-primary w-full">
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }


                        </select>

                        <input type="text" placeholder="Your name here" className="input input-bordered w-full" name="name" value={user?.displayName} disabled />
                        <input type="email" placeholder="Email Address" name="email" className="input input-bordered w-full" value={user?.email} disabled />
                        <input type="text" name="phone" placeholder="Phone number" className="input input-bordered w-full" />
                        <input type="submit" value="Submit" className="btn w-full btn-secondary text-white" />

                    </form>



                </div>
            </div>
        </div >
    );
};

export default BookingModal;