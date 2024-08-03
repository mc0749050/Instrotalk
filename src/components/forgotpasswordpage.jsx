import logo from "../logo.png";
import { useContext, useRef, useState } from "react";
import { DataApi } from "../data/dataapi";
const Forgotpasswordpage = () => {
  const { setloginsystem, setpassword } = useContext(DataApi);
  const [msg, setmsg] = useState("");
  const [msg1, setmsg1] = useState("");
  let passvalue = useRef(null);
  let repassvalue = useRef(null);

  const EmailFun = (event) => {
    event.preventDefault();
    if (passvalue.current.value === repassvalue.current.value) {
      setmsg1("Password reset successfully!");
      setmsg('');
setpassword(passvalue.current.value);
      setTimeout(() => {
        setloginsystem("loginpage");
      }, 1000);
    }
      
     else {
      setmsg("Password do not match!");
       setmsg1('')
  }
  };
  return (
    <div className=" w-[100vw] text-center font-sans">
      <img className="w-[130px] mt-12 m-auto" src={logo} alt="logo" />
      <div className="mt-4 text-red-500">{msg}<span className="text-green-500">{msg1}</span></div>
      <p className="font-[500] text-[25px] mt-14">Enter your email address</p>
      <form onSubmit={EmailFun}>
        <div className="mt-6">
          <input
            type="text"
            placeholder="username@gmail.com"
            className="w-[80%] mt-2 border-[1px] border-gray-500 rounded-[12px] px-[5%] py-[10px]"
            required
          />
          <input
            type="password"
            placeholder="New password"
            ref={passvalue}
            className="w-[80%] mt-6 border-[1px] border-gray-500 rounded-[12px] px-[5%] py-[10px]"
            required
          />
          <input
            type="password"
            placeholder="Re-Enter Password"
            ref={repassvalue}
            className="w-[80%] mt-6 border-[1px] border-gray-500 rounded-[12px] px-[5%] py-[10px]"
            required
          />
          <br />

          <button className="w-[80%] mt-6 rounded-[20px] px-[5%] py-[10px] text-center bg-blue-500 text-white font-[500] active:bg-blue-600">
            Continue
          </button>
        </div>
      </form>

      <p
        className="text-blue-600 font-[500] mt-[100px] active:text-gray-600"
        onClick={() => {
          setTimeout(() => {
            setloginsystem("loginpage");
          }, 1000);
        }}
      >
        Go to login
      </p>
    </div>
  );
};
export default Forgotpasswordpage;
