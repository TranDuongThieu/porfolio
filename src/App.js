import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowUp } from "react-icons/fa";
import Home from "./Components/Home";
import About from "./Components/About"
import { setWidth } from "./redux/action/setWidth";
import Header from "./Components/Header";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import icon1 from "./assets/icons.svg"
import icon2 from "./assets/icons-1.svg"
import icon3 from "./assets/icons-2.svg"
import icon4 from "./assets/icons-3.svg"
import Project from "./Components/Project";
import { animateScroll as scroll } from 'react-scroll';
import Contact from "./Components/Contact";
function App() {
    const { mode } = useSelector(state => state.mode);
    const { width } = useSelector(state => state.width);
    const darkTheme = createTheme({
        palette: {
            mode: mode || 'light',
        },
        transitions: {
            create: (property) => `transition: ${property} 500ms ease-in-out`,
        },
    });

    const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
    const dispatch = useDispatch();
    const resize = () => {
        setCurrentWidth(window.innerWidth);
    };
    useEffect(() => {
        if (currentWidth < 600)
            dispatch(setWidth(1));
        else if (currentWidth < 992)
            dispatch(setWidth(2));
        else
            dispatch(setWidth(3));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentWidth]);
    useEffect(() => {
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
        };
    });

    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const handleScroll = () => {

        const scrollPosition = window.scrollY;
        const totalHeight =
            document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollPosition / totalHeight) * 100;
        setScrollProgress(progress);

        if (scrollPosition > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }

    };
    const buttonBorderStyle = {
        borderTopColor: scrollProgress >= 0 ? `rgb(59 130 246)` : '',
        borderRightColor: scrollProgress >= 25 ? `rgb(59 130 246)` : '',
        borderBottomColor: scrollProgress >= 50 ? `rgb(59 130 246)` : '',
        borderLeftColor: scrollProgress >= 75 ? `rgb(59 130 246)` : '',
    };
    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 800, // Set the duration for smooth scrolling (in milliseconds)
            smooth: 'easeInOutQuart', // You can customize the easing function
        });
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div className="flex" style={{ transition: "background-color 1s ease, border-color 1s ease" }}>
                {isVisible && (
                    <div
                        style={buttonBorderStyle}
                        onClick={scrollToTop}
                        className={`p-3 duration-700 flex z-50 items-center justify-center shadow-2xl border-[2px] cursor-pointer rounded-md fixed hover:text-blue-500 ${width === 3 ? " bottom-10 right-10" : "bottom-2 right-2"} ${mode === "light" ? "bg-white" : "bg-black"}`}
                    >
                        <FaArrowUp size={25} />
                    </div>
                )}
                <div
                    className={`h-auto fixed w-full border-b-[1px] shadow-xl z-50 mx-auto ${mode === "dark" ? "bg-black" : "bg-white"
                        }`}
                    style={{ transition: "background-color 1s ease, border-color 1s ease" }}
                >
                    <Header />
                </div>
                <div className="w-full flex items-center justify-center">
                    <div className="max-w-[107rem]">
                        <div
                            id="HOME"
                            className={` flex gap-10 justify-center items-center ${width === 1 ? "px-[10px]" : width === 2 ? "px-[50px]" : "px-[170px] pt-20 min-h-screen"}  ${mode === "light" ? "bg-[#EFEFEF]" : "bg-[#212121]"
                                }`}
                            style={{ transition: "background-color 1s ease, border-color 1s ease" }}
                        >
                            <Home />
                        </div>


                        <div
                            className={`flex gap-8 items-center  pt-3 pb-10 ${width === 1 ? "px-[10px]" : width === 2 ? "px-[50px]" : "px-[170px]"}  ${mode === "light" ? "bg-[#EFEFEF]" : "bg-[#212121]"
                                }`}
                            style={{ transition: "background-color 1s ease, border-color 1s ease" }}
                        >
                            {width ===3 && <div className="pr-8 border-r-4 text-[18px] whitespace-nowrap">Tech Stack</div>}
                            <div className="flex items-center justify-center gap-4 flex-wrap">
                                <img
                                    src={icon1}
                                    alt=""
                                    className="hover:translate-y-[-20px] duration-200"
                                />
                                <img
                                    src={icon2}
                                    alt=""
                                    className="hover:translate-y-[-20px] duration-200"
                                />
                                <img
                                    src={icon3}
                                    alt=""
                                    className="hover:translate-y-[-20px] duration-200"
                                />
                                <img
                                    src={icon4}
                                    alt=""
                                    className="hover:translate-y-[-20px] duration-200"
                                />
                            </div>
                        </div>

                        <div
                            id="ABOUT"
                            className={`    ${width === 1 ? "px-[10px]" : width === 2 ? "px-[50px]" : "px-[170px]"}  `}
                            style={{ transition: "background-color 1s ease, border-color 1s ease" }}
                        >
                            <About />
                        </div>
                        <div
                            id="PROJECT"
                            className={`py-[120px]  ${width === 1 ? "px-[10px]" : width === 2 ? "px-[50px]" : "px-[170px]"}  ${mode === "light" ? "bg-[#EFEFEF]" : "bg-[#212121]"
                                }`}
                            style={{ transition: "background-color 1s ease, border-color 1s ease" }}
                        >
                            <Project />
                        </div>
                        <div id="CONTACT" className={`h-screen pt-20 flex flex-col justify-between`}>
                            <div

                                className={`pb-10 ${width === 1 ? "px-[10px]" : width === 2 ? "px-[50px]" : "px-[170px]"} `}
                                style={{ transition: "background-color 1s ease, border-color 1s ease" }}
                            >
                                <Contact />
                            </div>
                            <div
                                className={`py-[50px]  ${width === 1 ? "px-[10px]" : width === 2 ? "px-[50px]" : "px-[170px]"}  flex justify-between  ${mode === "dark" ? "bg-[#212121] text-white" : "bg-[#212121] text-white"}`}
                                style={{ transition: "background-color 1s ease, border-color 1s ease" }}
                            >
                                <h1 className="text-[18px] font-bold font-poppins">
                                    Copyright © 2024. All rights are reserved
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
