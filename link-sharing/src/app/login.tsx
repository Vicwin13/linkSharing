/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement your login logic here
  };

  return (
    <>
      <div className="bg-light_purp h-screen flex justify-center items-center">
        <div className="  w-[476px] h-[573px] mx-auto">
          <div className="bg-light_purp flex gap-2 items-center pb-[51px] justify-center">
            <Image
              src="/Logo.svg"
              width={33.33}
              height={33.33}
              alt={"Logo symbol"}
            />
            <Image src="/devlinks.svg" width={135} height={26.25} alt="Logo" />
          </div>

          <div className=" mx-auto rounded-xl  bg-white">
            <div className=" p-[40px]">
              <h1 className="text-dark text-[32px] font-bold">Login</h1>
              <p className="text-base text-light_purp">
                Add your details to ge back into the app
              </p>
            </div>
            <form className="px-[40px]" action="">
              <div className="px-[40px">
                <label className="block text-dark text-[12px]" htmlFor="Email">
                  Email address
                </label>
                <div className=" relative">
                  <Image
                    className="absolute top-5 left-3"
                    src="/mail.svg"
                    alt="email icon"
                    width={13}
                    height={10}
                  />
                  <input
                    className=" placeholder:pl-5 py-3 px-4 rounded-lg border border-light_purp w-full"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="pt-6">
                <label
                  className="block text-dark text-[12px]"
                  htmlFor="Password">
                  Password
                </label>
                <div className="relative">
                  <Image
                    className="absolute top-4 left-3"
                    src={"/password.svg"}
                    alt={"password icon"}
                    width={12}
                    height={13}
                  />
                  <input
                    className=" placeholder:pl-5 py-3 px-4 rounded-lg border border-light_purp w-full"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <button type="submit">Login</button>
              <p>
                Don't have an account? <a href="#">Create account</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
