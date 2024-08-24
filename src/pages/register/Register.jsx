import { useNavigate } from "react-router-dom";
import Form from "../../components/form/Form";
import { registerValidationSchema } from "../../validation/validation";
import axios from "axios";
import { toast } from "sonner";
import { useEffect, useState } from "react";

export default function Register() {
    const navigate = useNavigate();
    const [animate, setAnimate] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const registerFields = [
        { name: 'email', label: 'Email', type: 'email', placeholder: "Enter Your Email Here" },
        { name: 'password', label: 'Password', type: 'password', placeholder: "Enter Your Password Here" },
        { name: 'username', label: 'User Name', type: 'text', placeholder: "Enter Your 'User Name' Here" },
        { name: 'UserType', label: 'User Type', type: 'select', options: ['Applicant', 'Employer'], placeholder: "Select User Type" },
    ];
    const initialValues = {
        email: '',
        password: '',
        username: '',
    };
    const handleRegisterSubmitClick = async (values, resetForm) => {
        try {
            setIsLoading(true);
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, values)
            if (data) {
                console.log(data)
                toast.success(`Registeration successfully!`, {
                    position: 'top-center',
                });
                resetForm();
                navigate('/Login')
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
        return () => {
            setAnimate(false);
        }
    }, [])
    return (
        <div className=' h-[650px] bg-white  relative  flex justify-center items-center w-[70%] rounded-3xl overflow-hidden shadow-[6px_11px_57px_-12px_rgba(0,0,0,0.75)] ' >
            <div className={`toggle-panel text-white w-[50%] min-h-full flex justify-evenly items-center flex-col p-[0_30px] rounded-[0_150px_100px_0] bg-primary translate-x-[-100%] transition-all duration-700 ease-out ${animate ? 'translate-x-[0]' : ''} `}>
                <h2 className='text-4xl font-bold '>welcome back</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sit sequi delectus quis libero tempore corporis culpa obcaecati, animi adipisci, nobis laudantium reiciendis facilis dolore assumenda enim repellat labore. Labore.</p>
                <button className='border-2 border-white px-6 py-2 rounded-lg capitalize ' onClick={() => navigate('/Login')}>Log In!</button>
            </div>
            <div className={`w-[50%] flex flex-col justify-center items-center gap-10 p-3 translate-x-[-100%] transition-all duration-700 ${animate ? 'translate-x-[0]' : 'translate-x-[100%]'}`}>
                <h2 className='text-4xl font-bold '>Sign Up</h2>
                <Form
                    fields={registerFields}
                    initialValues={initialValues}
                    onSubmit={handleRegisterSubmitClick}
                    validationSchema={registerValidationSchema}
                    buttonText="Sign Up"
                    isLoading={isLoading}
                />
            </div>
        </div >
    )
}
