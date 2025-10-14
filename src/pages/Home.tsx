import { IoIosLogOut } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import Profile from '../components/Profile';
import News from '../components/News';
import Chats from '../components/Chats';
import axios from 'axios';
import  { useEffect, useState } from "react";
import useUserStore from '../components/store.tsx';


import Bugs from '../components/Bugs.tsx'
import Catched from '../components/Catched.tsx'
import Dash from '../components/Dash.tsx'

function Dashboard() {
    const setUserData = useUserStore((state) => state.setUserData);
    const connect = useUserStore((state) => state.connect); 
    const token = useUserStore((state) => state.user.token); 
    const [activeTab, setActiveTab] = useState("profile");



    function handleLogout(){
        // console.log("cliked");
        setUserData({token: null});
        window.location.href = `${import.meta.env.VITE_API_URL}/login`
    }
    async function getUserData(token: string) {
        try {
            const response = await axios(`https://gzzkn4g642hvdwv4lwydxwzzkufeux34ntapibe4tjwiq27vap65hvid.onion:4000/user_info`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`,
                },
            });
            setUserData({ name: response.data.login, img: response.data.img });
        } catch (error) {
            window.location.href = `${import.meta.env.VITE_API_URL}/login`; 
        }
    }

    useEffect(() => {
        if (!token) {
            window.location.href = `${import.meta.env.VITE_API_URL}/login`; 
        } else {
            getUserData(token);

            connect();
        }
    }, [token, connect]); 

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
                    <button onClick={() => handleNavigation("Catched Users")} className="text-black bg-slate-100 bg-opacity-60 w-full h-7 rounded-md hover:bg-slate-200">Wanted</button>
                    <button onClick={() => handleNavigation("Bugs")} className="text-black bg-slate-100 bg-opacity-60 w-full h-7 rounded-md hover:bg-slate-200">Bugs</button>
                    <button onClick={() => handleNavigation("dash")} className="text-black bg-slate-100 bg-opacity-60 w-full h-7 rounded-md hover:bg-slate-200">Dash</button>
                </div>
                <div onClick={handleLogout} className="flex justify-center gap-2 items-center mb-4 h-7 bg-slate-100 bg-opacity-60">
                    <button  className="">Logout</button>
                    <IoIosLogOut size={20} color="red" />
                </div>
            </div>
            {activeTab === "profile" && <Profile />}
            {activeTab === "News" && <News />}
            {activeTab === "Chats" && <Chats />}
            {activeTab === "Catched Users" && <Catched />}
            {activeTab === "Bugs" && <Bugs />}
            {activeTab === "dash" && <Dash />}
        </div>
    );
}

export default Dashboard;
