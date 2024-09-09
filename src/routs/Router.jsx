import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import UserProfileScreen from "../screens/UserProfileScreen/UserProfileScreen";
import ApplicantsForTheJobPostScreen from "../screens/ApplicantsForTheJobPostScreen/ApplicantsForTheJobPostScreen";
import EmployerJobPostsScreen from "../screens/EmployerJobPostsScreen/EmployerJobPostsScreen";
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";
import UserInfoScreen from "../screens/UserInfoScreen/UserInfoScreen";
import LandingPageScreen from "../screens/LandingPageScreen/LandingPageScreen";
import RedirectToLandingOrHome from "../components/common/redirectToLandingOrHome/RedirectToLandingOrHome";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <RedirectToLandingOrHome />
    },
    // Landing page
    {
        path: '/landing',
        element: <LandingPageScreen />
    },
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <LandingPageScreen />
            },
            {
                path: '/Home',
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
                        path: 'personlaInfo',
                        element: <UserInfoScreen />
                    },
                    {
                        path: 'jobPost',
                        children: [
                            {
                                path: '',
                                element: <EmployerJobPostsScreen />,
                            },
                            {
                                path: ':id',
                                element: <ApplicantsForTheJobPostScreen />
                            }
                        ]
                    },
                    {
                        path: 'settings',
                        element: <SettingsScreen />
                    },
                ]
            }
        ]
    },

])