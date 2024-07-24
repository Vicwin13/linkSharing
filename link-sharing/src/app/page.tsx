"use client";

import { AppPropsType } from "next/dist/shared/lib/utils";
import { AuthProvider } from "@/context/AuthContext";
import { ComponentCountProvider } from "@/components/ComponentCount";
import CustomizedLinks from "@/components/CustomizedLinks";
import Login from "./login";
import Navbar from "@/components/Navbar";
import type { NextPage } from "next";
import Phone from "@/components/Phone";
import SignUp from "./signup";

type HomeProps = {
  Component: NextPage<any>;
  pageProps: AppPropsType["pageProps"];
};
export default function Home({ Component, pageProps }: HomeProps) {
  return (
    <>
      <div className="bg-norm_ash  pt-0 mt-0">
        <Navbar />
        <div
          className="flex justify-center items-start
         gap-4">
          <Phone />
          <ComponentCountProvider>
            <CustomizedLinks />
          </ComponentCountProvider>
        </div>
      </div>
    </>
  );
}
