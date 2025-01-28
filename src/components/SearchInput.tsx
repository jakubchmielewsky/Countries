import { IoSearchSharp } from "react-icons/io5";

interface Props {
  value: string;
  onChange: (newValue: string) => void;
}

const SearchInput: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="bg-white shadow-md h-12 rounded-[5px] flex items-center dark:bg-c-dark-blue-elements tablet:w-[320px] desktop:w-[480px]">
      <IoSearchSharp className="mx-7 text-c-gray-80 dark:text-white" />
      <input
        placeholder="Search for a country..."
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        className="outline-none bg-transparent dark:text-white dark:placeholder-white text-xs w-full"
      />
    </div>
  );
};

export default SearchInput;
