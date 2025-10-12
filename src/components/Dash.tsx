import { useState } from "react"

function Dash() {
  const [show, setShow] = useState(1);

  return (
    <div className="flex w-[90%] h-full ">

      {show ? <div className="flex flex-col items-center justify-start pt-10 gap-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 self-center justify-center bg-black w-[600px] h-[800px] rounded-2xl">
        <div className="w-[100px] h-[100px] bg-white rounded-full" onClick={() => setShow(0)}></div>
        <p className="text-white">user name</p>
        <div className="w-[400px] h-[150px] flex items-center justify-evenly">
          <p className="text-white">chat</p>
          <button className="w-[80px] h-[30px] bg-white rounded-sm">access</button>
          <button className="w-[80px] h-[30px] bg-white rounded-sm">readonly</button>
          <button className="w-[80px] h-[30px] bg-white rounded-sm">online</button>
          <button className="w-[80px] h-[30px] bg-white rounded-sm">offline</button>
        </div>
        <div className="w-[400px] h-[10px] flex items-center justify-evenly">
          <p className="text-white">news</p>
          <button className="w-[80px] h-[30px] bg-white rounded-sm">access</button>
        </div>
        <div className="w-[400px] h-[10px] flex items-center justify-evenly">
          <p className="text-white">enemies</p>
          <p className="text-white">user1</p>
        </div>
        <div className="w-[400px] h-[10px] flex items-center justify-evenly">
          <button className="text-white w-[100px] h-[30px] bg-blue-600 rounded-sm ">add badge</button>
          <input type="text" className="w-[100px] h-[30px] bg-white rounded-sm pl-2" placeholder="type"/>
          <input type="text" className="w-[100px] h-[30px] bg-white rounded-sm pl-2" placeholder="message"/>
        </div>
      </div> : ""}
      <div className='w-[10%] h-[100vh] bg-stone-900'>

      </div>
      <div className='w-[90%] h-[100vh] flex items-center justify-evenly'>
        <div className="w-[66%] h-[95%] rounded-2xl flex flex-col pl-10 pt-10 gap-10">
          <div className="w-[1400px] h-[100px] bg-gray-100 shadow-md rounded-2xl flex items-center pl-10 gap-10">
            <div className="w-[70px] h-[70px] rounded-full bg-stone-900" onClick={() => setShow(1)}></div>
            <p>user name</p>
          </div>
          <div className="w-[1400px] h-[100px] bg-gray-100 shadow-md rounded-2xl flex items-center pl-10 gap-10">
            <div className="w-[70px] h-[70px] rounded-full bg-stone-900" onClick={() => setShow(1)}></div>
            <p>user name</p>
          </div>
          <div className="w-[1400px] h-[100px] bg-gray-100 shadow-md rounded-2xl flex items-center pl-10 gap-10">
            <div className="w-[70px] h-[70px] rounded-full bg-stone-900" onClick={() => setShow(1)}></div>
            <p>user name</p>
          </div>
          <div className="w-[1400px] h-[100px] bg-gray-100 shadow-md rounded-2xl flex items-center pl-10 gap-10">
            <div className="w-[70px] h-[70px] rounded-full bg-stone-900" onClick={() => setShow(1)}></div>
            <p>user name</p>
          </div>
        </div>
        <div className="w-[26%] h-[95%] bg-stone-900 rounded-2xl flex flex-col items-center justify-center gap-10">
          <input type="text" className="w-[300px] h-[50px] bg-white rounded-2xl text-stone-900 pl-5" placeholder="user name"/>
          <button className="w-[150px] h-[50px] bg-white rounded-2xl text-stone-900 font-bold">add</button>
        </div>
      </div>
    </div>
  )
}

export default Dash