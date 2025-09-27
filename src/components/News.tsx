import React, { useState, useEffect } from 'react';
import useUserStore from '../components/store.tsx';

function News() {

    const [array , Setarray] = useState([]);
    const socket = useUserStore((state) => state.socket);

    useEffect(() => {
       if (!socket) return;

       socket.onmessage = (event: any) => {
         const { type, data } = JSON.parse(event.data);
         if (type === "data") {
           Setarray(data);
         }
       };
    }, [socket]);

    const defaultImage = "https://cdn.intra.42.fr/users/7e8c22c91bfd161efd60378589a7d59c/aelbouab.jpg";
    const [isHovered, setIsHovered] = useState(null);

    return (
        <div className="w-[90%] mx-auto h-full flex flex-col lg:flex-row gap-4">

            {/* Left column */}
            <div className="w-full lg:w-1/2 h-full bg-gray-100 shadow-lg flex flex-col items-center pt-3 gap-4 overflow-auto max-h-screen">
                <div className="w-[90%] rounded-md bg-red-100 flex justify-center">
                    <p className="text-xl">live actions</p>
                </div>
                {array.map((card, index) => (
                    card.status === "waiting_for_correction" && (
                        <a
                            key={index}
                            href={card.intra_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-[90%] h-[14%] bg-white shadow-2xl rounded-md flex flex-col sm:flex-row p-4 gap-4"
                        >
                            <div className="flex justify-center items-center sm:w-1/3" 
                                 onMouseEnter={() => setIsHovered(card.login)} 
                                 onMouseLeave={() => setIsHovered('')}>
                                <img 
                                    className="rounded-full w-28 h-28 object-cover transition-all duration-300 ease-in-out" 
                                    src={isHovered === card.login ? card.img : defaultImage} 
                                    alt={card.login} 
                                />
                            </div>
                            <div className="sm:w-1/3 flex flex-col justify-center items-center gap-1 text-center">
                                <p className="text-3xl font-semibold blur-md hover:blur-none">{card.login}</p>
                                <p className="text-2xl text-gray-600">{card.project}</p>
                            </div>
                            <div className="sm:w-1/3 flex justify-end items-end sm:items-center text-sm text-gray-500">
                                <p className="text-xl">{card.created_at}</p>
                            </div>
                        </a>
                    )
                ))}
            </div>

            {/* Right column */}
            <div className="w-full lg:w-1/2 h-64 lg:h-full bg-gray-100 flex flex-col items-center pt-3 gap-4 overflow-auto max-h-screen">
                <div className="w-[90%] rounded-md bg-red-100 flex justify-center">
                    <p className="text-xl">live actions</p>
                </div>
                {array.map((card, index) => (
                    card.status !== "waiting_for_correction" && (
                        <a
                            key={index}
                            href={card.intra_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative w-[90%] h-[14%] bg-white shadow-2xl rounded-md flex flex-col sm:flex-row p-4 gap-4"
                        >
                            <div className="absolute top-0 right-0 w-24 h-8 overflow-hidden rounded-bl-md">
                                <div
                                    className={`relative left-8 -top-2 w-2 h-10 text-white font-bold text-xs flex items-center justify-center transform rotate-45
                                        ${card.final_mark >= 80 ? 'bg-green-600' : 'bg-red-600'}`}
                                >
                                </div>
                            </div>
                            <div className="flex justify-center items-center sm:w-1/3"
                                 onMouseEnter={() => setIsHovered(card.login)}
                                 onMouseLeave={() => setIsHovered('')}>
                                <img
                                    className="rounded-full w-28 h-28 object-cover transition-all duration-300 ease-in-out"
                                    src={isHovered === card.login ? card.img : defaultImage}
                                    alt={card.login}
                                />
                            </div>
                            <div className="sm:w-1/3 flex flex-col justify-center items-center gap-1 text-center">
                                <p className="text-3xl font-semibold blur-md hover:blur-none">{card.login}</p>
                                <p className="text-2xl text-gray-600">{card.project}</p>
                            </div>
                            <div className="sm:w-1/3 flex justify-end items-end sm:items-center text-sm text-gray-500">
                                <p className="text-xl">{card.created_at}</p>
                            </div>
                        </a>
                    )
                ))}
            </div>
        </div>
    );
}

export default News;
