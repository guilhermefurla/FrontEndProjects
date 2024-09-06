import React from 'react'

export default function SideBar({handleToggleModal}) {
  return (
    <div className='sidebar'>
      <div onClick={handleToggleModal} className='bgOverlay'></div>
      <div className='sidebarContents'>
        <h2>The Brutal Martian Landscape</h2>
        <div>
          <p>Description</p>
          <p>text text text</p>
        </div>
        <button onClick={handleToggleModal}>
        <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  )
}
