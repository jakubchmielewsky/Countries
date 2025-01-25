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
        <div className="flex flex-col justify-between h-[168px] px-4 py-5 tablet:flex-row tablet:px-14">
            <SearchInput/>
            <Dropdown value={value} setValue={handleValueChange} placeholder="Filter by Region" options={options}/>
        </div>
     );
}
 
export default Filters;