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
import EmployerRoutes from "../ProtectedRoutes/EmployerRoutes";
import PublicRoutes from "../ProtectedRoutes/PublicRoutes";
import PrivateRoutes from "../ProtectedRoutes/PrivateRoutes";
import ApplicantRoutes from './../ProtectedRoutes/ApplicantRoutes';
import ApplicantJobApplicationsScreen from "../screens/ApplicantJobApplicationsScreen/ApplicantJobApplicationsScreen";
import PageNotFoundScreen from "../screens/PageNotFoundScreen/PageNotFoundScreen";
import ProfileSettingsScreen from "../screens/ProfileSettingsScreen/ProfileSettingsScreen";
import EmailAndContactInfoScreen from "../screens/EmailAndContactInfoScreen/EmailAndContactInfoScreen";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <RedirectToLandingOrHome />
    },
    {
        path: '/landing',
        element: <LandingPageScreen />
    },
    {
        element: <Root />,
        children: [
            {
                path: '/',
                element: <LandingPageScreen />
            },
            {
                path: '/Home',
                element:
                    <PrivateRoutes>
                        <HomeScreen />
                    </PrivateRoutes>
            },
            {
                path: '/Login',
                element:
                    <PublicRoutes>
                        <LoginScreen />
                    </PublicRoutes>
            },
            {
                path: '/Register',
                element:
                    <PublicRoutes>
                        <RegisterScreen />
                    </PublicRoutes>
            },
            {
                path: '/UserProfile',
                element:
                    <PrivateRoutes>
                        <UserProfileScreen />
                    </PrivateRoutes>,
                children: [
                    {
                        path: 'personalInfo',
                        element:
                            <PrivateRoutes>
                                <UserInfoScreen />
                            </PrivateRoutes>
                    },
                    {
                        path: 'jobPost',
                        children: [
                            {
                                path: '',
                                element:
                                    <PrivateRoutes>
                                        <EmployerRoutes>
                                            <EmployerJobPostsScreen />
                                        </EmployerRoutes>
                                    </PrivateRoutes>,
                            },
                            {
                                path: 'ApplicantsForTheJobPost/:id',
                                element:
                                    <PrivateRoutes>
                                        <EmployerRoutes>
                                            <ApplicantsForTheJobPostScreen />
                                        </EmployerRoutes>
                                    </PrivateRoutes>
                            }
                        ]
                    },
                    {
                        path: 'jobApplications',
                        children: [
                            {
                                path: '',
                                element:
                                    <PrivateRoutes>
                                        <ApplicantRoutes>
                                            <ApplicantJobApplicationsScreen />
                                        </ApplicantRoutes>
                                    </PrivateRoutes>,
                            },
                        ]
                    },
                    {
                        path: 'settings',
                        children: [
                            {
                                path: '',
                                element:
                                    <PrivateRoutes>
                                        <SettingsScreen />
                                    </PrivateRoutes>,
                            },
                            {
                                path: 'profileSettings',
                                element:
                                    <PrivateRoutes>
                                        <ProfileSettingsScreen />
                                    </PrivateRoutes>
                            },
                            {
                                path: 'emailAndContactInfo',
                                element:
                                    <PrivateRoutes>
                                        <EmailAndContactInfoScreen />
                                    </PrivateRoutes>
                            },
                        ]
                    },
                ]
            },
            {
                path: "*",
                element: <PageNotFoundScreen />
            },
        ]
    },

])