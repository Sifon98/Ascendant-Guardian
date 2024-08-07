import React from 'react'
import { Link } from "react-router-dom"
import CrucibleImg from '../../img/logo-icon/crucible-logo.png'

// Displays all the build cards that the sorting function decided to show
export default function BuildCards({buildId, tags, classImg, buildTitle, buildText, author, superImg, aspectImg1, aspectImg2, exoticImg}) {
  return (
    <div className="hover-wrapper">
      {author == undefined ? null : <div className="author"><Link target='_blank' to="https://www.youtube.com/@AztecrossGaming"></Link></div>}
      <Link to={{pathname: `/build-guide`, search: `name=${buildId}`}} className="build-wrapper">
        <div className="text">
          <div className="normal-info">
            <h3>{buildTitle}</h3>
            <hr className="largeLine"/>
            <hr className="smallLine"/>
            <p>{tags[0] == "HUNTER" ? "Hunter" : tags[0] == "WARLOCK" ? "Warlock" 
                                              : tags[0] == "TITAN" ? "Titan" : null} • {tags[1] == "SOLAR" ? "Solar" : tags[1] == "VOID" ? "Void" 
                                                                                                                      : tags[1] == "ARC" ? "Arc" 
                                                                                                                      : tags[1] == "STASIS" ? "Stasis" 
                                                                                                                      : tags[1] == "STRAND" ? "Strand" : null} • {tags[2]}</p>
            <p>{buildText}</p>
          </div>
        </div>
        <div id={classImg} className="image">
          <div className="color-wrapper">
            <div className="image-info">
                <div className="img-container">
                    <img className="large-img" src={superImg}/>
                      <hr/>
                    <div className="images">
                      <img src={aspectImg1}/>
                      <img src={aspectImg2}/>
                      <img src={exoticImg}/>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}