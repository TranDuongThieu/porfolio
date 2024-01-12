import React, { useState } from "react";
import { Link } from "react-scroll";
import avt from "../assets/avt.jpg";
const Sidebar = () => {
    const list = ["HOME", "ABOUT", "SKILL", "EDUCATION", "CONTACT"];
    const [activeId, setActiveId] = useState(0);
    return (
        <div className="w-full h-full flex flex-col py-10 gap-10">
            <div className="flex flex-col items-center">
                <img
                    src={avt}
                    alt="avt"
                    className="w-[120px] h-[120px] rounded-full object-cover border-[1px]"
                />
                <span>Trần Dương Thiệu</span>
                <span>FRONT END DEVELOPER</span>
            </div>
            <div className="flex flex-col items-center">
                {list.map((item, index) => (
                    <Link
                        to={item}
                        spy={true}
                        smooth={true}
                        duration={500}
                        className={`py-[10px] font-medium cursor-pointer border-b-[2px] border-b-transparent hover:border-b-blue-500 hover:border-b-[2px] transition duration-500 ease-in-out ${
                            activeId === index &&
                            "text-blue-500 border-b-[2px] border-b-blue-500"
                        }`}
                        key={index}
                        onClick={()=>setActiveId(index)}
                    >
                        {item}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
