import React, { useEffect } from 'react'
import { GitIcon, LiveDemoIcon } from '../assets/icons/icons'
import { useSelector } from 'react-redux';
import { Link } from 'react-scroll';

const ProjectCard = ({ project }) => {
    const { mode } = useSelector(state => state.mode);
    const { width } = useSelector(state => state.width);
    useEffect(() => {
        if (width !== 3) {

        }
    }, [width])
    return (
        <div
            style={{ transition: "background-color 1s ease, border-color 1s ease" }}
            className={`flex gap-10 p-5 border shadow-xl rounded-lg h-fit flex-wrap ${width !== 3 && "justify-center"} ${mode === 'dark' ? "bg-black border-gray-600 " : "bg-white "}}`}>
            {width !== 3 &&
                <a
                    href={project?.link}
                    target="_blank"
                    className='text-2xl text-center font-poppins flex flex-wrap justify-center items-center font-extrabold hover:text-blue-500 duration-300' rel="noreferrer">
                    {project?.title}
                    <span className="text-xl ml-3">({project.date})</span>
                </a>}
            <a
                href={project?.link}
                target="_blank"
                className={`w-[55%]  shadow-xl  overflow-hidden rounded-xl  duration-200 
                            ${project.type === 2 && width === 3 && "order-2"} ${width === 3 ? "h-[400px]" : "h-[250px] w-full object"}`}
                rel="noreferrer">
                <img src={project?.img} alt="" className='w-full object-top rounded-xl  hover:translate-y-[-78%] duration-[10s]' />
            </a>
            <div className="flex flex-1 flex-col gap-8 items-center justify-center  ">
                {width === 3 &&
                    <a
                        href={project?.link}
                        target="_blank"
                        className='text-2xl font-poppins flex flex-wrap justify-center items-center font-extrabold hover:text-blue-500 duration-300' rel="noreferrer">
                        {project?.title}
                        <span className="text-xl ml-3">({project.date})</span>
                    </a>}

                <span className={` opacity-70 font-medium text-center `}> {project?.des}</span>
                <div className="flex gap-3">
                    {project?.techs?.map(tech => <div className="px-3 py-2 cursor-pointer border shadow-md duration-300  ">{tech}</div>)}
                </div>
                <div className="flex gap-10">
                    <a href={project?.git} target="_blank" className='flex items-center gap-2 hover:text-blue-500 duration-300' rel="noreferrer">
                        <p>Code</p>
                        <GitIcon />
                    </a>
                    <a href={project?.link} target="_blank" className='flex items-center gap-2 hover:text-blue-500 duration-300' rel="noreferrer">
                        <p>Live demo</p>
                        <LiveDemoIcon />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
