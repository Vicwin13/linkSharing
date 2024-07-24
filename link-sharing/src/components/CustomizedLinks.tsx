/* eslint-disable react/no-unescaped-entities */
"use client";

import { ComponentCount, ComponentCountProvider } from "./ComponentCount";
import React, { useState } from "react";

import Image from "next/image";
import NewComponent from "./NewComponent";

function CustomizedLinks() {
  const [components, setComponents] = useState<React.ReactElement[]>([]);
  const [showInitialDiv, setShowInitialDiv] = useState(true);
  const { incrementCount } = ComponentCount();

  const handleAddComponent = () => {
    const newComponent = (
      <NewComponent
        key={Date.now()}
        id={Date.now()}
        incrementCount={incrementCount}
        removeComponents={removeComponent}
      />
    );
    setComponents([...components, newComponent]);
    setShowInitialDiv(false);
    incrementCount();
  };

  const removeComponent = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    e.preventDefault();
    setComponents(components.filter((component) => component.props.id !== id));
  };

  return (
    <>
      <ComponentCountProvider>
        <div className="bg-white w-[710px] font-Instrument_Sans p-10 mt-4">
          <div className="pb-10">
            <h2 className="text-[32px] font-bold text-dark">
              Customize your links{" "}
            </h2>
            <p className=" text-[16px] text-deep_ash">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>
          </div>
          <div className=" pb-6">
            <button
              className="text-center border border-deep_blue rounded-lg w-full py-[11px] px-[27px] text-deep_blue font-semibold"
              onClick={handleAddComponent}>
              + Add new link
            </button>
          </div>
          <div className="space-y-4">
            {showInitialDiv ? (
              <div className="w-full bg-light_ash p-5 rounded-xl mx-auto">
                <div className="flex w-[488px] mx-auto flex-col justify-center items-center text-center">
                  <Image
                    src={"/linkImage.svg"}
                    alt=""
                    width={240}
                    height={160}
                  />
                  <div className="pt-10">
                    <h2 className="font-bold text-[32px] text-dark pb-6">
                      Let's get you started{" "}
                    </h2>
                    <p className=" text-deep_ash">
                      Use the “Add new link” button to get started. Once you
                      have more than one link, you can reorder and edit them.
                      We’re here to help you share your profiles with everyone!
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
            {components.map((component) => (
              <NewComponent
                key={component.props.id}
                id={component.props.id}
                removeComponents={removeComponent}
                incrementCount={incrementCount}
              />
            ))}
          </div>
        </div>
      </ComponentCountProvider>
    </>
  );
}

const CustomizedLinksWithProvider: React.FC = () => (
  <ComponentCountProvider>
    <CustomizedLinks />
  </ComponentCountProvider>
);

export default CustomizedLinksWithProvider;
