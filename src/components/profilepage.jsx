import { MdAddBox } from "react-icons/md";
import { RiMenu4Fill } from "react-icons/ri";
import { useContext } from 'react';
import { DataApi } from '../data/dataapi';
import { FaUserLock } from "react-icons/fa6";
import { useState } from 'react';
import Logoutpage from './logoutpage';



const Profilepage = () => {
  const { name, username, setcurrentpage, profileimg, postcart, setpostcart, password} = useContext(DataApi);

  const [logoutpage, setlogoutpage] = useState(false);

  //delet function 
const deletepostFun = (key) => {
  let userAns = prompt("Enter your password for delete ");

  if(userAns === password){
    const newcartitems = postcart.filter((item) => item.key !== key);
    setpostcart(newcartitems);
  }
  else{
    alert("Incorrect password!")
  }

}
  return(
    <div>

      {logoutpage && <Logoutpage />}
      
      <div className="flex w-[90vw] ml-[5vw] justify-between text-[30px] mt-2 "><FaUserLock className="text-[25px] mr-2" /><span className="mt-[2px] w-[50vw] text-[17px] font-[500] ">{username}</span>
        <div className="flex w-[30vw] justify-between"><MdAddBox onClick={() => {
      setcurrentpage("Createpost");
        }} />
        <RiMenu4Fill onClick={() => {logoutpage ? setlogoutpage(false) : setlogoutpage(true) }} /></div>
      </div>

      <div className="w-[85vw] ml-[7.5vw] flex justify-between h-[140px] items-center font-sans text-[15px]">
        <div className="text-center">
          <img className="w-[80px] h-[80px] rounded-[50%]"  src={profileimg} alt="profile"/>
           <p>{name}</p>                       </div>
        <div className="text-center text-[15px]">
        <p>{postcart.length}</p>
        <p>posts</p>
        </div>
        <div className="text-center text-[15px]">
        <p>0</p>
        <p>likes</p>
        </div>
        <div className="text-center text-[15px]">
        <p>0</p>
        <p>comments</p>
        </div>       
      </div>

    <div className="w-[85vw] ml-[7.5vw]">
    <button className="w-full h-[40px] text-white bg-gray-500 font-[500] font-sans rounded-[7px] active:bg-gray-600" onClick={() => {
      setTimeout(() => {
        setcurrentpage('profileupdate');
      }, 500)
     
    }}>Edit profile</button>
    </div>
      <div className="w-full h-[55vh] fixed bottom-[8vh] text-center border-[1px] border-gray-300 overflow-y-auto flex flex-wrap ">

        {postcart.length > 0 ? (postcart.map((post) => (
      <img className="w-1/3 h-[50%]"  src={post.postimg} onClick={() => deletepostFun(post.key)} />   
        ))) : (<div><h1 className="font-[500] text-[25px]  mt-[20vh]">Profile</h1>  <p className="m-auto text-[12px] w-[80%]">When you share photos and videos, they'll appear on your profile.</p></div>)}
      
      </div>
    </div>
  );
};
export default Profilepage;
