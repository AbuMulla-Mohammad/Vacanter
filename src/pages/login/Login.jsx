import { useEffect, useState } from 'react';
import Form from "../../components/form/Form";
import { loginValidationSchema } from '../../validation/validation';
import axios from 'axios';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../../features/auth/authSlice';
import { setUserInfo } from '../../features/userInfo/userInfoSlice';

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [animate, setAnimate] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const loginFields = [
        { name: 'email', label: 'Email', type: 'email', placeholder: "Enter Your Email Here" },
        { name: 'password', label: 'Password', type: 'password', placeholder: "Enter Your Password Here" },
    ];

    const initialValues = {
        email: '',
        password: '',
    };

    const handleLoginSubmitClick = async (values, restForm) => {
        try {
            setIsLoading(true);
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, values);
            if (data) {
                const userToken = data.token;
                dispatch(setToken(userToken));
                dispatch(setUserInfo(data.other));
                toast.success(`Welcome Back ${data.other.username}!`, {
                    position: 'top-center',
                });
                restForm();
                navigate("/Home");
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response.data, {
                position: 'top-center',
            });
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        setAnimate(true);
    }, [])

    return (
        <>
            <div className=' h-[650px] relative  flex justify-center items-center w-[70%] rounded-3xl overflow-hidden shadow-[6px_11px_57px_-12px_rgba(0,0,0,0.75)]' >
                <div className={`w-[50%] flex flex-col justify-center items-center gap-10 p-3 translate-x-[-100%] transition-all duration-700 ease-out ${animate ? 'translate-x-[0]' : ''}`}>
                    <h2 className='text-4xl font-bold '>LOG IN</h2>
                    <Form
                        fields={loginFields}
                        initialValues={initialValues}
                        onSubmit={handleLoginSubmitClick}
                        validationSchema={loginValidationSchema} // Pass the validation schema here
                        buttonText="Login"
                        isLoading={isLoading}
                    />
                </div>
                <div className={`toggle-panel text-white w-[50%] min-h-full flex justify-evenly items-center flex-col p-[0_30px] rounded-[150px_0_0_100px] bg-primary translate-x-[-100%] transition-all duration-700 ${animate ? 'translate-x-[0]' : 'translate-x-[100%]'}`}>
                    <h2 className='text-4xl font-bold '>welcome back</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sit sequi delectus quis libero tempore corporis culpa obcaecati, animi adipisci, nobis laudantium reiciendis facilis dolore assumenda enim repellat labore. Labore.</p>
                    <button className='border-2 border-white px-6 py-2 rounded-lg capitalize ' onClick={() => navigate('/Register')}>sign up!</button>
                </div>
            </div >
        </>
    );
}
