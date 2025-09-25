{/* <div className="w-[90%] flex flex-col justify-around ">
    <div className="flex justify-center"><h1 className="text-2xl">WELCOME BACK ADMIN</h1></div>
    <div className="flex flwx-wrap w-full h-[30%] bg-slate-100 bg-blur-md shadow-md items-center justify-center gap-5 ">
        <div className="w-[17%] h-[40%] bg-gradient-to-r from-green-400 to-green-600 rounded-2xl shadow-lg p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <h1 className="text-white text-lg font-semibold">Profits</h1>
            <span className="text-white text-sm bg-green-700 bg-opacity-40 px-2 py-1 rounded-lg">
              +12%
            </span>
          </div>                   
          <p className="text-white text-3xl font-bold mt-2">1234$</p>                  
          <div className="flex items-center justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m-7-7l7 7-7 7" />
            </svg>
          </div>
        </div>
        <div className="w-[17%] h-[40%] bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl shadow-lg p-4 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <h1 className="text-white text-lg font-semibold">Delivered Orders</h1>
        <span className="text-white text-sm bg-blue-900 bg-opacity-40 px-2 py-1 rounded-lg">
          +8%
        </span>
      </div>               
      <p className="text-white text-3xl font-bold mt-2">245</p>            
      <div className="flex items-center justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7h18M3 12h18M3 17h18"
          />
        </svg>
      </div>
    </div>
    <div className="w-[17%] h-[40%] bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl shadow-lg p-4 flex flex-col justify-between">
    <div className="flex items-center justify-between">
      <h1 className="text-white text-lg font-semibold">Unconfirmed Orders</h1>
      <span className="text-yellow-900 bg-yellow-200 bg-opacity-70 px-2 py-1 rounded-lg text-sm font-medium">
        -3%
      </span>
    </div>
  
    <p className="text-white text-3xl font-bold mt-2">32</p>
  
    <div className="flex items-center justify-end">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="white"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 11c0-1.104-.896-2-2-2s-2 .896-2 2m8 0c0-1.104-.896-2-2-2s-2 .896-2 2m-7 8h14v-1a4 4 0 00-4-4H9a4 4 0 00-4 4v1z"
        />
      </svg>
    </div>
  </div>

  <div className="w-[17%] h-[40%] bg-gradient-to-r from-red-500 to-red-600 rounded-2xl shadow-lg p-4 flex flex-col justify-between">
  <div className="flex items-center justify-between">
    <h1 className="text-white text-lg font-semibold">Low Stock</h1>
    <span className="text-red-900 bg-red-200 bg-opacity-70 px-2 py-1 rounded-lg text-sm font-medium">
      20 pcs
    </span>
  </div>

  <p className="text-white text-3xl font-bold mt-2">⚠️ 20</p>

  <div className="flex items-center justify-end">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="white"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v2m0 4h.01M21 12c0 4.971-4.029 9-9 9s-9-4.029-9-9 4.029-9 9-9 9 4.029 9 9z"
        />
    </svg>
  </div>
</div>
</div>
</div> */}

import { MdDelete } from "react-icons/md";
import useUserStore from '../components/store.tsx';
import axios from "axios";
import { useEffect, useState } from "react";
import { FreeMode } from "swiper/modules";


