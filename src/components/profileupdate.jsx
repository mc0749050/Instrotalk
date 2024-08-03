import { useContext, useRef } from 'react';
import { DataApi } from '../data/dataapi';
const Profileupdate = () => {
const {setname, setusername, setcurrentpage, profileimg, setprofileimg, username, name} = useContext(DataApi);
  let namevalue = useRef(null);
  let usernamevalue = useRef(null);

const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
     const reader = new FileReader();
      reader.onloadend = () => {
     setprofileimg(reader.result);
        setcurrentpage('Profile')
     };
    reader.readAsDataURL(file);
 }
 };
  
const profileupdateFun = (event) => {
  event.preventDefault();
  setTimeout(() => {
    setname(namevalue.current.value);
setusername(usernamevalue.current.value);
    setcurrentpage('Profile');
  }, 700)

}
  
  return(
    <div className="w-full text-center font-sans">
      <img className="w-[100px] m-auto mt-24 h-[100px] rounded-[50%] "  src={profileimg} />
      <label for="img" className="text-blue-600">Edit picture</label>

      <input type="file" id="img" className="hidden" onChange={handleImageUpload} />

      <div>
      <form onSubmit={profileupdateFun}>
          <input
            type="text"
        placeholder="Enter your name"
            className="w-[80%] mt-8 border-[1px] border-gray-500 rounded-[12px] px-[5%] py-[10px]"
            ref={namevalue}
            required
          />
          <input
            type="text"
            placeholder="Enter your username"
            className="w-[80%] mt-8 border-[1px] border-gray-500 rounded-[12px] px-[5%] py-[10px]"
            ref={usernamevalue}
            required
          />
          <br />

          <button className="w-[80%] mt-8 rounded-[20px] px-[5%] py-[10px] text-center bg-blue-500 text-white font-[500] hover:bg-blue-700">
            Update profile
          </button>
        </form>
    </div>
    </div>
  );
}
export default Profileupdate;