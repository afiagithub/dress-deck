"use client"
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Login = () => {
    const [show, setShow] = React.useState(false);

    const handleToggle = () => {
        setShow(!show);
    }
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center w-full rounded-md 
        sm:p-10 my-8 lg:my-0 gap-10">
            <div className="w-2/5 mx-auto hidden lg:flex">
            <Image src={"https://i.ibb.co.com/RQLryRL/model2.png"} alt="image" height={200} width={300}/>
            </div>
            <div className="flex flex-col w-4/5 md:w-3/4 lg:w-2/6 mx-auto">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-extrabold font-nun text-[#9b2f51]">Sign in</h1>
                    <p className="text-sm dark:text-[#921A40]">Sign in to access your account</p>
                </div>
                <form className="space-y-12">
                    <div className="space-y-6">
                        <div>
                            <label className="block mb-2 text-sm font-bold">Email address</label>
                            <input type="email" name="email" placeholder="email address"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        
                        <div className="relative">
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm font-bold">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-[#921A40]">Forgot password?</a>
                            </div>
                            <input type={show ? "text" : "password"} name="password" placeholder="*****"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                            <div className="absolute top-10 right-4 text-lg" onClick={handleToggle}>
                                {show ? <FaEyeSlash /> : <FaRegEye />}
                            </div>
                        </div>                        
                    </div>
                    <div className="space-y-2">
                        <div>
                            <input type="submit" value="Sign In"
                                className="w-full px-8 py-3 bg-[#921A40] text-white border-2 border-[#921A40] 
                                hover:border-[#921A40] hover:bg-transparent hover:text-[#921A40] 
                                rounded-xl font-bold font-nun" />
                        </div>
                        <p className="px-6 text-sm text-center">Don&apos;t have an account yet?
                            <Link href="/signup" className="hover:underline dark:text-[#921A40] font-bold">
                                Sign up</Link>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;