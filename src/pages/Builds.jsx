import React, { useState } from 'react'
import '../scss/builds.scss'
import BuildContainer from '../components/build/BuildContainer'
import { preBuildArray } from '../components/build/BuildArray'
import bannerImg from "../img/banners/build-banner.png";
import bannerImg850 from "../img/banners/build-banner-350h.png";
import bannerImgMobile from "../img/banners/build-banner-mobile.png";
import bannerImgwebp from "../img/banners/build-banner.webp";
import bannerImg850webp from "../img/banners/build-banner-350h.webp";
import bannerImgMobilewebp from "../img/banners/build-banner-mobile.webp";
import solarElement from "../img/logo-icon/element-solar.png"
import arcElement from "../img/logo-icon/element-arc.png"
import voidElement from "../img/logo-icon/element-void.png"
import stasisElement from "../img/logo-icon/element-stasis.png"
import strandElement from "../img/logo-icon/element-strand.png"
import prismaticElement from "../img/logo-icon/element-prismatic.png"
import hunterLogo from "../img/logo-icon/hunter-logo.png"
import titanLogo from "../img/logo-icon/titan-logo.png"
import warlockLogo from "../img/logo-icon/warlock-logo.png"
import { getWidth } from "../components/hooks/getWidth"

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
    document.getElementById('sortingBtn1').innerHTML=(e.currentTarget.innerHTML);
    setMenuOpen1(!menuOpen1);
    setSelectClass(e.currentTarget.id);
  }
  const handleMenu2 = (e) => {
    document.getElementById('sortingBtn2').innerHTML=(e.currentTarget.innerHTML);
    setMenuOpen2(!menuOpen2);
    setSelectSubclass(e.currentTarget.id);
  }
  const handleMenu3 = (e) => {
    document.getElementById('sortingBtn3').innerHTML=(e.currentTarget.innerHTML);
    setMenuOpen3(!menuOpen3);
    setSelectActivity(e.currentTarget.id);
  }
  // Close all menus
  const closeAll = () => {
    setMenuOpen1(false);
    setMenuOpen2(false);
    setMenuOpen3(false);
  }

  const [prevTarget1, setPrevTarget1] = useState();
  const [prevTarget2, setPrevTarget2] = useState();
  const [prevTarget3, setPrevTarget3] = useState();
  // Mobile search buttons
  const handleMenuMobile1 = (e) => {
    console.log(prevTarget1)
    setSelectClass(e.currentTarget.id);
    if (prevTarget1 != undefined) {
      prevTarget1.classList.remove("selected")
    }
    e.currentTarget.classList.add("selected")
    setPrevTarget1(e.currentTarget)
  }
  const handleMenuMobile2 = (e) => {
    setSelectSubclass(e.currentTarget.id);
    if (prevTarget2 != undefined) {
      prevTarget2.classList.remove("selected")
    }
    e.currentTarget.classList.add("selected")
    setPrevTarget2(e.currentTarget)
  }
  const handleMenuMobile3 = (e) => {
    setSelectActivity(e.currentTarget.id);
    if (prevTarget3 != undefined) {
      prevTarget3.classList.remove("selected")
    }
    e.currentTarget.classList.add("selected")
    setPrevTarget3(e.currentTarget)
  }

  // Set if the filter menu is open or not
  const [filterOpen, setFilterOpen] = useState(0);
  const toggleFilter = () => {
    if (filterOpen == 0 || filterOpen == 2) {
      setFilterOpen(1)
    }
    else {
      setFilterOpen(2)
    }
  }

  // Change variable depending on screen width
  const { width } = getWidth();

  return (
    <>
      <div className="back-color">
        <div className="intro" >
          <picture>
            <source type="image/webp"
              srcSet={`${bannerImgMobilewebp} 608w, ${bannerImg850webp} 850w, ${bannerImgwebp} 1080w`}/>
            <img src={bannerImg} 
              srcSet={`${bannerImgMobile} 608w, ${bannerImg850} 850w, ${bannerImg} 1080w`}
              alt="Banner for the builds page" />
          </picture>
        </div>
        <div className="border" />
      </div>
      {/* an invisible box that hides the menu when you click outside of it */}
      <div className={`hider ${menuOpen1 || menuOpen2 || menuOpen3 ? 'active' : 'inactive'}`} onClick={()=>{closeAll()}}></div>
      { width > 720 ?
      <div className="sorting-container">
        <h2 className="medium-header">SORTING:</h2>
        <div className="menu-container">
          <div className={`menu-selector ${menuOpen1 ? 'box-shadow' : '' }`} onClick={()=>{setMenuOpen1(!menuOpen1), menuOpen2 == undefined ? null : setMenuOpen2(false), menuOpen3 == undefined ? null : setMenuOpen3(false)}}>
            <div id="sortingBtn1">CLASSES</div>
          </div>
          <div id="ANY CLASS" className={`dropdown-menu ${menuOpen1 == undefined ? '' : menuOpen1 ? 'active' : 'inactive'}`}>
            <ul>
              <li id="ANY CLASS" onClick={handleMenu1}>ANY CLASS</li>
              <li id="HUNTER" onClick={handleMenu1}><img src={hunterLogo} alt="Hunter icon" />HUNTER</li>
              <li id="WARLOCK" onClick={handleMenu1}><img src={warlockLogo} alt="Warlock icon" />WARLOCK</li>
              <li id="TITAN" onClick={handleMenu1}><img src={titanLogo} alt="Titan icon" />TITAN</li>
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
              <li id="SOLAR" onClick={handleMenu2}><img src={solarElement} alt="Solar element icon" />SOLAR</li>
              <li id="ARC" onClick={handleMenu2}><img src={arcElement} alt="Arc element icon" />ARC</li>
              <li id="VOID" onClick={handleMenu2}><img src={voidElement} alt="Void element icon" />VOID</li>
              <li id="STASIS" onClick={handleMenu2}><img src={stasisElement} alt="Stasis element icon" />STASIS</li>
              <li id="STRAND" onClick={handleMenu2}><img src={strandElement} alt="Strand element icon" />STRAND</li>
              <li id="PRISMATIC" onClick={handleMenu2}><img src={prismaticElement} alt="Strand element icon" />PRISMATIC</li>
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
      :
      <>
      <div className="filter-button" onClick={toggleFilter}>
        { filterOpen == 1 ?
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 8v-5l9 10.03-9 9.97v-5c-15 0-19.167-15.167-10.606-17.013-3.805 2.938 3.252 7.473 10.606 7.013z"/></svg>
        : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1 0h22l-9 15.094v8.906l-4-3v-5.906z"/></svg> }
      </div>
      <div className={filterOpen == 0 ? 'filter-temp' : filterOpen == 1 ? 'filterOpen' : 'filterClosed'}>
          <div className='filter-menu'>
              <div className="filter-item">
                <h2>CLASSES</h2>
                <hr />
                <ul>
                  <li id="ANY CLASS" onClick={handleMenuMobile1}>ALL</li>
                  <li id="HUNTER" onClick={handleMenuMobile1}><img src={hunterLogo} alt="Hunter icon" /></li>
                  <li id="WARLOCK" onClick={handleMenuMobile1}><img src={warlockLogo} alt="Warlock icon" /></li>
                  <li id="TITAN" onClick={handleMenuMobile1}><img src={titanLogo} alt="Titan icon" /></li>
                </ul>
              </div>
              <div className="filter-item">
                <h2>SUBCLASSES</h2>
                <hr />
                <ul>
                  <li id="ANY SUBCLASS" onClick={handleMenuMobile2}>ALL</li>
                  <li id="SOLAR" onClick={handleMenuMobile2}><img src={solarElement} alt="Solar element icon" /></li>
                  <li id="ARC" onClick={handleMenuMobile2}><img src={arcElement} alt="Arc element icon" /></li>
                  <li id="VOID" onClick={handleMenuMobile2}><img src={voidElement} alt="Void element icon" /></li>
                  <li id="STASIS" onClick={handleMenuMobile2}><img src={stasisElement} alt="Stasis element icon" /></li>
                  <li id="STRAND" onClick={handleMenuMobile2}><img src={strandElement} alt="Strand element icon" /></li>
                  <li id="PRISMATIC" onClick={handleMenuMobile2}><img src={prismaticElement} alt="Strand element icon" /></li>
                </ul>
              </div>
              <div className="filter-item">
                <h2>ACTIVITES</h2>
                <hr />
                <ul>
                  <li id="ANY ACTIVITY" onClick={handleMenuMobile3}>ALL</li>
                  <li id="PVE" onClick={handleMenuMobile3}>PVE</li>
                  <li id="PVP" onClick={handleMenuMobile3}>PVP</li>
                </ul>
              </div>
          </div>
      </div>
      </>}
      {/* Links to a component that sorts the builds and displays them */}
      <BuildContainer buildArray={buildArray} selectClass={selectClass} selectSubclass={selectSubclass} selectActivity={selectActivity}/>
    </>
  )
}
