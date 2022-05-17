import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date, setDate }) => {
    // const [services, setServices] = useState([]);

    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, "PP")

    // using react query instead of normal fetch
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())
    )

    if (isLoading) {
        return <Loading />
    }

    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [treatment,formattedDate])

    return (
        <div className="pb-10">
            <h2 className="text-2xl text-secondary text-center font-semibold">
                Available Appointments on {formattedDate}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12">
                {
                    services?.map(service =>
                        <Service
                            key={service._id}
                            service={service}
                            setTreatment={setTreatment}
                        />)
                }
            </div>

            {treatment && <BookingModal
                treatment={treatment}
                setTreatment={setTreatment}
                date={date}
                refetch={refetch}
            />}


        </div>
    );
};

export default AvailableAppointments;