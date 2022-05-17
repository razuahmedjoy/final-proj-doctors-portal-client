import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const AllUsers = () => {

    // using react query;
    const { data: users, isLoading , refetch} = useQuery('users', () =>
         fetch('http://localhost:5000/users', {

            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    )

    if (isLoading) {
        return <Loading />;
    }

    console.log(users)
    return (
        <div>
            <h2 className="text-2xl">ALl Users: {users && users?.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users && users?.map(user => <UserRow key={user._id} refetch={refetch} user={user} />)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;