import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserProfile = () => {
    const { id } = useParams(); // Get user ID from URL
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const id = localStorage.getItem('id')
        const fetchUser = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/user/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log(res);
                
                setUser(res.data.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch user data");
                setLoading(false);
            }
        };
    
        fetchUser();
    }, [id]);
    

    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-gray-900 bg-opacity-80 backdrop-blur-lg shadow-xl rounded-2xl border border-gray-700">
    <h2 className="text-2xl font-bold text-white text-center mb-4 border-b border-gray-600 pb-2">
        User Profile
    </h2>

    <div className="space-y-3 text-base text-gray-300">
        <p><strong className="text-white">Name:</strong> {user.firstName}</p>
        <p><strong className="text-white">Email:</strong> {user.email}</p>
    </div>
</div>

    
    );
};

export default UserProfile;