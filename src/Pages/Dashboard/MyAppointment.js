import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyAppointment = () => {

    const [appointments, setAppointments] = useState([]);
    const [user,loading] = useAuthState(auth);
    const navigate = useNavigate()


    // using react query instead of normal fetch


    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user?.email}`, {
                headers: {
                    "authorization": `bearer ${localStorage.getItem('accessToken')}`

                }
            })
            .then(res => {
            
                if(res.status === 200){
                    return res.json()
                }
                else{
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/login');
                }
            })
            .then(data => {
                setAppointments(data);

            })

        }

    }, [user])

    if (loading) {
        return <Loading />
    }

    return (
        <div>
            <h2>My Appointments: {appointments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>TimeSlot</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            appointments?.map((a, index) =>
                                <tr key={a._id}>
                                    <th>{index + 1}</th>
                                    <td>{a.patientName}</td>
                                    <td>{a.date}</td>
                                    <td>{a.slot}</td>
                                    <td>{a.treatmentName}</td>
                                </tr>
                            )
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;