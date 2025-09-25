import { useState } from "react";
function Login()
{
    const [flag , Setflag] = useState(false);

    function handleLogin(){
        Setflag(true);
        setTimeout(() => {
            Setflag(false);
    }, 2000);
    }
    return(
        <div className="w-[100%] h-[100vh] flex justify-center items-center ">
            <div className="w-[50%] h-[50%] bg-gray-100 shadow-2xl flex flex-col gap-3 rounded-2xl justify-center items-center">
                <button className="w-[40%] h-[10%] bg-slate-600 text-white rounded-md text-xl ">Login With 42 Intra</button>
                <button className="w-[40%] h-[10%] bg-slate-600 text-white rounded-md text-xl " onClick={handleLogin}>Login With National Id Card </button>
                {flag && <div className="w-full flex items-center justify-center"><p className="text-2xl text-red-400">the method under delopment try again after a year for example</p></div>}
            </div>
        </div>
    )
}
export default Login;