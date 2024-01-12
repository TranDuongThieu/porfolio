import React from 'react'
import { TbMapSearch } from "react-icons/tb";
import { CiMail } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-scroll';
import { useSelector } from 'react-redux';
const Contact = () => {
  const { mode } = useSelector(state => state.mode);
  const { width } = useSelector(state => state.width);

  const contacts = [
    {
      name: "Location",
      des: "Thu Duc, Ho Chi Minh City",
      icon: <TbMapSearch size={width === 3 ? 30 : 25} />
    },
    {
      name: "Mail",
      des: "tranduongthieuhcmute@gmail.com",
      icon: <CiMail size={width === 3 ? 30 : 25} />
    },
    {
      name: "Github",
      des: "TranDuongThieu",
      icon: <FiGithub size={width === 3 ? 30 : 25} />,
      link: "https://github.com/TranDuongThieu"
    },
    {
      name: "Facebook",
      des: "Trần Dương Thiệu",
      icon: <FaFacebookF size={width === 3 ? 30 : 25} />,
      link: "https://www.facebook.com/thiuiettiu"
    }
  ]
  return (
    <div>
      <div className="flex flex-col justify-center gap-10 mb-5">
        <h1 className={`text-[#2c7ffb]  font-bold font-poppins ${width === 3 ? "text-[20px] " : "text-[18px]"}`}>CONTACT</h1>

        <h1 className={`font-bold font-poppins ${width === 3 ? "text-[25px] " : "text-[20px]"}`}>Don't be shy! Hit me up! 👇</h1>
        <div className="flex items-center gap-20 flex-wrap ">
          {contacts.map(contact => (
            <div className="flex items-center gap-4 justify-center">
              <div className='p-2 rounded-full border shadow-lg text-blue-500'>
                {contact.icon}
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="font-poppins font-bold text-[18px]">{contact.name}</h1>
                <a
                  href={contact?.link}
                  target='_blank'
                  className="opacity-50 cursor-pointer hover:text-blue-500 hover:opacity-100 duration-300 font-medium" rel="noreferrer">
                  {contact.des}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Contact
