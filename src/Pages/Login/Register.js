import React, { useContext, useEffect } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import { RouteContext } from '../../App';
import useToken from '../../hooks/useToken';
const Register = () => {


    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate()

    const { routes } = useContext(RouteContext)

    const [token] = useToken(user || guser)
    const [stateuser, stateloading] = useAuthState(auth)

    useEffect(() => {

        if (token || stateuser) {
            navigate(routes.appointment);
        }

    }, [token,stateuser]);

    let signInError;

    if (loading || gloading || updating || stateloading) {
        return <Loading />
    }
    if (error || gerror || updateError) {
        signInError = <p class="text-red-500 pb-2 small">{error?.message || gerror?.message || updateError?.message}</p>
    }


    const onSubmit = async data => {

        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log("Updated!");


        // navigate(routes.appointment);

    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl font-semibold text-center">SignUp</h2>

                    {/* react form hooks */}

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>

                            </label>
                            <input
                                type="text"
                                placeholder="Your name"
                                className="input input-bordered w-full"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is Required"
                                    }
                                })}
                            />
                            <label className="label">

                                {errors.name?.type === 'required' && <span className="text-red-500">{errors.name.message}</span>}

                            </label>

                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>
                            <input
                                type="email"
                                placeholder="Email address"
                                className="input input-bordered w-full"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is Required"
                                    },
                                    pattern: {
                                        value: /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i,
                                        message: 'Enter valid Email address'
                                    }
                                })}
                            />
                            <label className="label">

                                {errors.email?.type === 'required' && <span className="text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="text-red-500">{errors.email.message}</span>}
                            </label>

                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full"
                                {...register("password",
                                    {
                                        required: {
                                            value: true,
                                            message: "Password is Required"
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 Charecter long minimum'
                                        }
                                    }
                                )}
                            />
                            <label className="label">

                                {errors.password?.type === 'required' && <span className="text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-500">{errors.password.message}</span>}
                            </label>


                        </div>



                        {signInError}

                        <input className="btn w-full" type="submit" value="SignUp" />
                    </form>
                    <p>
                        <small>Already Have account? <Link className="text-secondary" to={routes.login}>Please Login</Link> </small>
                    </p>
                    {/* react form hooks */}

                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;