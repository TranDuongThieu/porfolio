import React, { useEffect, useState } from "react";
import avt from "../assets/avt.jpg";
import { Typewriter } from "react-simple-typewriter";
import { useSelector } from "react-redux";

const Greeting = () => {
    const sentences = [
        "Hi! I'm Tran Duong Thieu",
        "I'm Intern Front-End Developer",
    ];
    const [active, setActive]  = useState(1)
    useEffect(() => {
        const intervalId = setInterval(() => {
            setActive(prev => prev < 4 ? prev +1 : 1);
        }, 3000);
    },[]);
    return (
        <div className="w-screen relative h-screen  text-white text-center flex justify-center items-center flex-col gap-3">
            <div className={`w-[300px] h-[300px] bg-[transparent] border-[1px]  rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-65%] transition duration-1000 delay-200 ease-in-out   ${active === 1 ? " border-[#9db1cd]" :" border-[#595959]" }`}></div>
            <div className={`w-[450px] h-[450px] bg-[transparent] border-[1px]  rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-60%] transition duration-1000 delay-200 ease-in-out ${active === 2 ? " border-[#9db1cd]" :" border-[#595959]" }`}></div>
            <div className={`w-[600px] h-[600px] bg-[transparent] border-[1px]  rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-55%] transition duration--1000 delay-200 ease-in-out ${active === 3 ? " border-[#9db1cd]" :" border-[#595959]" }`}></div>
            <div className={`w-[750px] h-[750px] bg-[transparent] border-[1px]  rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-55%] transition duration--1000 delay-200 ease-in-out ${active === 4 ? " border-[#9db1cd]" :" border-[#595959]" }`}></div>
            <div>
                <img
                    src={avt}
                    alt="img"
                    className="w-[120px] h-[120px] rounded-full object-cover"
                />
            </div>
            <div className="tracking-[10px] font-monospace text-[15px] font-medium text-[#7d7c7c] z-10 ">
                FRONT END DEVELOPER
            </div>
            <div className="tracking-widest text-[30px] font-semibold z-10 text-black">
                <Typewriter
                    words={sentences}
                    loop={false}
                    cursor
                    cursorStyle="|"
                    cursorColor="grey"
                    typeSpeed={100}
                    deleteSpeed={60}
                />
            </div>
        </div>
    );
};

export default Greeting;
