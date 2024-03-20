import React from 'react'
import { Link } from "react-router-dom"
import CrucibleImg from '../../img/logo-icon/crucible-logo.png'

// Displays all the build cards that the sorting function decided to show
export default function BuildCards({buildId, tags, classImg, buildTitle, buildText, author, superImg, aspectImg1, aspectImg2, exoticImg}) {
  return (
    <Link to={{pathname: `/build-guide`, search: `name=${buildId}`}} className="build-wrapper">
      <div className="text">
        <div className="normal-info">
          <h3>{buildTitle}</h3>
          <hr className="largeLine"/>
          <hr className="smallLine"/>
          <p>{buildText}</p>
        </div>
        <div className="author">
          {author == undefined ? null : <p>By: {author}</p>}
        </div>
      </div>
      <div id={classImg} className="image"> 
        <div className="pvp-img">
          { tags[2] == "PVP" ? <img src={ CrucibleImg } />: null }
        </div> 
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
    </Link>
  )
}