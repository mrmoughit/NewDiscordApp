
import { IoSend } from "react-icons/io5";
import useUserStore from '../components/store.tsx';
import { useEffect } from "react";



function Chats()
{
    const user = "abechcha";


    const users = [
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "online"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "online"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "offline"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "offline"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "offline"
      },
            {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "online"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "online"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "offline"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "offline"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "offline"
      },
            {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "online"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "online"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "offline"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "offline"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "offline"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "online"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "offline"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "offline"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "offline"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "online"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "offline"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "offline"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "offline"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "online"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "offline"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "offline"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "offline"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "online"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "offline"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "offline"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "offline"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "online"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "offline"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "offline"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "offline"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "online"
      },,
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "online"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "offline"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "offline"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "offline"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "online"
      },,
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "online"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "offline"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "offline"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "offline"
      },
      {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "status": "online"
      },
    ];



    const chat = [
    {
        "name": "user1",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "message":"testccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddderfvggggggghjttttt"
    },
    {
        "name": "user1",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "message":"testccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddderfvggggggghjttttt"
    },
    {
        "name": "user1",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "message":"testccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddderfvggggggghjttttt"
    },
    {
        "name": "user1",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "message":"testccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddderfvggggggghjttttt"
    },
    {
        "name": "abechcha",
        "img": "https://cdn.intra.42.fr/users/9ae5b3303aaceb68d7a6e580c60545a4/yzoullik.jpg",
        "message":"testccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddderfvggggggghjttttt"
    },
      
];


    const name = useUserStore((state) => state.user.name);
    const socket = useUserStore((state) => state.socket);

    useEffect(() => {
       if (!socket) return;

    socket.onmessage = (event: any) => {
      console.log("here");
      const { type, data } = JSON.parse(event.data);
      console.log(type);
      if (type === "message") {
        console.log(data);
      }
    };
  }, [socket]);

    const access = true;

    return (

        <div className="w-[90%] h-full">
            {access === false && 
                <div className="flex justify-center items-center w-full h-full bg-gray-50">
                  <div className="w-[90%] max-w-md p-8 bg-white rounded-lg shadow-lg text-center">
                    <div className="text-9xl mb-6 select-none">🚫</div> {/* emoji as icon */}
                    <h1 className="text-5xl font-extrabold mb-4 text-red-600">401</h1>
                    <h2 className="text-2xl font-semibold mb-2">Unauthorized</h2>
                    <p className="text-gray-600 mb-6">
                      Sorry, you don’t have permission to access this page.
                    </p>
                    <button 
                      onClick={() => window.location.href = '/'} 
                      className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                    >
                      Go to Home
                    </button>
                  </div>
                </div>
            }
            {access === true && 
                <div className="w-full h-full flex justify-end items-center">
                    <div className="w-[20%] h-full  flex flex-col justify-around items-center">

                        <div className="w-[90%] h-[49%]  bg-gray-100 shadow-md flex flex-col items-center overflow-y-scroll scrollbar-hide rounded-md gap-2">
                          {users
                            .filter(user => user.status === 'online')
                            .map((user, index) => (
                              <div key={index} className="w-[90%] h-[10%]  flex items-center justify-around">
                                <img src={user.img} alt={user.name} className="w-12 h-12 rounded-full border-green-400 border-solid border-4" />
                                <span>{user.name}</span>
                              </div>
                            ))}
                        </div>
                          
                        <div className="w-[90%] h-[49%]  bg-gray-100 shadow-md flex flex-col overflow-y-scroll scrollbar-hide rounded-md gap-2">
                          {users
                            .filter(user => user.status === 'offline')
                            .map((user, index) => (
                              <div key={index} className="w-[90%] h-[10%]   flex items-center justify-around">
                                <img src={user.img} alt={user.name} className="w-12 h-12 rounded-full border-red-500 border-solid border-4" />
                                <span>{user.name}</span>
                              </div>
                            ))}
                        </div>

                      </div>
                    <div className="w-[80%] h-[99%] shadow-md bg-gray-100 flex flex-col justify-between">
                        <div className="w-full h-[95%] flex flex-col">
                        {chat.map((message, index) => {
                          const isCurrentUser = message.name === user;                      

                          return (
                            <div
                              key={index}
                              className={`flex items-start p-4 ${isCurrentUser ? 'justify-end' : 'justify-start'}`}
                            >
                              {!isCurrentUser && (
                                <img
                                  src={message.img}
                                  alt={message.name}
                                  className="w-12 h-12 rounded-full object-cover mr-4"
                                />
                              )}                        

                              <div
                                className={`flex flex-col max-w-[40%] p-3 rounded-lg 
                                  ${isCurrentUser ? 'bg-blue-500 text-white items-end' : 'bg-gray-200 text-gray-900 items-start'}`}
                              >
                                {!isCurrentUser && (
                                  <span className="text-sm font-semibold mb-1">{message.name}</span>
                                )}
                                <p className="max-w-[100%] break-words">{message.message}</p>
                              </div>                        

                              {isCurrentUser && (
                                <img
                                  src={message.img}
                                  alt={message.name}
                                  className="w-12 h-12 rounded-full object-cover ml-4"
                                />
                              )}
                            </div>
                          );
                        })}

                        </div>
                        <div className="w-full h-[5%]  flex items-center justify-around">
                            <input className=" h-[80%] w-[90%] outline-none p-3 rounded-2xl" type="text" placeholder="Type " />
                            <button className=""><IoSend size={40}/></button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
export default Chats;