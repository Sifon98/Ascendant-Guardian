import React from 'react'
import parse from 'html-react-parser';
import elementArc from '../img/logo-icon/element-arc.png'
import elementVoid from '../img/logo-icon/element-void.png'
import elementSolar from '../img/logo-icon/element-solar.png'
import elementStasis from '../img/logo-icon/element-stasis.png'
import elementStrand from '../img/logo-icon/element-strand.png'
import elementKinetic from '../img/logo-icon/element-kinetic.png'

export default function HoverBox({image, i, title, energy, text, superImg}) {
  return (
    <>
    {i > 0 ? <hr /> : null}
    <div className="hover-container">
        <img className={superImg ? `super-img` : ''} src={image}/>
        <div className="hover-box">
            <div className="hover-box-header">
                <h3>{title}</h3>
            </div>
            <p>{energy == undefined ? null : energy == "arc" ? <img src={elementArc} alt="" className="element-img" />
                                           : energy == "void" ? <img src={elementVoid} alt="" className="element-img" />
                                           : energy == "solar" ? <img src={elementSolar} alt="" className="element-img" />
                                           : energy == "stasis" ? <img src={elementStasis} alt="" className="element-img" />
                                           : energy == "strand" ? <img src={elementStrand} alt="" className="element-img" />
                                           : energy == "kinetic" ? <img src={elementKinetic} alt="" className="element-img" />
                                           : null }{parse(text)}
            </p>
        </div>
    </div>
    </>
  )
}
