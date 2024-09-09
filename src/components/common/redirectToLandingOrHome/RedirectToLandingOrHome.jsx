import { Navigate } from "react-router-dom";

const RedirectToLandingOrHome = () => {
    const isLoggedIn = localStorage.getItem("userToken");

    if (isLoggedIn) {
        return <Navigate to="/home" replace />;
    } else {
        return <Navigate to="/landing" replace />;
    }
};

export default RedirectToLandingOrHome;
