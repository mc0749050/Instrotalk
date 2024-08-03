import { FaMeta } from "react-icons/fa6";
import { useContext, useRef, useState } from "react";
import { DataApi } from "../data/dataapi";
import logo from "../logo.png";
const Loginpage = () => {
  const { setloginsystem, username, password, setloginstatus } = useContext(DataApi);
  const [msg, setmsg] = useState("");
  const [msg1, setmsg1] = useState("");
  let usernamevalue = useRef(null);
  let passwordvalue = useRef(null);

  const loginFun = (event) => {
    event.preventDefault();
    let user = usernamevalue.current.value;
    let pass = passwordvalue.current.value;

    if (user === username && pass === password) {
      setmsg1("Login successful! ");
      setmsg('')
      setTimeout(() => {
        setloginsystem("logined");
        setloginstatus('donelogin');
      }, 1000);
    } else if (user !== username) {
      setmsg("Invalid username!");
      setmsg1('')
    } else {
      setmsg("Invalid password");
      setmsg1('')
    }
  };
  return (
    <div className="w-[100vw] text-center font-sans">
      <div className="mt-24">
        <img className="w-24 m-auto" src={logo} alt="logo" />

        <div className=" text-red-500">{msg}<span className="text-green-500">{msg1}</span></div>

        <div className="mt-12">
          <form onSubmit={loginFun}>
            <input
              type="text"
              placeholder="Username"
              className="w-[80%] mt-6 border-[1px] border-gray-500 rounded-[12px] px-[5%] py-[10px]"
              ref={usernamevalue}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-[80%] mt-6 border-[1px] border-gray-500 rounded-[12px] px-[5%] py-[10px]"
              ref={passwordvalue}
              required
            />
            <br />

            <button className="w-[80%] mt-6 rounded-[20px] px-[5%] py-[10px] text-center bg-blue-500 text-white font-[500] active:bg-blue-600">
              Log in
            </button>
          </form>
          <br />
          <p
            className="font-[500] text-14 font-sans mt-8 active:text-gray-400"
            onClick={() => {
              setTimeout(() => {
                setloginsystem("forgotpasswordpage");
              }, 1000);
            }}
          >
            Forgotten Password?
          </p>
        </div>
        <button
          className="w-[80%] mt-[110px]  rounded-[20px] px-[5%] py-[8px] text-center bg-transparent text-blue-500 border-[1px] border-blue-500 active:bg-gray-100"
          onClick={() => {
            setTimeout(() => {
              setloginsystem("createaccountpage");
            }, 1000);
          }}
        >
          Create new account
        </button>
        <p className="font-[500] flex w-[100vw] justify-center  mt-6 text-gray-600">
          <FaMeta />
          <span className="pl-[5px] mt-[-5px] ml-[2px]">Meta</span>
        </p>
      </div>
    </div>
  );
};
export default Loginpage;
