import { Navigate } from "react-router-dom";
export default function PrivateRoutes({ children }) {
    const token = localStorage.getItem('userToken');
    if (!token) {
        return <Navigate to={'/landing'} replace />
    }
    return children;
}
