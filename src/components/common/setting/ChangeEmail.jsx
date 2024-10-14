import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeEmailValidationSchema } from "../../../validation/validation";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "sonner";
import { setUserInfo } from "../../../features/userInfo/userInfoSlice";

export default function ChangeEmail() {
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.userInfo);
    const token = useSelector(state => state.auth.token);
    const email = useSelector(state => state.userInfo.userInfo.email);
    const [isLoading, setIsLoading] = useState(false);
    const initialValues = {
        email: '',
    };
    const formik = useFormik({
        initialValues,
        onSubmit: (values, { resetForm }) => {
            handleChangeEmailSubmitClick(values, resetForm);
        },
        validationSchema: ChangeEmailValidationSchema,
    });
    const handleChangeEmailSubmitClick = async (value, resetForm) => {
        const newEmail = {};
        newEmail.email = value.email;
        try {
            setIsLoading(true);
            const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/users/${userInfo.userInfo._id}`,
                newEmail,
                {
                    headers: {
                        token,
                    }
                }

            )
            dispatch(setUserInfo(data));
            resetForm
            toast.success(`Your Email Updated Successfully`, {
                position: 'top-center',
            });
        } catch (error) {
            toast.error('An Error Occurred', {
                position: 'top-center',
            });
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <div className=" w-[80%] m-auto py-10">
            <form onSubmit={(e) => {
                e.preventDefault();
                formik.handleSubmit();
            }}
                className=" flex flex-col gap-3 justify-center w-[90%]"
            >
                <div className="flex flex-col gap-3 w-full">
                    <label className="px-2" htmlFor={"Email"}>Email</label>
                    <input
                        disabled={isLoading}
                        className={`px-3 py-2 rounded-xl border-2 border-[#eee] bg-[#eaebed] placeholder:text-[#333] placeholder:text-sm ${formik.touched["email"] && formik.errors["email"] && "border-2 border-accent-error"}`}
                        name="email"
                        type="email"
                        id="Email"
                        placeholder={email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {(
                        <p className={`text-red-600 text-sm px-2 capitalize transition-all duration-500 h-0 opacity-0 ${formik.touched["email"] && formik.errors["email"] && "opacity-100 h-full"}`}>
                            {formik.errors["email"]}
                        </p>
                    )}
                </div>
                <button
                    className="bg-primary transition-all duration-500 ease-out hover:bg-primary-hover rounded-xl p-1 disabled:bg-primary-disabled text-white w-[85%] py-3 m-auto"
                    disabled={!formik.isValid || !formik.dirty || isLoading || formik.values.email == email}
                    type="submit"
                >
                    {isLoading ? "Loading..." : " Change Email"}
                </button>
            </form>
        </div>
    );
}