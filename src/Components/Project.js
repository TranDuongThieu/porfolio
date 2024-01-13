import React from 'react'
import ProjectCard from './ProjectCard'
import movie from '../assets/pj/movie.png'
import cm from '../assets/pj/commerce.png'
import por from '../assets/pj/porfolio.png'

import ielts from '../assets/pj/ielts.png'
const Project = () => {
  const projects = [
    {
      title: "My Movie",
      des: "MyMovie is your go-to destination for all things movies. Stay up-to-date with the latest releases, follow your favorite films, and watch trailers to get a sneak peek into the cinematic world. With a user-friendly interface, MyMovie lets you effortlessly track your watched movies, discover new releases.",
      techs: ["Reactjs", "Redux", "Tailwind"],
      img: movie,
      link: "https://thiu-movie.vercel.app/",
      git: "https://github.com/TranDuongThieu/my-movie",
      type: 1,
      date: "April 13, 2023"
    },

    {
      title: "Eilts",
      des: "Eilts is your dedicated platform for honing your IELTS Listening skills. Tailored to help you succeed in the IELTS exam, Eilts offers a comprehensive array of listening exercises, practice tests, and expertly curated content to enhance your proficiency in understanding spoken English.",
      techs: ["Servlet", "JPA", "Bootstrap"],
      img: ielts,
      link: "http://ieltslisten.us-east-2.elasticbeanstalk.com/user/home",
      git: "https://github.com/vinhvucsau/Ielts-Listening-Web",
      type: 2,
      date: "December, 2023"
    },

    {
      title: "E-Commerce",
      des: "Welcome to Digital World, your premier online destination for seamless e-commerce experiences in the tech realm. Explore a diverse marketplace where buying and selling mobile phones, laptops, tablets, and more is made effortless. Engage in dynamic auctions for exclusive tech finds, ensuring you get the best deals in a competitive digital environment.",
      techs: ["MongoDb", "Nodejs", "Reactjs"],
      img: cm,
      link: "https://thiu-ecommerce.vercel.app",
      git: "https://github.com/TranDuongThieu/Ecommerce-Client",
      type: 1,
      date: "November, 2023"
    },
    {
      title: "Portfolio",
      des: "Welcome to my portfolio! I am a passionate Full Stack Developer with a strong foundation in React.js and Tailwind. With a keen eye for detail and a commitment to delivering high-quality software solutions, I thrive in creating seamless and responsive web applications.",
      techs: ["Reactjs", "Tailwind"],
      img: por,
      link: "https://thiuiettiu.vercel.app/",
      git: "https://github.com/TranDuongThieu/porfolio",
      type: 2,
      date: "January 12, 2023"
    },
  ]
  return (
    <div className="">
      <div className="flex flex-col gap-8">
        <span className='text-[23px] font-poppins font-extrabold text-blue-500'>MY PROJECT</span>
        <div className="flex flex-col gap-[60px]">

          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project
