import { IoIosLogOut } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import Profile from '../components/Profile';
import News from '../components/News';
import Chats from '../components/Chats';
import axios from 'axios';
import  { useEffect, useState } from "react";
import useUserStore from '../components/store.tsx';

function Dashboard() {
    const setUserData = useUserStore((state) => state.setUserData);
    const connect = useUserStore((state) => state.connect); // Connect function from your store
    const token = useUserStore((state) => state.user.token); // Get token from store
    const [activeTab, setActiveTab] = useState("profile");

    // Fetch user data using the token
    async function getUserData(token: string) {
        try {
            const response = await axios(`http://13.222.154.232:4000/user_info`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`,
                },
            });
            setUserData({ name: response.data.login, img: response.data.img });
        } catch (error) {
            window.location.href = `http://localhost:5173/login`; // Redirect if error
        }
    }

    useEffect(() => {
        if (!token) {
            window.location.href = `http://localhost:5173/login`; // Redirect if no token
        } else {
            // If token exists, fetch user data
            getUserData(token);

            // Connect to WebSocket after user data is fetched
            connect();
        }
    }, [token, connect]); // Depend on token and connect to rerun the effect when token changes

    function handleNavigation(tab: string) {
        setActiveTab(tab);
    }

    return (
        <div className="w-full h-[100vh] flex">
            <div className="bg-blue-300 bg-blur-md w-[10%] flex flex-col justify-between pt-4 pl-4 pr-4 bg-opacity-60">
                <div className="flex flex-col gap-3 items-start">
                    <div className="flex justify-center w-full"><RxDashboard size={40} /></div>
                    <button onClick={() => handleNavigation("profile")} className="text-black bg-slate-100 bg-opacity-60 w-full h-7 rounded-md hover:bg-slate-200">profile</button>
                    <button onClick={() => handleNavigation("Chats")} className="text-black bg-slate-100 bg-opacity-60 w-full h-7 rounded-md hover:bg-slate-200">Chat</button>
                    <button onClick={() => handleNavigation("News")} className="text-black bg-slate-100 bg-opacity-60 w-full h-7 rounded-md hover:bg-slate-200">News</button>
                </div>
                <div className="flex justify-center gap-2 items-center mb-4 h-7 bg-slate-100 bg-opacity-60">
                    <button className="">Logout</button>
                    <IoIosLogOut size={20} color="red" />
                </div>
            </div>
            {activeTab === "profile" && <Profile />}
            {activeTab === "News" && <News />}
            {activeTab === "Chats" && <Chats />}
        </div>
    );
}

export default Dashboard;
