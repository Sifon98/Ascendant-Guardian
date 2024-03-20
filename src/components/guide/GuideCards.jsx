import React from 'react'
import { Link } from "react-router-dom"
import parse from 'html-react-parser'

export default function GuideCards({guideId, guideTitle, guideUnderTitle, guideText}) {
  return (
    <div id={guideId} className="guide-card-img">
        <div className="layer">
            <div className="guide-card">
                <div className="flex-container">
                    <h3 className="medium-header">{guideTitle}</h3>
                    <hr className="largeLine" />
                    <hr className="smallLine" />
                    <h3 className="under-header">{guideUnderTitle}</h3>
                    <p>{parse(guideText)}</p>
                </div>
                <Link to={{pathname: `/guide-page`, search: `name=${guideId}`}} className="button">READ MORE</Link>
            </div>
        </div>
    </div>
  )
}
