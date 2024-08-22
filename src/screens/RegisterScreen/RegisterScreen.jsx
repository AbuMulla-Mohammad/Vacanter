import Register from "../../pages/register/Register";

export default function RegisterScreen() {
    return (
        <div className="min-h-screen relative flex justify-center items-center overflow-hidden ">
            <img src="/public/images/Ellipse 14.png" className="absolute w-[35%] left-0 bottom-[-20%] " alt="" />
            <img src="/public/images/Ellipse 15.png" className="absolute w-[40%] right-0 bottom-[-50%]" alt="" />
            <img src="/public/images/Ellipse 16.png" className="absolute w-[30%] opacity-30  top-[-20%]" alt="" />
            <img src="/public/images/Ellipse 18.png" className="absolute w-[0%] left-0 top-[-10%] " alt="" />
            {/* <img src="/public/images/Ellipse 19.png" className="absolute w-[10%] left-0" alt="" /> */}
            <Register />
        </div>
    )
}
