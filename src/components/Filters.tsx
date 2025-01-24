import { useState } from "react";
import Dropdown from "./Dropdown";
import SearchInput from "./SearchInput";

const options=[
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oceania",
]

const Filters = () => {
    const [value, setValue] = useState("");

    const handleValueChange = (newValue: string) => {
        setValue(newValue);
    }

    return ( 
        <div className="flex flex-col justify-between h-32">
            <SearchInput/>
            <Dropdown value={value} setValue={handleValueChange} placeholder="Filter by Region" options={options}/>
        </div>
     );
}
 
export default Filters;