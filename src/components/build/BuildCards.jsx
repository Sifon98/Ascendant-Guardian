import React from 'react'
import { Link } from "react-router-dom"
// Normal boring images
import solarH from "../../img/class-portrait/mini/SolarHunter1-min.png"
import solarW from "../../img/class-portrait/mini/SolarWarlock1-min.png"
import solarT from "../../img/class-portrait/mini/SolarTitan1-min.png"
import strandH from "../../img/class-portrait/mini/StrandHunter1-min.png"
import strandT from "../../img/class-portrait/mini/StrandTitan1-min.png"
import voidH from "../../img/class-portrait/mini/VoidHunter1-min.png"
import voidW from "../../img/class-portrait/mini/VoidWarlock1-min.png"
import voidT from "../../img/class-portrait/mini/VoidTitan1-min.png"
import arcH from "../../img/class-portrait/mini/ArcHunter1-min.png"
import arcT from "../../img/class-portrait/mini/ArcTitan1-min.png"
import stasisH from "../../img/class-portrait/mini/StasisHunter1-min.png"
import stasisT from "../../img/class-portrait/mini/StasisTitan1-min.png"
// Cool webp images
import solarHwebp from "../../img/class-portrait/mini/SolarHunter1-min.webp"
import solarWwebp from "../../img/class-portrait/mini/SolarWarlock1-min.webp"
import solarTwebp from "../../img/class-portrait/mini/SolarTitan1-min.webp"
import strandHwebp from "../../img/class-portrait/mini/StrandHunter1-min.webp"
import strandTwebp from "../../img/class-portrait/mini/StrandTitan1-min.webp"
import voidHwebp from "../../img/class-portrait/mini/VoidHunter1-min.webp"
import voidWwebp from "../../img/class-portrait/mini/VoidWarlock1-min.webp"
import voidTwebp from "../../img/class-portrait/mini/VoidTitan1-min.webp"
import arcHwebp from "../../img/class-portrait/mini/ArcHunter1-min.webp"
import arcTwebp from "../../img/class-portrait/mini/ArcTitan1-min.webp"
import stasisHwebp from "../../img/class-portrait/mini/StasisHunter1-min.webp"
import stasisTwebp from "../../img/class-portrait/mini/StasisTitan1-min.webp"
// Element icons
import solarElement from "../../img/logo-icon/element-solar.png"
import arcElement from "../../img/logo-icon/element-arc.png"
import voidElement from "../../img/logo-icon/element-void.png"
import stasisElement from "../../img/logo-icon/element-stasis.png"
import strandElement from "../../img/logo-icon/element-strand.png"
import prismaticElement from "../../img/logo-icon/element-prismatic.png"

