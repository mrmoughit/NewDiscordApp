import { MdDelete } from "react-icons/md";
import useUserStore from "../components/store.tsx";
import { useEffect, useState } from "react";
import axios, { type AxiosResponse, type AxiosError } from "axios";


function Profile() {


  const name = useUserStore((state) => state.user.name);
  const token = useUserStore((state) => state.user.token);
  const img = useUserStore((state) => state.user.img);

  const [user, setUser] = useState<string>(""); 
  const [friends1, setFriends1] = useState<string[]>([]);


interface ApiError<T = any> extends AxiosError<T> {
  response?: AxiosResponse<T>; 
}


  const handleAdd = async (): Promise<void> => {
    if (!user.trim()) {
      console.log("Name is empty");
      return;
    }

    try {
      await axios.post(
        `https://gzzkn4g642hvdwv4lwydxwzzkufeux34ntapibe4tjwiq27vap65hvid.onion:4000/add`,
        { name: user.trim() },
        {
          headers: {
            Authorization: `${token}`,
            login: name,
            "Content-Type": "application/json",
          },
        }
      );

      // console.log("Name added successfully");
      setFriends1((prev) => [user.trim(), ...prev]);
      setUser("");
    } catch (error) {
      const err = error as ApiError;
      if (err.response) {
        if (err.response.status === 400) {
          console.log("Name already exists");
        } else {
          console.log("Server error:", err.response.status);
        }
      } else {
        console.log("Error adding name:", err.message);
      }
    }
  };

  const fetchFriends = async (): Promise<void> => {
    if (!token || !name) return;
    try {
      const response = await axios.get<string[]>(
        `https://gzzkn4g642hvdwv4lwydxwzzkufeux34ntapibe4tjwiq27vap65hvid.onion:4000/api/get_enemies`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
            login: `${name}`,
          },
        }
      );
      setFriends1(response.data);
    } catch (error) {
      console.error("Error fetching enemies:", error);
    }
  };

  const deleteFriend = async (friendName: string, ): Promise<void> => {
    try {
      await axios.delete(`https://gzzkn4g642hvdwv4lwydxwzzkufeux34ntapibe4tjwiq27vap65hvid.onion:4000/api/delete`, {
        params: {
          name: friendName,
          login: name,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      });
      setFriends1((prev) => prev.filter((friend) => friend !== friendName));
    } catch (error) {
      console.error("Error deleting name:", error);
    }
  };

  useEffect(() => {
    fetchFriends();
  }, []);


  return (
    <div className="w-[90%] h-full flex flex-col">
      <div className="h-[10%] w-full flex justify-center items-end text-2xl">
        <h1>WELCOME BACK</h1>
        <p className="text-4xl ml-2">{name}</p>
      </div>

      <div className="h-[20%] w-full flex justify-center items-center text-2xl bg-gray-100 shadow-md gap-5">
        <div className="w-[20%] h-[60%] bg-green-500 shadow-lg flex flex-col items-center justify-around text-white">
          <h1 className="text-2xl">Success</h1>
          <p className="text-3xl">100</p>
        </div>
        <div className="w-[20%] h-[60%] bg-gray-500 shadow-lg flex flex-col items-center text-white justify-around">
          <h1 className="text-2xl">Failed</h1>
          <p className="text-3xl">100</p>
        </div>
        <div className="w-[20%] h-[60%] bg-red-600 shadow-lg flex flex-col items-center text-white justify-around">
          <h1 className="text-2xl">Waiting</h1>
          <p className="text-3xl">100</p>
        </div>
        <div className="w-[20%] h-[60%] bg-yellow-500 shadow-lg flex flex-col items-center text-white justify-around">
          <h1 className="text-2xl">Total</h1>
          <p className="text-3xl">100</p>
        </div>
      </div>


      <div className="w-full h-[70%] flex justify-center items-center">
        <div className="w-[50%] h-[60%] bg-gray-100 flex flex-col shadow-md justify-around rounded-lg">
          <div className="h-[30%] w-full">
            <div className="h-[80%] flex justify-center items-center">

              <img className="h-[80%] rounded-[50%]" src={img as string} />

            </div>
            <div className="flex justify-center items-center">
              <h1 className="text-3xl">{name}</h1>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div className="w-[70%] h-20 flex items-center justify-between pl-3 pr-3 mt-4">
              <input
                className="h-[50%] w-[50%] outline-none p-3 rounded-md"
                type="text"
                placeholder="Enter a name"
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleAdd();
                }}
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              <button
                onClick={handleAdd}
                className="bg-blue-500 w-36 rounded-md h-[50%]"
              >
                Submit
              </button>
            </div>
          </div>

          <div className="w-full h-[70%] flex flex-col overflow-scroll scrollbar-hide">
            {friends1.map((friend, index) => (
              <div key={index} className="flex justify-center">
                <div className="flex justify-between pl-3 pr-3 mt-4 w-[70%]">
                  <p className="text-xl blur-md hover:blur-none">{friend}</p>
                  <MdDelete
                    onClick={() => deleteFriend(friend)}
                    color="red"
                    size={25}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
