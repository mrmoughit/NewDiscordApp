

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
      const response = await axios(`http://13.222.154.232:4000/api/get_enemies`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
          'login': `${name}`,
        },
      });
      Setfreinds1(response.data);
      
    } catch (error) {
      console.error('Error fetching enemies:', error);
    }
  };


  const DeleteFriend = async (user, idx) => {
      try {
        const res = await axios.delete(`http://13.222.154.232:4000/api/delete`, 
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

    }
    catch (error) {
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