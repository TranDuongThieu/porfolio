import React from "react";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import aboutme from "../assets/aboutme.png";
import about from "../assets/about.jpg";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.svg";
const About = () => {
    const { width } = useSelector((state) => state.width);
    const { mode } = useSelector(state => state.mode);

    const sentences = [
        "I have studied at Ho Chi Minh City University of Technology and Education (HCMUTE) for 3 years.",
        "I started learning HTML and CSS in early 2022 and always keep updrating my skills. In detail, i learn more about JavaScript and it's FrameWork - ReactJs. I thinked it is not enough, so i searched for Redux to manage State better. I have knowledge of SCSS and a little experience with Tailwind. I have learnt about Rest API with Axios and still improve myself everyday.",
        "In 2023, I took a Toeic exam and archived 695 points."
    ];

    return (
        <div className={`w-full h-fit pb-20 flex flex-col justify-center items-center relative ${width === 3 ? "pt-40 " : "pt-20"} `}>
            <div className={`flex  ${width !== 3 ? "flex-col justify-center items-center gap-20" : "gap-10"}`}>
                {width !== 3 && <p className="text-blue-600 text-[25px] font-poppins font-extrabold">ABOUT ME</p>}
                <div className={`relative ${width === 3 ? " flex-none w-[40%]" : width === 2 ? "w-[95%]" : "w-[85%]"}`}>
                    <img src={about} className=" w-full h-full rounded-lg" alt="" />
                    <div className="absolute bottom-[-70px] right-[-25px]">
                        <div className={`relative flex items-center justify-center bg-white  rounded-full  ${width === 3 ? "w-[200px] h-[200px]" : "w-[140px] h-[140px]"} `}>
                            <img src={about3} alt="" className={`absolute  animate-spin-slow ${width === 3 ? "w-[220px]" : "w-[140px]"}`} />
                            <img src={about2} className={`rounded-full w-[80px] object-cover ${width === 3 ? "w-[80px]" : "w-[50px]"}`} alt="" />
                        </div>
                    </div>

                </div>
                <div className={`flex-auto flex flex-col  gap-2  text-[18px] animate-fade-in ${width > 500 ? "px-[50px]" : "px-2"
                    }`}>
                    {width === 3 && <p className="text-blue-600 text-[18px] font-poppins font-extrabold">ABOUT ME</p>}

                    <p className={`text-[25px] font-poppins font-bold ${width === 1 && "text-center mb-5"}`}>A dedicated Front-end Developer 📍</p>
                    <div className="flex flex-col  gap-2 text-gray-500 text-justify "
                    >
                        {sentences.map((sentence, index) => (
                            <div
                                className="font-abel  "
                            >
                                {sentence}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
