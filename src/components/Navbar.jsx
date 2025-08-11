import React from 'react'
import { AiFillDelete } from "react-icons/ai";
// import { v4 as uuidv4 } from 'uuid';
import {FaEdit, FaHome, FaTasks} from "react-icons/fa";
const navbar = () => {
  return (
   <nav className="flex justify-between py-2 text-white bg-violet-500">
    <div className="logo">
        <span className="text-xl font-bold mx-9">iTask</span>
    </div>
    <ul className="flex gap-8 mx-9 mt-2">
        <li className="transition-all cursor-pointer text-2xl hover:font-bold hover:text-3xl"><FaHome/></li>
        <li className="transition-all cursor-pointer text-2xl hover:font-bold hover:text-3xl"><FaTasks/></li>
    </ul>
   </nav>
  )
}

export default navbar
