import { useEffect, useState } from "react";
import {IoMoonOutline, IoMoonSharp} from "react-icons/io5"
import { Link } from "react-router-dom";

const Header = () => {
    const [isDarkMode, setDarkMode] = useState(false);
    const htmlElement = document.documentElement;

    const toggleDarkMode = () => {
        setDarkMode(prev=>!prev);
    };

    useEffect(()=>{
        if (isDarkMode) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }
    },[isDarkMode,htmlElement.classList])

    return ( 
        <div className="shadow-md text-c-gray-111517 dark:text-white dark:bg-c-dark-blue-elements">
            <div className="px-4 h-20 flex items-center justify-between max-w-[1600px] mx-auto  tablet:px-14">
                <Link to={"/"}>
                    <h2 className="text-sm font-extrabold">Where in the world?</h2>
                </Link>
                <button className=" flex gap-3 text-xs font-semibold items-center" onClick={toggleDarkMode}>
                    {isDarkMode?<IoMoonSharp/>:<IoMoonOutline/>}
                    Dark Mode
                </button>
            </div>
                
        </div>
     );
}
 
export default Header;