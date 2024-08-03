import { GoHomeFill } from "react-icons/go";
import { MdLibraryAdd } from "react-icons/md";
import { BsChatTextFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useContext } from "react";
import { DataApi } from "../data/dataapi";
const Bottomnavbar = () => {
  const { setcurrentpage } = useContext(DataApi);
  return (
    <div class="fixed bottom-0 left-0 w-full bg-slate-900 text-white h-[8vh] flex text-[30px] justify-around items-center">
      <GoHomeFill
        onClick={() => {
          setcurrentpage("Home");
        }}
      />
      <BsChatTextFill
        onClick={() => {
          setcurrentpage("Chat");
        }}
      />
      <MdLibraryAdd
        onClick={() => {
          setcurrentpage("Createpost");
        }}
      />
      <CgProfile
        onClick={() => {
          setcurrentpage("Profile");
        }}
      />
    </div>
  );
};
export default Bottomnavbar;
