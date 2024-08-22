import { useState } from "react";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";

export default function AuthScreen() {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div className="AuthScreen flex justify-center items-center min-h-screen bg-green-50 ">
            <div className="container relative flex justify-center items-center w-[70%] rounded-3xl overflow-hidden shadow-[6px_11px_57px_-12px_rgba(0,0,0,0.75)] min-h-[500px]">
                <div className="Forms ">
                    <div className="absolute w-1/2 top-0 h-full transition-all ease-in-out duration-700 left-0">
                        <Login />
                    </div>
                    <div className="absolute w-1/2 top-0 h-full transition-all ease-in-out duration-700 left-0 bg-green-500">
                        <Register />
                    </div>
                </div>
                <div className="toggle-container absolute w-1/2  top-0 left-[50%] h-full overflow-hidden transition-all duration-700 ease-in-out z-50 bg-red-500 rounded-[150px_0_0_100px] ">
                    <div className="toggle h-full text-white relative left-[-100%] w-[200%] translate-x-0 transition-all duration-700 ease-in-out">
                        <div className="toggle-panel toggle-left absolute w-[50%] h-full translate-x-[-200%] flex justify-center  items-center flex-col p-[0_30px]">
                            <h2>welcome back</h2>
                            <p>Enter your personal inforamtion to use our systme</p>
                            <button>sign in</button>
                        </div>
                        <div className="toggle-panel toggle-right absolute w-[50%] h-full translate-x-0">
                            <h2>Hello friend!</h2>
                            <p>Register with your personal inforamtion to use our systme</p>
                            <button>sign up</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
