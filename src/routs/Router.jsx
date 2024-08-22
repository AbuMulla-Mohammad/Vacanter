import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/Login',
                element: <LoginScreen />
            },
            {
                path: '/Register',
                element: <RegisterScreen />
            }
        ]
    }
])