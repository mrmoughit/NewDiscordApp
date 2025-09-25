import React, { useState } from 'react';
function News() {
    const array = [
        {
            "id":8,
            "name": "abechcha",
            "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
            "project_name": "libft",
            "date": "12:90",
            "status": "online"
        },
        {
            "id":9,
            "name": "abechcha",
            "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
            "project_name": "libft",
            "date": "12:90",
            "status": "f"
        },
           {
            "id": 19,
            "name": "abechcha",
            "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
            "project_name": "libft",
            "date": "12:90",
            "status": "online"
        },
        {
            "id":10,
            "name": "abechcha",
            "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
            "project_name": "libft",
            "date": "12:90",
            "status": "Ofline"
        },
        {
            "id":11,
            "name": "abechcha",
            "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
            "project_name": "libft",
            "date": "12:90",
            "status": "online"
        },
        {
            "id":12,
            "name": "abechcha",
            "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
            "project_name": "libft",
            "date": "12:90",
            "status": "f"
        }
    ];

    const defaultImage = "https://cdn.intra.42.fr/users/7e8c22c91bfd161efd60378589a7d59c/aelbouab.jpg";
    const [isHovered, setIsHovered] = useState(-1);
    return (
        <div className="w-[90%] mx-auto h-full flex flex-col lg:flex-row gap-4">
            
            <div className="w-full lg:w-1/2 h-full bg-gray-100 shadow-lg flex flex-col items-center pt-3 gap-4 overflow-auto max-h-screen">
            <div className="w-[90%] rounded-md bg-red-100 flex justify-center"><p className="text-xl">live actions</p></div>
                {array.map((card, index) => (
                    <div key={index} className="w-[90%] h-[14%] bg-white shadow-2xl rounded-md flex flex-col sm:flex-row p-4 gap-4">
                        <div className="flex justify-center items-center sm:w-1/3" onMouseEnter={() => setIsHovered(card.id)} onMouseLeave={() => setIsHovered(-1)}>
                            <img className="rounded-full w-28 h-28 object-cover transition-all duration-300 ease-in-out" src={isHovered === card.id ? card.img : defaultImage} alt={card.name}/>
                        </div>
                        <div className="sm:w-1/3 flex flex-col justify-center items-center gap-1 text-center">
                            <p className="text-3xl font-semibold blur-md hover:blur-none">{card.name}</p>
                            <p className="text-2xl text-gray-600">{card.project_name}</p>
                        </div>
                        <div className="sm:w-1/3 flex justify-end items-end sm:items-center text-sm text-gray-500">
                            <p className="text-xl">{card.date}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full lg:w-1/2 h-64 lg:h-full bg-gray-100 flex flex-col items-center pt-3 gap-4 overflow-auto max-h-screen">
              <div className="w-[90%] rounded-md bg-red-100 flex justify-center">
                <p className="text-xl">live actions</p>
              </div>
              {array.map((card, index) => (
                <div key={index} className="relative w-[90%] h-[14%] bg-white shadow-2xl rounded-md flex flex-col sm:flex-row p-4 gap-4">
                  <div className={`absolute top-0 right-0 w-24 h-8 overflow-hidden rounded-bl-md`}>
                    <div className={`relative left-8 -top-2 w-2 h-10 text-white font-bold text-xs flex items-center justify-center transform rotate-45
                      ${card.status === 'online' ? 'bg-green-600' : 'bg-red-600'}`}>
                      {card.status === 'online' ? '' : ''}
                    </div>
                  </div>                   

                  <div className="flex justify-center items-center sm:w-1/3 " onMouseEnter={() => setIsHovered(card.id)} onMouseLeave={() => setIsHovered(-1)}>
                   <img className="rounded-full w-28 h-w-28 object-cover transition-all duration-300 ease-in-out" src={isHovered === card.id ? card.img : defaultImage} alt={card.name}/>
                  </div>
                  <div className="sm:w-1/3 flex flex-col justify-center items-center gap-1 text-center">
                    <p className="text-3xl font-semibold blur-md hover:blur-none">{card.name}</p>
                    <p className="text-2xl text-gray-600">{card.project_name}</p>
                  </div>
                  <div className="sm:w-1/3 flex justify-end items-end sm:items-center text-sm text-gray-500">
                    <p className="text-xl">{card.date}</p>
                  </div>
                </div>

              ))}
            </div>
          
        </div>
    );
}

export default News;
