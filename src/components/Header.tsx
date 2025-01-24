import { useEffect, useState } from "react";
import {IoMoonOutline, IoMoonSharp} from "react-icons/io5"

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
        <div className="h-20 flex items-center justify-between px-4 shadow-md dark:text-white dark:bg-c-very-dark-blue-bg">
            <h2 className="text-sm font-extrabold">Where in the world?</h2>
            <button className=" flex gap-3 text-xs font-semibold items-center" onClick={toggleDarkMode}>
                {isDarkMode?<IoMoonSharp/>:<IoMoonOutline/>}
                Dark Mode
            </button>
        </div>
     );
}
 
export default Header;