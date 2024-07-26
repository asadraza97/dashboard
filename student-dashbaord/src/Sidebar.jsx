import React from "react";
import 
{BsCart3, BsGrid1X2Fill, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { PiStudentFill } from "react-icons/pi";
 import { FaChalkboardTeacher } from "react-icons/fa";
 import { RiAdminFill } from "react-icons/ri";
 import { IoMdLogOut } from "react-icons/io";



function Sidebar({openSidebarToggle, OpenSidebar}) {
         return (
          <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""} >
              <div className='sidebar-title'>
                  <div className='sidebar-brand'>
                      <div className='icon_header'>
                            SMIT
                      </div>
                  </div>
              <span className='icon close_icon' onClick={OpenSidebar}>X</span>
             </div>
             <ul className='sidebar-list'>
                 <li className='sidebar-list-item'>
                     <a href="">
                         <BsGrid1X2Fill className='icon'/> Dashboard
                     </a>
                 </li>
                 <li className='sidebar-list-item'>
                     <a href="">
                         <PiStudentFill className='icon'/> Student Dashbaord
                     </a>
                 </li>
                 <li className='sidebar-list-item'>
                     <a href="">
                         <FaChalkboardTeacher className='icon'/> Teacher Dashbaord
                     </a>
                 </li>
                 <li className='sidebar-list-item'>
                     <a href="">
                         <RiAdminFill className='icon'/> Admin Dashbaord
                     </a>
                 </li>
                 <li className='sidebar-list-item'>
                     <a href="">
                      <IoMdLogOut className='icon'/> Logout
                     </a>
                 </li>
                  <li className='sidebar-list-item'>
                     <a href="">
                          <BsMenuButtonWideFill className='icon'/> Reports
                      </a>
                  </li>
                  <li className='sidebar-list-item'>
                      <a href="">
                          <BsFillGearFill className='icon'/> Setting
                      </a>
                  </li>
              </ul>
          </aside>
        )
      }
      
      export default Sidebar