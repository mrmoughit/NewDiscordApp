import { IoIosLogOut } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";

import React, { useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const dataSalles = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May" , "Juin" , "jui" , "Aot" , "Sep" ,"Oct" ,  "Nov" , "Dec"],
  datasets: [
    {
      label: "Number of Sales",
      data: [40, 30, 50, 45, 60 , 70 , 50 ,30 ,20 ,10 ,2 ,19 , 90],
      backgroundColor: "rgba(75, 192, 192, 0.6)",
    },
  ],
};


const dataMoney = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May" , "Juin" , "jui" , "Aot" , "Sep" ,"Oct" ,  "Nov" , "Dec"],
  datasets: [
    {
      label: "Number of Sales",
      data: [40, 30, 50, 45, 60 , 70 , 50 ,30 ,20 ,10 ,0 ,0 , 0],
      backgroundColor: "rgba(75, 192, 192, 0.6)",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Monthly Sales Count" },
  },
};

interface SalesBarChartProps {
  mode: "money" | "salles";
}

function SalesBarChart({ mode }: SalesBarChartProps) {
  return <Bar data={mode === "salles" ? dataSalles : dataMoney} options={options} />;
}


function Dashboard(){

const [activeTab, setActiveTab] = useState("Overview");

function handleNavigation(tab: string) {
  setActiveTab(tab);
}

return(
    
    <div className=" w-full h-[100vh] flex " >
        <div className="bg-blue-300 bg-blur-md w-[10%] flex flex-col justify-between pt-4 pl-4 pr-4 bg-opacity-60">
            <div className="flex flex-col gap-3  items-start ">
                <div className="flex justify-center w-full"><RxDashboard size={40}/></div>
                <button onClick={()=> handleNavigation("Overview")} className="text-black bg-slate-100 bg-opacity-60 w-full h-7 rounded-md hover:bg-slate-200">Overview </button>
                <button onClick={()=> handleNavigation("Orders")} className="text-black bg-slate-100 bg-opacity-60 w-full h-7 rounded-md hover:bg-slate-200">Orders </button>
                <button onClick={()=> handleNavigation("Orders")} className="text-black bg-slate-100 bg-opacity-60 w-full h-7 rounded-md hover:bg-slate-200">Hero </button>
                <button onClick={()=> handleNavigation("Orders")} className="text-black bg-slate-100 bg-opacity-60 w-full h-7 rounded-md hover:bg-slate-200">Categories </button>
                <button onClick={()=> handleNavigation("Orders")} className="text-black bg-slate-100 bg-opacity-60 w-full h-7 rounded-md hover:bg-slate-200">Products </button>
                <button onClick={()=> handleNavigation("Orders")} className="text-black bg-slate-100 bg-opacity-60 w-full h-7 rounded-md hover:bg-slate-200">Promotion </button>
                <button onClick={()=> handleNavigation("Orders")} className="text-black bg-slate-100 bg-opacity-60 w-full h-7 rounded-md hover:bg-slate-200">Coponat </button>
                <button onClick={()=> handleNavigation("Orders")} className="text-black bg-slate-100 bg-opacity-60 w-full h-7 rounded-md hover:bg-slate-200">Security </button>
            </div>
            <div className="flex justify-center  gap-2 items-center mb-4 h-7 bg-slate-100 bg-opacity-60">
                <button className="">Logout</button>
                <IoIosLogOut size={20} color="red" />
            </div>
        </div>

        {activeTab === "Overview" && 
        <div className="w-[90%] flex flex-col justify-around ">
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
        <div className="flex h-[50%] justify-around">
                <div className="w-[45%] ">
                    <SalesBarChart mode={"salles"}/>
                </div>
                <div className="w-[45%]">
                    <SalesBarChart mode={"money"}/>
                </div>
            </div>
        </div>
        }
    </div>
)
}

export default Dashboard;
