import React, { useState } from 'react'
import '../scss/guides.scss'
import { Link } from "react-router-dom"
import { preGuideArray } from '../components/guide/GuideArray'
import GuideContainer from '../components/guide/GuideContainer'

export function Guides() {
  const guideArray = preGuideArray;
  // Used to change the dropdown menus
  const [menuOpen1, setMenuOpen1] = useState();
  // Used to sort builds
  const [selectActivity, setSelectActivity] = useState('ANY ACTIVITY');

  // Change the button text, set the sorting tag and close menu
  const handleMenu1 = (e) => {
    document.getElementById('sortingBtn1').innerHTML=(e.currentTarget.id);
    setMenuOpen1(!menuOpen1);
    setSelectActivity(e.currentTarget.id);
  }
  // Close all menus
  const closeAll = () => {
    setMenuOpen1(false);
  }

  return (
    <>
    <div className="back-color">
        <div className="intro intro-guides" />
        <div className="border" />
      </div>
    <div className={`hider ${menuOpen1 ? 'active' : 'inactive'}`} onClick={()=>{closeAll()}}></div>
    <div className="sorting-container">
      <h2 className="medium-header">SORTING:</h2>
      <div className="menu-container">
        <div className={`menu-selector ${menuOpen1 ? 'box-shadow' : '' }`} onClick={()=>{setMenuOpen1(!menuOpen1)}}>
          <div id="sortingBtn1">ACTIVITIES</div>
        </div>
        <div id="ANY ACTIVITY" className={`dropdown-menu ${menuOpen1 == undefined ? '' : menuOpen1 ? 'active' : 'inactive'}`}>
          <ul>
            <li id="ANY ACTIVITY" onClick={handleMenu1}>ANY ACTIVITY</li>
            <li id="RAIDS" onClick={handleMenu1}>RAIDS</li>
            <li id="DUNGEONS" onClick={handleMenu1}>DUNGEONS</li>
          </ul>
        </div>
      </div>
    </div>
    <GuideContainer guideArray={guideArray} selectActivity={selectActivity}/>
    </>
  )
}
