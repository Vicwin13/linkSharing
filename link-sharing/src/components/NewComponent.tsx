"use client";

import React, { useEffect, useState } from "react";

import { ComponentCount } from "./ComponentCount";
import CustomDropdown from "./CustomDropDown";
import Image from "next/image";

interface NewComponentProps {
  id: number;
  removeComponents: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => void;
  incrementCount: () => void;
}

const NewComponent: React.FC<NewComponentProps> = ({
  id,
  removeComponents,
  incrementCount,
}: NewComponentProps) => {
  const { count } = ComponentCount();

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    removeComponents(e, id);
  };

  useEffect(() => {
    // Update UI based on the new count value here
    // setCount(count + 1);
  }, []);

  useEffect(() => {
    incrementCount();
  }, [incrementCount]);

  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleDropdownChange = (selectedOption: {
    value: string;
    label: string;
    image: string;
  }) => {
    setSelectedOption(selectedOption.value);
  };

  const options = [
    { value: "Github", label: "Github", image: "/darkgithub.svg" },
    { value: "Facebook", label: "Facebook", image: "/darkfb.png" },
    { value: "LinkedIn", label: "LinkedIn", image: "/darklinkedin.svg" },
    { value: "X", label: "X", image: "/dark-x.png" },
    { value: "Gitlab", label: "GitLab", image: "/dark-gitlab.svg" },
    { value: "Youtube", label: "YouTube", image: "/dark-yt.png" },
  ];

  return (
    <div className="p-5 bg-light_ash border font-Instrument_Sans  rounded-xl mb-4">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-base text-dark">
            <Image src={"/Frame.svg"} alt="" width={10} height={10} /> Link #
            {count.toString()}
          </div>
          <button onClick={handleRemove}> remove</button>
        </div>
        <div className="mt-4">
          <label htmlFor={`dropdown-${id}`} className="block text-xs mb-2">
            Platform
          </label>
          <CustomDropdown options={options} onChange={handleDropdownChange} />
        </div>
      </div>
    </div>
  );
};

export default NewComponent;
