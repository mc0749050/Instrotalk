import { useContext, useRef, useState } from "react";
import { DataApi } from "../data/dataapi";

const Createaccountpage = () => {
  const { setloginsystem, setusername, setpassword, username, setname } =
    useContext(DataApi);
  const [msg, setmsg] = useState("");
const [msg1, setmsg1] = useState("");
  let usernamevalue = useRef(null);
  let passwordvalue = useRef(null);
  let namevalue = useRef(null);
  let emailvalue = useRef(null);
  let CreateaccountFun = (event) => {
    event.preventDefault();

    if (usernamevalue.current.value === username) {
      setmsg("Username already taken!");
      setmsg1('');
    } else {
      setmsg1("Account created successfully!");
      setmsg('');
      setname(namevalue.current.value);
setusername(usernamevalue.current.value);
      setpassword(passwordvalue.current.value);
      setTimeout(() => {
        setloginsystem("loginpage");
      }, 1000);

      usernamevalue.current.value = "";
      passwordvalue.current.value = "";
      namevalue.current.value = "";
      emailvalue.current.value = "";
    }
  };

  return (
    <div className="w-[100vw] text-center font-sans ">
      <h1 className="font-[500] text-[35px] mt-14">Instrotalk</h1>
      <div className=" text-red-500">{msg}<span className="text-green-500">{msg1}</span></div>
      <div className="mt-14">
        <form onSubmit={CreateaccountFun}>
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
          <input
            type="text"
            placeholder="Enter your email"
            className="w-[80%] mt-8 border-[1px] border-gray-500 rounded-[12px] px-[5%] py-[10px]"
            ref={emailvalue}
            required
          />
          <input
            type="password"
            placeholder="Create your password"
            className="w-[80%] mt-8 border-[1px] border-gray-500 rounded-[12px] px-[5%] py-[10px]"
            ref={passwordvalue}
            required
          />
          <br />

          <button className="w-[80%] mt-8 rounded-[20px] px-[5%] py-[10px] text-center bg-blue-500 text-white font-[500] active:bg-blue-600">
            Create account
          </button>
        </form>
      </div>
      <p
        className="text-blue-600 font-[500] mt-24 active:text-gray-600"
        onClick={() => {
          setTimeout(() => {
            setloginsystem("loginpage");
          }, 1000);
        }}
      >
        I already have an account
      </p>
    </div>
  );
};
export default Createaccountpage;
