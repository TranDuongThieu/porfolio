import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-scroll';
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { setMode } from "../redux/action/setMode"
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoReorderThree } from "react-icons/io5";
const Header = () => {
    const dispatch = useDispatch();
    const list = ["Home", "About", "Project", "Contact"];
    const { mode } = useSelector(state => state.mode);
    const { width } = useSelector(state => state.width);
    const [isDropdown, setIsShowDropdown] = useState(false)
    const [activeSection, setActiveSection] = useState('');

    // Add a scroll event listener to update the active section based on the scroll position
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const sections = ["HOME", "ABOUT", "PROJECT", "CONTACT"]; // Add other section IDs as needed

            // Determine the active section based on the scroll position
            const active = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop - 20; // Adjust the offset as needed
                    const offsetBottom = offsetTop + element.offsetHeight;
                    return scrollPosition >= offsetTop && scrollPosition < offsetBottom;
                }
                return false;
            });

            // Update the active section state
            if (active) {
                setActiveSection(active);
            }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (width !== 1) {
            setIsShowDropdown(false)
        }
    }, [width])
    return (

        <div className={`flex justify-between h-[65px] py-[15px] font-semibold relative z-50 items-center ${width === 2 ? "px-5 text-[17px]" : width === 1 ? "px-2 text-[15px]" : " px-[50px] text-[17px]"}`}>
            <Link
                href="#HOME"
                to="HOME"
                spy={true}
                smooth={true}
                duration={500}
                className={`text-center items-center flex font-extrabold font-poppins text-[20px]`}>Thiuiettiu.dev
            </Link>
            <div className={`flex items-center ${width === 1 ? "gap-5" : "gap-8"}`}>
                {width > 1 && list.map((item, index) => (
                    <Link
                        href={`#${item.toUpperCase()}`}
                        to={item.toUpperCase()}
                        spy={true}
                        smooth={true}
                        duration={500}
                        className={`py-[10px]  cursor-pointer border-b-[2px] border-b-transparent hover:border-b-blue-500 hover:border-b-[2px] transition duration-500 ease-in-out ${activeSection === item.toUpperCase() &&
                            "text-blue-500 border-b-[2px] border-b-blue-500"
                            }`}
                        key={index}
                        onClick={() => setActiveSection(item.toUpperCase())}
                    >
                        {item}
                    </Link>
                ))}
                <div className=" hover:shadow-md w-[30px] h-[30px] flex justify-center items-center rounded-full duration-200" >
                    {mode === "light" ?
                        <FaRegMoon size={20} className='cursor-pointer hover:text-blue-500 duration-200' onClick={() => dispatch(setMode('dark'))} /> :
                        <MdOutlineWbSunny size={25} className='cursor-pointer hover:text-blue-500 duration-200' onClick={() => dispatch(setMode('light'))} />}
                </div>
                {width === 1 && (
                    <div
                        onClick={() => setIsShowDropdown(!isDropdown)}
                        className="relative hover:shadow-md w-[30px] h-[30px] z-50 flex justify-center items-center rounded-full duration-200"
                    >
                        <IoReorderThree
                            className={`cursor-pointer hover:text-blue-500 duration-200 ${isDropdown && "text-blue-500"}`}
                            size={30}
                        />

                        <div
                            className={`flex px-[60px] rounded-b-lg flex-col absolute top-[48px] right-[-10px] border-t p-3 shadow-lg z-50 duration-300  ${mode === "light" ? "bg-white" : "bg-[#282828]"} ${isDropdown ? "opacity-100 visible" : "opacity-0 invisible"} `}
                            style={{
                                transform: isDropdown ? "translateX(0) " : "translateX(150%) ",
                                transition: "all 0.3s ease-in-out", // Adjust the duration and easing function
                                opacity: isDropdown ? 1 : 0,
                            }}
                        >
                            {list.map((item, index) => (
                                <Link
                                    href={`#${item.toUpperCase()}`}
                                    to={item.toUpperCase()}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    className={`py-[10px]  cursor-pointer  transition duration-500 ease-in-out ${activeSection === item.toUpperCase() &&
                                        "text-blue-500 "
                                        }`}
                                    key={index}
                                    onClick={() => setActiveSection(item.toUpperCase())}
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>

                    </div>
                )}

            </div>
            {isDropdown && <div onClick={() => setIsShowDropdown(false)} className={`fixed top-0 right-0 left-0 bottom-0 z-20  ${mode === "light" ? " bg-[rgba(0,0,0,0.2)]" : "bg-[rgba(255,255,255,0.1)]"}`}></div>}
        </div>

    )
}

export default Header
