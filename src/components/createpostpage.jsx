import { IoIosAdd } from "react-icons/io";
import { useState, useRef, useContext} from 'react';
import { DataApi } from '../data/dataapi';
const Createpostpage = () => {

 let posttitle = useRef(null);

  const [img, setimg] = useState(null);
  const {username, profileimg, setpostcart, postcart, setcurrentpage} = useContext(DataApi);

  const [imgshow, setimgshow] = useState(null);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
     const reader = new FileReader();
      reader.onloadend = () => {
     setimg(reader.result);
        setimgshow(reader.result)
     };
    reader.readAsDataURL(file);
 }
 };


  
  const Uploadpost = (event) => {
    event.preventDefault();
 const title = posttitle.current.value;
    
    let time = new Date();
  let currenttime = time.getHours() + ":" + time.getMinutes();
    currenttime = currenttime.toString();
    const key = Math.random();
setpostcart([{username: username, profileimg: profileimg, title: title, postimg: img, time: currenttime, key: key  }, ...postcart])
posttitle.current.value = '';

    setTimeout(() => {
      setcurrentpage('Home');
    }, 500)
    
  }
  
  return (
    <form onSubmit={Uploadpost}>
    <div className="w-[100vw] font-sans text-center">
    <p className="font-[500] text-[30px] mt-8">Create new post</p>

      <div className="w-[100vw] ">
       <label for="postimg">     
         
 <img className="w-[40vw] h-[40vw] m-auto border-[1px] border-black  border-dashed rounded-[20px] font-[500] text-[30px] flex justify-center items-center mt-6 z-40" src={imgshow} />
           <IoIosAdd className="absolute text-[40px] z-0 top-[150px] left-[45vw] text-gray-300" /> 
       </label>
        <input type="file" id="postimg" className="hidden" required onChange={handleImageUpload}/>

    <input type="text" placeholder="Enter your feelings..." required className="w-[76vw] px-[2vw] py-2 rounded-[10px] border-[1px] border-slate-900 mt-14" ref={posttitle} />
      </div>

      <button className="w-[80vw] py-2 rounded-[18px] bg-blue-500 mt-14 hover:bg-blue-600 text-white">Upload </button>


    </div>
    </form>
  );
};
export default Createpostpage;
