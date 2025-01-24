import { useState } from "react";
import {IoSearchSharp} from "react-icons/io5"

const SearchInput = () => {
    const [query, setQuery] = useState("");

    return ( 
        <div className="bg-white shadow-md h-12 rounded-[5px] flex items-center dark:bg-c-dark-blue-elements">
            <IoSearchSharp className="mx-7 text-c-gray-80 dark:text-white"/>
            <input 
                placeholder="Search for a country..." 
                value={query} 
                onChange={e=>setQuery(e.currentTarget.value)}
                className="outline-none bg-transparent dark:text-white dark:placeholder-white text-xs"
            />
        </div>
     );
}
 
export default SearchInput;