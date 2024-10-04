import { useState } from "react";
import cls from "classnames";

interface DropdownProps {
  label: string;
  options: OptionsDropdown[] | [];
  extraLabel?: string;
  icon?: string;
  value?: OptionsDropdown;
  onChange: (value: OptionsDropdown) => void;
}

const Dropdown = ({ label, options, value, icon, onChange }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: any) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        className="bg-transparent text-white px-4 py-2 rounded-md hover:bg-[#94979A1A] flex flex-row w-auto gap-x-1 justify-center items-center"
        onClick={toggleDropdown}
      >
        {icon && <img src={icon} alt="logo" className="w-auto" />}
        {value && value.avatar && (
          <img
            src={value.avatar}
            className="h-8 w-8 rounded-[32px]"
            alt="no imagen"
          />
        )}
        {!value ? `${label}: ` : ""}
        {value ? `${value.label}` : ""}
      </button>

      {isOpen && (
        <ul className="absolute left-0 bg-gray3 text-white rounded-[8px] shadow-lg z-10">
          {options.map((option, index) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className={cls(
                "flex items-center px-4 py-2 hover:bg-gray2 cursor-pointer w-auto gap-x-1 items-center",
                {
                  "rounded-t-[8px]": index === 0,
                  "rounded-b-[8px]": index === options.length - 1,
                }
              )}
            >
              {icon && <img src={icon} alt="logo" className="w-auto" />}
              {value && value.avatar && (
                <img
                  src={value.avatar}
                  className="h-8 w-8 rounded-[32px]"
                  alt="no imagen"
                />
              )}
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
