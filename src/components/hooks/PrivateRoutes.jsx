import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AdminDashboard from "../../admin/AdminD";

const useAuth = () => {
    const [authState, setAuthState] = useState({ isLoggedin: false, role: "" });
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const id = localStorage.getItem("id");
      const role = localStorage.getItem("role");
  
      if (id) {
        setAuthState({ isLoggedin: true, role });
      }
      setLoading(false);
    }, []);
  
    return { ...authState, loading };
  };
  
  const PrivateRoutes = () => {
    const auth = useAuth();
  
    if (auth.loading) {
      return <h1>Loading...</h1>; // Show loading until auth is verified
    }
  
    if (!auth.isLoggedin) {
      return <Navigate to="/login" replace />; // Redirect to login if not authenticated
    }
  
    if (auth.role === "admin") {
      return <AdminDashboard />; // Render admin dashboard
    }
  
    return <Outlet />; // Render user content if role is "user"
  };
  
    


export default PrivateRoutes;