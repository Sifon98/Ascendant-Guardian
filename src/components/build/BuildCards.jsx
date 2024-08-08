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
        <div className="image">
          { classImg == "solarH" ?
            <picture>
              <source type="image/webp" srcSet={solarHwebp} />
              <source type="image/png" srcSet={solarH} />
              <img className="testar" loading="lazy" src={solarH} />
            </picture> :
            classImg == "solarW" ?
            <picture>
              <source type="image/webp" srcSet={solarWwebp} />
              <source type="image/png" srcSet={solarW} />
              <img className="testar" loading="lazy" src={solarW} />
            </picture> :
            classImg == "solarT" ?
            <picture>
              <source type="image/webp" srcSet={solarTwebp} />
              <source type="image/png" srcSet={solarT} />
              <img className="testar" loading="lazy" src={solarT} />
            </picture> :
            classImg == "strandH" ?
            <picture>
              <source type="image/webp" srcSet={strandHwebp} />
              <source type="image/png" srcSet={strandH} />
              <img className="testar" loading="lazy" src={strandH} />
            </picture> :
            classImg == "strandT" ?
            <picture>
              <source type="image/webp" srcSet={strandTwebp} />
              <source type="image/png" srcSet={strandT} />
              <img className="testar" loading="lazy" src={strandT} />
            </picture> :
            classImg == "voidH" ?
            <picture>
              <source type="image/webp" srcSet={voidHwebp} />
              <source type="image/png" srcSet={voidH} />
              <img className="testar" loading="lazy" src={voidH} />
            </picture> :
            classImg == "voidW" ?
            <picture>
              <source type="image/webp" srcSet={voidWwebp} />
              <source type="image/png" srcSet={voidW} />
              <img className="testar" loading="lazy" src={voidW} />
            </picture> :
            classImg == "voidT" ?
            <picture>
              <source type="image/webp" srcSet={voidTwebp} />
              <source type="image/png" srcSet={voidT} />
              <img className="testar" loading="lazy" src={voidT} />
            </picture> :
            classImg == "arcH" ?
            <picture>
              <source type="image/webp" srcSet={arcHwebp} />
              <source type="image/png" srcSet={arcH} />
              <img className="testar" loading="lazy" src={arcH} />
            </picture> :
            classImg == "arcT" ?
            <picture>
              <source type="image/webp" srcSet={arcTwebp} />
              <source type="image/png" srcSet={arcT} />
              <img className="testar" loading="lazy" src={arcT} />
            </picture> :
            classImg == "stasisH" ?
            <picture>
              <source type="image/webp" srcSet={stasisHwebp} />
              <source type="image/png" srcSet={stasisH} />
              <img className="testar" loading="lazy" src={stasisH} />
            </picture> :
            classImg == "stasisT" ?
            <picture>
              <source type="image/webp" srcSet={stasisTwebp} />
              <source type="image/png" srcSet={stasisT} />
              <img className="testar" loading="lazy" src={stasisT} />
            </picture> :
            null
          }
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