// Displays all the build cards that the sorting function decided to show
export default function BuildCards({buildId, tags, classImg, buildTitle, buildText, author, superImg, aspectImg1, aspectImg2, exoticImg}) {
  return (
    <div id="hover-wrapper" className="hover-wrapper">
      {author == undefined ? null : <div className="author"><Link target='_blank' to="https://www.youtube.com/@AztecrossGaming" aria-label="Link to aztecross youtube"></Link></div>}
      <Link to={{pathname: `/build-guide`, search: `name=${buildId}`}} className="build-wrapper">
        <div className="text">
          <div className="normal-info">
            <h3>{buildTitle}</h3>
            <hr className="largeLine"/>
            <hr className="smallLine"/>
            <p>{tags[0] == "HUNTER" ? "Hunter" : tags[0] == "WARLOCK" ? "Warlock" 
                                              : tags[0] == "TITAN" ? "Titan" : null} • {tags[1] == "SOLAR" ? <img src={solarElement} alt="Solar element icon" /> 
                                                                                                                      : tags[1] == "VOID" ? <img src={voidElement} alt="Void element icon" />
                                                                                                                      : tags[1] == "ARC" ? <img src={arcElement} alt="Arc element icon" />
                                                                                                                      : tags[1] == "STASIS" ? <img src={stasisElement} alt="Stasis element icon" />
                                                                                                                      : tags[1] == "STRAND" ? <img src={strandElement} alt="Strand element icon" /> 
                                                                                                                      : tags[1] == "PRISMATIC" ? <img src={prismaticElement} alt="Prismatic element icon" /> : null} • {tags[2]}</p>
            <p>{buildText}</p>
          </div>
        </div>
        <div className="image">
          { classImg == "solarH" ?
            <picture>
              <source type="image/webp" srcSet={solarHwebp} />
              <source type="image/png" srcSet={solarH} />
              <img loading="lazy" src={solarH} alt="Solar Hunter background"/>
            </picture> :
            classImg == "solarW" ?
            <picture>
              <source type="image/webp" srcSet={solarWwebp} />
              <source type="image/png" srcSet={solarW} />
              <img loading="lazy" src={solarW} alt="Solar Warlock background"/>
            </picture> :
            classImg == "solarT" ?
            <picture>
              <source type="image/webp" srcSet={solarTwebp} />
              <source type="image/png" srcSet={solarT} />
              <img loading="lazy" src={solarT} alt="Solar Titan background"/>
            </picture> :
            classImg == "strandH" ?
            <picture>
              <source type="image/webp" srcSet={strandHwebp} />
              <source type="image/png" srcSet={strandH} />
              <img loading="lazy" src={strandH} alt="Strand Hunter background"/>
            </picture> :
            classImg == "strandT" ?
            <picture>
              <source type="image/webp" srcSet={strandTwebp} />
              <source type="image/png" srcSet={strandT} />
              <img loading="lazy" src={strandT} alt="Strand Titan background"/>
            </picture> :
            classImg == "voidH" ?
            <picture>
              <source type="image/webp" srcSet={voidHwebp} />
              <source type="image/png" srcSet={voidH} />
              <img loading="lazy" src={voidH} alt="Void Hunter background"/>
            </picture> :
            classImg == "voidW" ?
            <picture>
              <source type="image/webp" srcSet={voidWwebp} />
              <source type="image/png" srcSet={voidW} />
              <img loading="lazy" src={voidW} alt="Void Warlock background"/>
            </picture> :
            classImg == "voidT" ?
            <picture>
              <source type="image/webp" srcSet={voidTwebp} />
              <source type="image/png" srcSet={voidT} />
              <img loading="lazy" src={voidT} alt="Void Titan background"/>
            </picture> :
            classImg == "arcH" ?
            <picture>
              <source type="image/webp" srcSet={arcHwebp} />
              <source type="image/png" srcSet={arcH} />
              <img loading="lazy" src={arcH} alt="Arc Hunter background"/>
            </picture> :
            classImg == "arcT" ?
            <picture>
              <source type="image/webp" srcSet={arcTwebp} />
              <source type="image/png" srcSet={arcT} />
              <img loading="lazy" src={arcT} alt="Arc Titan background"/>
            </picture> :
            classImg == "stasisH" ?
            <picture>
              <source type="image/webp" srcSet={stasisHwebp} />
              <source type="image/png" srcSet={stasisH} />
              <img loading="lazy" src={stasisH} alt="Stasis Hunter background"/>
            </picture> :
            classImg == "stasisT" ?
            <picture>
              <source type="image/webp" srcSet={stasisTwebp} />
              <source type="image/png" srcSet={stasisT} />
              <img loading="lazy" src={stasisT} alt="Stasis Titan background"/>
            </picture> :
            null
          }
          <div className="color-wrapper">
            <div className="image-info">
                <div className="img-container">
                    <img className="large-img" src={superImg} alt="The super used in the build"/>
                      <hr/>
                    <div className="images">
                      <img src={aspectImg1} alt="The first aspect of the build"/>
                      <img src={aspectImg2} alt="The second aspect of the build"/>
                      <img src={exoticImg} alt="The exotic armor used in the build"/>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}