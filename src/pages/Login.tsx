function Login()
{
    return(
        <div className="w-[100%] h-[100vh] flex justify-center items-center ">
            <div className="w-[50%] h-[50%] bg-gray-100 shadow-2xl flex flex-col gap-3 rounded-2xl justify-center items-center">
                <button className="w-[40%] h-[10%] bg-slate-600 text-white rounded-md text-xl ">Login With 42 Intra</button>
                <button className="w-[40%] h-[10%] bg-slate-600 text-white rounded-md text-xl ">Login With National Id Card </button>
            </div>
        </div>
    )
}
export default Login;