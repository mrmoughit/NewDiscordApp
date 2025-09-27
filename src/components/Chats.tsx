import { IoSend } from "react-icons/io5";
import useUserStore from '../components/store';
import { useEffect, useState } from "react";
import { type KeyboardEvent } from "react";
import axios, { type AxiosResponse } from "axios";


interface Message {
  message: string;
  sender: string;
  sender_image: string;
}

interface User {
  login: string;
  img: string;
  online: boolean;
}

function Chats() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, Setinput] = useState<string>('');
  const [users, SetUsers] = useState<User[]>([]);

  const name: any = useUserStore((state) => state.user.name);
  const token: any = useUserStore((state) => state.user.token);
  const img: any = useUserStore((state) => state.user.img);
  const socket = useUserStore((state) => state.socket);

  const HandleSend = async () => {
    if (!input.trim()) return;

    await axios.post("http://13.222.154.232:4000/api/send-message", {
      user: name,
      message: input.trim(),
      img,
      token,
    });

    setMessages((prev) => [
      ...prev,
      {
        message: input.trim(),
        sender: name,
        sender_image: img,
      },
    ]);
    Setinput('');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<Message[]> = await axios.get(
          "http://13.222.154.232:4000/api/Conversation",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
              login: name,
            },
          }
        );
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [token, name]);

  useEffect(() => {
    const GetUsers = async () => {
      try {
        const response: AxiosResponse<User[]> = await axios.get(
          "http://13.222.154.232:4000/api/GetUsers",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
              login: name,
            },
          }
        );
        SetUsers(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    GetUsers();
  }, [token, name]);

  useEffect(() => {
    if (!socket) return;

    socket.onmessage = (event: MessageEvent) => {
      const { type, data }: { type: string; data: Message } = JSON.parse(event.data);
      console.log(type, data);
      if (type === "message") {
        setMessages((prev) => [...prev, data]);
      }
    };
  }, [socket]);

  const access = true;

  useEffect(() => {
    const chatContainer = document.querySelector<HTMLDivElement>('.chat-body');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="w-[90%] h-full">
      {!access && (
        <div className="flex justify-center items-center w-full h-full bg-gray-50">
          <div className="w-[90%] max-w-md p-8 bg-white rounded-lg shadow-lg text-center">
            <div className="text-9xl mb-6 select-none">🚫</div>
            <h1 className="text-5xl font-extrabold mb-4 text-red-600">401</h1>
            <h2 className="text-2xl font-semibold mb-2">Unauthorized</h2>
            <p className="text-gray-600 mb-6">
              Sorry, you don’t have permission to access this page.
            </p>
            <button
              onClick={() => (window.location.href = '/')}
              className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              Go to Home
            </button>
          </div>
        </div>
      )}
      {access && (
        <div className="w-full h-full flex justify-end items-center">
          <div className="w-[79%] h-[99%] shadow-md bg-gray-100 flex flex-col justify-between">
            <div className="chat-body w-full h-[95%] flex flex-col overflow-y-scroll scrollbar-hide">
              {messages.map((message, index) => {
                const isCurrentUser = message.sender === name;

                return (
                  <div
                    key={index}
                    className={`flex items-start p-4 ${
                      isCurrentUser ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {!isCurrentUser && (
                      <img
                        src={message.sender_image}
                        alt={message.sender}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                    )}
                    <div
                      className={`flex flex-col max-w-[40%] p-3 rounded-lg ${
                        isCurrentUser
                          ? 'bg-blue-500 text-white items-end'
                          : 'bg-gray-200 text-gray-900 items-start'
                      }`}
                    >
                      {!isCurrentUser && (
                        <span className="text-sm font-semibold mb-1">{message.sender}</span>
                      )}
                      <p className="max-w-[100%] break-words">{message.message}</p>
                    </div>
                    {isCurrentUser && (
                      <img
                        src={message.sender_image}
                        alt={message.sender}
                        className="w-12 h-12 rounded-full object-cover ml-4"
                      />
                    )}
                  </div>
                );
              })}
            </div>
            <div className="w-full h-[5%] flex items-center justify-around">
              <input
                className="h-[80%] w-[90%] outline-none p-3 rounded-2xl"
                type="text"
                placeholder="Type "
                value={input}
                onChange={(e) => Setinput(e.target.value)}
                onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                  if (e.key === 'Enter') HandleSend();
                }}
              />
              <button>
                <IoSend onClick={HandleSend} size={40} />
              </button>
            </div>
          </div>
          <div className="w-[20%] h-full flex flex-col justify-around items-center">
            <div className="w-[90%] h-[49%] bg-gray-100 shadow-md flex flex-col items-center overflow-y-scroll scrollbar-hide rounded-md gap-2">
              {users
                .filter((user) => user.online)
                .map((user, index) => (
                  <div key={index} className="w-[90%] h-[10%] flex items-center justify-around">
                    <img
                      src={user.img}
                      alt={user.login}
                      className="w-12 h-12 rounded-full border-green-400 border-solid border-4"
                    />
                    <span className="w-[40%]">{user.login}</span>
                  </div>
                ))}
            </div>

            <div className="w-[90%] h-[49%] bg-gray-100 shadow-md flex flex-col overflow-y-scroll scrollbar-hide rounded-md gap-2">
              {users
                .filter((user) => !user.online)
                .map((user, index) => (
                  <div key={index} className="w-[90%] h-[10%] flex items-center justify-around">
                    <img
                      src={user.img}
                      alt={user.login}
                      className="w-12 h-12 rounded-full border-red-500 border-solid border-4"
                    />
                    <span className="w-[40%]">{user.login}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chats;
