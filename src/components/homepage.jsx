import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import logo from '../logo.png'
import { useContext } from 'react';
import { GiWindow } from "react-icons/gi";
import { DataApi } from '../data/dataapi';
const Homepage = () => {
const { postcart} = useContext(DataApi);

  return(
    <div className="w-[100vw] font-sans">
      <div className="w-[100vw] flex justify-between items-center h-[8vh] bg-slate-900">
      
      <img className="w-[50px] h-[50px] ml-6" src={logo} alt="logo" />
      <p className="text-[23px] app mr-[20px] text-white">Instrotalk</p>
      </div>
           
   <div className="w-[100vw] overflow-y-auto h-[84vh]">  

     {postcart.length <= 0 ? (<div className="w-[100vw] h-[30vh] text-center flex justify-center flex-wrap text-[20px] font-sans items-center text-gray-700 mt-[25vh]"><GiWindow className="text-[70px] w-[100vw]" /><p>No Post is Available!</p></div>) : (<>{postcart.map((item) => (
      <div className="w-[100vw] border-b-[1px] border-gray-400 ">
    <div className="w-[94vw] ml-[3vw] h-[50px] flex justify-between items-center text-[16px]">
    <img className="w-[40px] h-[40px] rounded-[50%]" src={item.profileimg} alt="profile"/>
      <p className="font-[500] text-[15px] ml-[-130px]">{item.username}</p>

      <p className="font-[500] text-gray-600">{item.time}</p>
    </div>

      <div className="w-[100vw]"><img src={item.postimg} alt="post"/></div>

      <div className="flex justify-between text-center w-[90vw] ml-[5vw] items-center text-[24px] h-[40px] ">
        <div className="flex">
          <div className="mt-4">
          <FaRegHeart />
            <p className='font-[400] text-[15px]' >0 likes</p>
          </div>
        <FaRegComment className="ml-8 mt-4" />
        </div>

        <IoMdShare />
      </div>

      <div className="w-[90vw] ml-[5vw] text-[15px] mt-4 text-gray-700 mb-2">
          <p>{item.title}</p>
        </div>
    </div>
      
     ))}</>)}



     
    
     
   </div>
    </div>
  );
};
export default Homepage;
