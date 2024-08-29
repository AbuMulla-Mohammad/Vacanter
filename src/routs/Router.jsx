import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import UserProfileScreen from "../screens/UserProfileScreen/UserProfileScreen";
import ApplicantsForTheJobPostScreen from "../screens/ApplicantsForTheJobPostScreen/ApplicantsForTheJobPostScreen";
import EmployerJobPostsScreen from "../screens/EmployerJobPostsScreen/EmployerJobPostsScreen";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <HomeScreen />
            },
            {
                path: '/Login',
                element: <LoginScreen />
            },
            {
                path: '/Register',
                element: <RegisterScreen />
            },
            {
                path: '/UserProfile',
                element: <UserProfileScreen />,
                children: [

                    {
                        path: 'jobPost',
                        element: <EmployerJobPostsScreen />,
                        children: [
                            {
                                path: ':id',
                                element: <ApplicantsForTheJobPostScreen />
                            }
                        ]
                    }
                ]
            }
        ]
    }
])