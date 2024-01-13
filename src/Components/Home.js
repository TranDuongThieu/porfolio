import React, { useState } from "react";
import avt from "../assets/avt.jpg";
import avt2 from "../assets/avt2.jpg";
import { Typewriter } from "react-simple-typewriter";
import waving from "../assets/waving.png"
import { GitIcon } from "../assets/icons/icons";
import { FaFacebookF } from "react-icons/fa";
import { useSelector } from "react-redux";

const Home = () => {
    const { width } = useSelector(state => state.width);

    const customMorphStyles = {
        backgroundColor: '#3498db',
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        animation: 'customMorph 5s infinite',
        transition: 'all 0.3s ease',
    };
    const sentences = ["Hi, I'm Tran Duong Thieu. A passionate Intern FullStack Website Developer based in HCM. 📍"]

    return (
        <div className={`flex flex-col gap-7  pb-20 ${width !== 3 && "mt-[120px]"}`}>
            <div className={`flex w-full justify-between items-center  ${width === 3 ? " gap-[100px]" : "gap-5 flex-col "}`}>
                <div className={`flex flex-col  ${width !== 3 ? "items-center order-2 gap-3" : "gap-8"}`} >
                    <div className=" flex items-center ">
                        <div className={` font-poppins font-extrabold w-fit z-10 leading-[60px] ${width === 3 ? "text-5xl " : width === 2 ? "text-3xl text-center" : "text-2xl text-center"}`}>
                            Intern FullStack Developer
                        </div>

                    </div>
                    <div className={`tracking-widest text-[20px] leading-8 ${width !== 3 ? "w-full px-5 text-center " : "w-[600px] text-justify  "} ${width===1 && "h-[150px]"}`}>
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
                    <div className="flex gap-5 my-5 items-center">
                        <a href="https://github.com/TranDuongThieu" target="_blank" rel="noreferrer" className={`cursor-pointer  hover:text-blue-500  transition duration-200 ease-in-out `}> <GitIcon /></a>

                        <a href="https://www.facebook.com/thiuiettiu" target="_blank" rel="noreferrer" className={`cursor-pointer  hover:text-blue-500  transition duration-200 ease-in-out `}>
                            <FaFacebookF size={25} />
                        </a>
                    </div>
                </div>
                <div className={`flex-none w-[300px] ${width !== 3 && "order-1"}`}>
                    <img style={customMorphStyles} src={avt2} alt="bg" className="w-[350px] h-[350px]  object-cover border-[3px] " />
                </div>

            </div>

        </div>
    );
};

export default Home;
