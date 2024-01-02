import React from 'react'
import './SideBar.css'
import { SideBarData } from '../RectRouting/DataSide';



function Sidebar() {
  return (
    <div className='Sidebar'>
      <ul className='SidebarList'>
      <li id="Close"><div className='closebtn' >REACT JS</div></li>
        {SideBarData.map((val, key) => {
          return (
           
            <li key={key} className='Row'>
              <div id='icon'>{val.icon}</div>
              <div id='tital'>{val.tital}</div>
            </li>
          )
        })}
      </ul>

    </div>
  )
}

export default Sidebar;
