import { useContext } from 'react'
import { DataApi } from '../data/dataapi'
const Logoutpage = () => {
const { setloginstatus } = useContext(DataApi);
  return(
    <div className="w-full h-[25vh] fixed bottom-0 left-0 rounded-t-[10px] bg-slate-900 z-40 text-white  text-center grid items-center justify-center">
     <button className="w-[80vw] py-[7px] rounded-[15px] bg-white text-black active:bg-gray-200 mt-14 font-[500]" onClick={() => {

setTimeout(()=>{
  setloginstatus('dologin');
}, 400)
      
     }}>Logout</button>

   <p className=" text-[18px] font-[300] text-gray-400">Instrotalk</p>
    </div>
  );
}
export default Logoutpage;