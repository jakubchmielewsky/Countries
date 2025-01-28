import { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";

interface Props {
  value: string;
  onChange: (newValue: string) => void;
  placeholder: string;
  options: string[];
}

const Dropdown: React.FC<Props> = ({
  value,
  onChange,
  placeholder,
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-fit relative text-c-gray-111517 dark:text-white">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="h-12 w-[200px] bg-white dark:bg-c-dark-blue-elements rounded-[5px] shadow-md flex items-center justify-between px-5 text-xs"
      >
        <span>{value ? value : placeholder}</span>
        <IoChevronDownSharp />
      </button>

      {isOpen && (
        <ul className="absolute w-[200px] top-14 left-0 bg-white dark:bg-c-dark-blue-elements rounded-[5px] shadow-md px-5 py-4 text-xs">
          {options.map((option) => {
            return (
              <li key={option}>
                <button
                  className="w-full text-left py-[3px]"
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                >
                  {option}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
