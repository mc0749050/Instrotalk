import "./App.css";
import Bottomnavbar from "./components/bottomnavbar";
import Mainbody from "./components/mainbody";
import Loginpage from "./components/loginpage";
import Forgotpasswordpage from "./components/forgotpasswordpage";
import Createaccountpage from "./components/createaccountpage";

import { useContext } from "react";
import { DataApi } from "./data/dataapi";
function App() {
  const { loginsystem, loginstatus } = useContext(DataApi);
  let page;

  if(loginstatus === 'donelogin'){
    page = (
      <>
        <Mainbody />
        <Bottomnavbar />
      </>
      );
  } 

  else {
   // if(loginstatus === 'dologin'){
   //   page = <Loginpage />;
  //  }
   if (loginsystem === "loginpage") {
    page = <Loginpage />;
  } else if (loginsystem === "createaccountpage") {
    page = <Createaccountpage />;
  } else if (loginsystem === "forgotpasswordpage") {
    page = <Forgotpasswordpage />;
  } 
  }

  return <>{page}</>;
}

export default App;
