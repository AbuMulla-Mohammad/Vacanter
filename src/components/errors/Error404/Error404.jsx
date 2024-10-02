import { Link } from "react-router-dom";

export default function Error404() {
    return (
        <div className="  w-full h-full flex justify-center items-center bg-white rounded-xl flex-col gap-3">
            <p className="text-red-500 text-3xl">Error 404 Page Not Found</p>
            <Link to="" className="flex justify-center items-center px-[12px] py-[8px] bg-primary rounded-md text-white font-semibold  border-2 border-primary transition-all duration-500 hover:bg-primary-light hover:text-primary ">Back To Home Page?</Link>
        </div>
    )
}
