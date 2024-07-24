import React, { useState } from "react";

import Image from "next/image";

interface Option {
  value: string;
  label: string;
  image: string;
}

interface CustomDropdownProps {
  options: Option[];
  onChange: (selectedOption: Option) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div className="relative">
      <div
        className="border bg-white border-light_purp py-4 px-3 rounded-lg p-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? (
          <div className="flex items-center">
            <Image
              src={selectedOption.image}
              alt={selectedOption.label}
              width={20}
              height={20}
            />
            <span className="ml-2">{selectedOption.label}</span>
          </div>
        ) : (
          <span>Select an option</span>
        )}
      </div>
      {isOpen && (
        <div className="absolute bg-white border h-12 border-light_purp  rounded-lg mt-1 w-full z-10">
          {options.map((option) => (
            <div
              key={option.value}
              className="flex items-center p-2 bg-white hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionClick(option)}>
              <Image
                src={option.image}
                alt={option.label}
                width={20}
                height={20}
              />
              <span className="ml-2">{option.label}</span>
            </div>
          ))}
        </div>
      )}
      <div className="relative">
        <label htmlFor="links" className="block text-xs py-2">
          Links
        </label>
        <input
          type="text"
          className=" placeholder:pl-0 w-full py-4 pl-8 rounded-lg bg-white border border-light_purp"
          placeholder=" e.g. https://www.github.com/johnappleseed"
        />
        <Image
          className="absolute top-[52px] left-2"
          src={"/dark-link.png"}
          width={16}
          height={16}
          alt=""
        />
      </div>
    </div>
  );
};

export default CustomDropdown;
