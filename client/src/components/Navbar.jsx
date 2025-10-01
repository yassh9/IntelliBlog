import { useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"

const Navbar = () => {
    const navigate = useNavigate();

  return (
    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 '>
        <div className="flex items-center gap-3" >
          <img src="/favicon.svg" onClick={() => navigate('/')} alt="logo" className=" cursor-pointer " />
        <h1 className="text-3xl font-bold">IntelliBlog</h1>
        </div>
        <button onClick={() => navigate('/admin')} className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5">Login
            <img src={assets.arrow} alt="arrow" className="w-3" />
        </button>
      
    </div>
  )
}

export default Navbar
