"use client";

import Image from "next/image";
import React from "react";

export default function Phone() {
  return (
    <div className="px-6 py-8 ml-6 mt-4 bg-white w-[560px] flex justify-center items-center">
      <div className=" relative w-fit">
        <Image src={"/outerPhone.svg"} width={307} height={631} alt="" />
        <Image
          className="absolute top-2 left-[10px]"
          src={"/innerPhone.svg"}
          width={285}
          height={611}
          alt=""
        />
        <div className=" absolute top-20 left-4 w-[273px]">
          <div className="flex flex-col gap-8 justify-center items-center">
            <div className=" flex flex-col items-center">
              <div className="h-24  bg-light_purp rounded-full w-24 mb-2"></div>
              <div className="flex flex-col items-center gap-2">
                <div className="h-4 w-40 rounded-[104px] bg-light_purp"></div>
                <div className="h-3 w-[72px] rounded-[104px] bg-light_purp"></div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className=" rounded-lg bg-light_purp w-60 h-11"></div>
              <div className=" rounded-lg bg-light_purp w-60 h-11"></div>
              <div className=" rounded-lg bg-light_purp w-60 h-11"></div>
              <div className=" rounded-lg bg-light_purp w-60 h-11"></div>
              <div className=" rounded-lg bg-light_purp w-60 h-11"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