function Profile(){
  const addFriends = useUserStore((state) => state.addFriends);
  const addFriend = useUserStore((state) => state.addFriend);
  const clearFriends = useUserStore((state) => state.clearFriends);
  
  const [user, setuser] = useState('');
  const [freinds1, Setfreinds1] = useState([]);
  const name = useUserStore((state) => state.user.name);
  const token = useUserStore((state) => state.user.token);
  const img = useUserStore((state) => state.user.img);
  



  const HandleAdd = async () => {
  if (!user.trim()) {
    console.log("Name is empty");
    return;
  }

  try {
    const response = await axios.post(
      `http://13.222.154.232:4000/add`,
      { name: user.trim() },
      {
        headers: {
          'Authorization': `${token}`, 
          'login': name,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log("Name added successfully");
    // addFriend({id:1 , user});
    Setfreinds1((prev) => [user.trim(),...prev]);
    setuser('');
  } catch (error) {
    if (error.response) {
      // Server responded with a status outside 2xx
      if (error.response.status === 400) {
        console.log("Name already exists");
      } else {
        console.log("Server error:", error.response.status);
      }
    } else {
      console.log("Error adding name:", error.message);
    }
  }
};




  const fetchFriend = async () => {
    
    if(!token|| !name) return;
    try {
      const response = await axios(`http://13.222.154.232:4000/get_enemies`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
          'login': `${name}`,
        },
      });
      Setfreinds1(response.data);
      // clearFriends();
      // addFriends(response.data);
      
      
    } catch (error) {
      console.error('Error fetching enemies:', error);
    }
  };


  const DeleteFriend = async (user, idx) => {
      try {
        const res = await axios.delete(`http://13.222.154.232:4000/delete`, 
          {
            params:{
              name:user,
              login:name
            },
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `${token}`,
            }
          
          });
          Setfreinds1((prev) => prev.filter((friend) => friend !== user));
          // toast.success('Name deleted successfully');  

    }
    catch (error) {
      // toast.error('Error deleting name:', error);
      console.error('Error deleting name:', error);
    }
    };
  
  useEffect(() => {
    fetchFriend();
  }, []);





  const friends = useUserStore((state) => state.friends);

    return (
        <div className="w-[90%]  h-full flex flex-col">
          <div className="h-[10%] w-full flex justify-center items-end text-2xl ">
            <h1>WELCOME BACK</h1>
            <p className="text-4xl ml-2"> {name}</p>
          </div>
          <div className="h-[20%] w-[100%] flex justify-center items-center text-2xl bg-gray-100 shadow-md gap-5">
            <div className="w-[20%] h-[60%] bg-green-500 shadow-lg flex flex-col items-center justify-around text-white ">
              <h1 className="text-2xl">Succes</h1>
              <p className="text-3xl">100</p>
            </div>
            <div className="w-[20%] h-[60%] bg-gray-500 shadow-lg flex flex-col items-center text-white justify-around"><h1 className="text-2xl">field</h1> 
              <p className="text-3xl">100</p>
            </div>
            <div className="w-[20%] h-[60%] bg-red-600 shadow-lg flex flex-col items-center text-white justify-around" > <h1 className="text-2xl">watting</h1>
                <p className="text-3xl">100</p>
            </div>
            <div className="w-[20%] h-[60%] bg-yellow-500 shadow-lg flex flex-col items-center text-white justify-around"><h1 className="text-2xl">total</h1>
                <p className="text-3xl">100</p>
            </div>
            
          </div>
            <div className="w-[100%] h-[70%]  flex justify-center items-center">
              <div className="w-[50%] h-[60%] bg-gray-100 flex flex-col shadow-md justify-around rounded-lg">
                <div className="h-[30%] w-full ">
                    <div className="h-[80%]  flex justify-center items-center bg-"><img className="h-[80%] rounded-[50%]" src={img}  /></div>
                    <div className=" flex justify-center items-center"><h1 className="text-3xl">{name}</h1></div>
                </div>
                <div className="w-full flex justify-center">
                    <div className=" w-[70%] h-20 flex items-center justify-between pl-3 pr-3 mt-4">
                        <input className=" h-[50%] w-[50%] outline-none p-3 rounded-md" type="text" placeholder="Enter a name" onKeyDown={(e)=>{ if(e.key == 'Enter') { HandleAdd(); }}}
                        value={user} onChange={(e) => setuser(e.target.value)}/>
                        <button onClick={HandleAdd}className="bg-blue-500 w-36 rounded-md h-[50%]" >Submit</button>
                        
                    </div>
                </div>
                <div className=" w-full h-[70%] flex flex-col overflow-scroll scrollbar-hide ">
                    {freinds1.map((object , index)=> (
                        <div key={index} className=" flex justify-center ">
                            <div  className=" flex justify-between pl-3 pr-3 mt-4  w-[70%] "><p className="text-xl ">{object}</p>
                                <MdDelete onClick={() => DeleteFriend(object , index )} color="red" size={25}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
    )}
export default Profile;