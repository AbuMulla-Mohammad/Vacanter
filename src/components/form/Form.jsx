import { useFormik } from "formik";
import { useEffect } from "react";

export default function Form({ fields, initialValues, onSubmit, validationSchema, buttonText, isLoading }) {
    const formik = useFormik({
        initialValues,
        onSubmit: (values, { resetForm }) => {
            onSubmit(values, resetForm);
        },
        validationSchema,
    });

    useEffect(() => {
        console.log(formik.errors);
    }, [formik.errors]);

    return (
        <div className="flex justify-center items-center w-full">
            <form onSubmit={(e) => {
                e.preventDefault();
                formik.handleSubmit();
            }} className="flex flex-col gap-3  justify-center w-[90%] ">
                {fields?.map((field, index) => (
                    <div key={index} className="flex flex-col gap-3 w-full">
                        <label className="px-2" htmlFor={field.name}>{field.label}</label>
                        {field.type === 'select' ? (
                            <select
                                className="px-3 py-2 rounded-xl border-2 border-[#eee] bg-[#eaebed] placeholder:text-[#333] placeholder:text-sm outline-none"
                                name={field.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values[field.name]}
                            >
                                <option value="" label={field.placeholder} />
                                {field.options.map((option, idx) => (
                                    <option key={idx} value={option} label={option} />
                                ))}
                            </select>
                        ) : (
                            <input
                                className="px-3 py-2 rounded-xl border-2 border-[#eee] bg-[#eaebed] placeholder:text-[#333] placeholder:text-sm"
                                name={field.name}
                                type={field.type}
                                placeholder={field.placeholder}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values[field.name]}
                            />
                        )}
                        {(
                            <p className={`text-red-600  text-sm px-2 capitalize transition-all duration-500 h-0 opacity-0  ${formik.touched[field.name] && formik.errors[field.name] && "opacity-100 h-full"}`}>{formik.errors[field.name]}</p>
                        )}
                    </div>
                ))}
                <button className="bg-primary transition-all duration-500 ease-out hover:bg-primary-hover rounded-xl p-1 disabled:bg-primary-disabled text-white w-[85%] py-3 m-auto" disabled={!formik.isValid || !formik.dirty || isLoading} type="submit">
                    {
                        isLoading ? "Loading..." : buttonText
                    }
                </button>
            </form>

        </div>
    );
}
