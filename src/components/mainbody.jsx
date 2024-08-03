import { useContext } from "react";
import { DataApi } from "../data/dataapi";
import Homepage from "./homepage";
import Profilepage from "./profilepage";
import Chatpage from "./chatpage";
import Createpostpage from "./createpostpage";
import Profileupdate from './profileupdate';


const Mainbody = () => {
  const { currentpage} = useContext(DataApi);
  let page;

  if (currentpage === "Home") {
    page = <Homepage />;
  } else if (currentpage === "Chat") {
    page = <Chatpage />;
  } else if (currentpage === "Createpost") {
    page = <Createpostpage />;
  } else if (currentpage === "Profile") {
    page = <Profilepage />;
  }
  else if (currentpage === "profileupdate") {
    page = <Profileupdate />;
  }

  return <div className="w-full">{page}</div>;
};
export default Mainbody;
