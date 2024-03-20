import React, { useState } from 'react'
import '../scss/builds.scss'
import BuildContainer from '../components/build/BuildContainer'
import { preBuildArray } from '../components/build/BuildArray'

export function Builds() {
  // The array that stores all the builds and their info
  const buildArray = preBuildArray;
  // Used to change the dropdown menus
  const [menuOpen1, setMenuOpen1] = useState();
  const [menuOpen2, setMenuOpen2] = useState();
  const [menuOpen3, setMenuOpen3] = useState();
  // Used to sort builds
  const [selectClass, setSelectClass] = useState('ANY CLASS');
  const [selectSubclass, setSelectSubclass] = useState('ANY SUBCLASS');
  const [selectActivity, setSelectActivity] = useState('ANY ACTIVITY');

  // Change the button text, set the sorting tag and close menu
  const handleMenu1 = (e) => {
    document.getElementById('sortingBtn1').innerHTML=(e.currentTarget.id);
    setMenuOpen1(!menuOpen1);
    setSelectClass(e.currentTarget.id);
  }
  const handleMenu2 = (e) => {
    document.getElementById('sortingBtn2').innerHTML=(e.currentTarget.id);
    setMenuOpen2(!menuOpen2);
    setSelectSubclass(e.currentTarget.id);
  }
  const handleMenu3 = (e) => {
    document.getElementById('sortingBtn3').innerHTML=(e.currentTarget.id);
    setMenuOpen3(!menuOpen3);
    setSelectActivity(e.currentTarget.id);
  }
  // Close all menus
  const closeAll = () => {
    setMenuOpen1(false);
    setMenuOpen2(false);
    setMenuOpen3(false);
  }

  return (
    <>
      <div className="back-color">
        <div className="intro" />
        <div className="border" />
      </div>
      {/* an invisible box that hides the menu when you click outside of it */}
      <div className={`hider ${menuOpen1 || menuOpen2 || menuOpen3 ? 'active' : 'inactive'}`} onClick={()=>{closeAll()}}></div>
      <div className="sorting-container">
        <h2 className="medium-header">SORTING:</h2>
        <div className="menu-container">
          <div className={`menu-selector ${menuOpen1 ? 'box-shadow' : '' }`} onClick={()=>{setMenuOpen1(!menuOpen1), menuOpen2 == undefined ? null : setMenuOpen2(false), menuOpen3 == undefined ? null : setMenuOpen3(false)}}>
            <div id="sortingBtn1">CLASSES</div>
          </div>
          <div id="ANY CLASS" className={`dropdown-menu ${menuOpen1 == undefined ? '' : menuOpen1 ? 'active' : 'inactive'}`}>
            <ul>
              <li id="ANY CLASS" onClick={handleMenu1}>ANY CLASS</li>
              <li id="HUNTER" onClick={handleMenu1}>HUNTER</li>
              <li id="WARLOCK" onClick={handleMenu1}>WARLOCK</li>
              <li id="TITAN" onClick={handleMenu1}>TITAN</li>
            </ul>
          </div>
        </div>
        <div className="menu-container">
          <div className={`menu-selector ${menuOpen2 ? 'box-shadow' : '' }`} onClick={()=>{setMenuOpen2(!menuOpen2), menuOpen1 == undefined ? null : setMenuOpen1(false), menuOpen3 == undefined ? null : setMenuOpen3(false)}}>
            <div id="sortingBtn2">SUBCLASSES</div>
          </div>
          <div id="ANY SUBCLASS" className={`dropdown-menu ${menuOpen2 == undefined ? '' : menuOpen2 ? 'active' : 'inactive'}`}>
            <ul>
              <li id="ANY SUBCLASS" onClick={handleMenu2}>ANY SUBCLASS</li>
              <li id="SOLAR" onClick={handleMenu2}>SOLAR</li>
              <li id="ARC" onClick={handleMenu2}>ARC</li>
              <li id="VOID" onClick={handleMenu2}>VOID</li>
              <li id="STASIS" onClick={handleMenu2}>STASIS</li>
              <li id="STRAND" onClick={handleMenu2}>STRAND</li>
            </ul>
          </div>
        </div>
        <div className="menu-container">
          <div className={`menu-selector ${menuOpen3 ? 'box-shadow' : '' }`} onClick={()=>{setMenuOpen3(!menuOpen3), menuOpen1 == undefined ? null : setMenuOpen1(false), menuOpen2 == undefined ? null : setMenuOpen2(false)}}>
            <div id="sortingBtn3">ACTIVITIES</div>
          </div>
          <div id="ANY ACTIVITY" className={`dropdown-menu ${menuOpen3 == undefined ? '' : menuOpen3 ? 'active' : 'inactive'}`}>
            <ul>
              <li id="ANY ACTIVITY" onClick={handleMenu3}>ANY ACTIVITY</li>
              <li id="PVE" onClick={handleMenu3}>PVE</li>
              <li id="PVP" onClick={handleMenu3}>PVP</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="info-wrapper">
        <div className="quick-info">
          <h3>All builds are future proof, meaning that they 
            do not require any artifact mods.</h3>
        </div>
      </div> */}
      {/* Links to a component that sorts the builds and displays them */}
      <BuildContainer buildArray={buildArray} selectClass={selectClass} selectSubclass={selectSubclass} selectActivity={selectActivity}/>
    </>
  )
}
