function Catched(){
    const users = [
        {
            "name":"test user",
            "img":"https://cdn.intra.42.fr/users/7e8c22c91bfd161efd60378589a7d59c/aelbouab.jpg",
        }
    ]
    return (
        <div className="w-[90%] h-full flex justify-center items-center">
            <div className="w-[70%] h-[80%]  flex justify-center pt-10">
                {users.map((user , index)  => 
                    <div key={index} className="w-[50%] h-32 bg-gray-100 shadow-md flex  items-center gap-4 pl-4">
                        <img className="w-[15%] rounded-[50%]" src={user.img} />
                        <h1 className="text-2xl "> {user.name}</h1>
                    </div>
                )},
            </div>
        </div>
    )
}
export default Catched;