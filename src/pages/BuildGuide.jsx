import React, {useState, useEffect} from 'react'
import { useSearchParams } from "react-router-dom"
import '../scss/builds.scss'
import HoverBox from '../components/HoverBox'
import { preBuildArray } from '../components/build/BuildArray'
import parse from 'html-react-parser'
import SvgPage from '../components/build/Svg'
// Gif importing
import arcHunter from '../img/Gif/arc-hunter.gif'
import voidHunter from '../img/Gif/void-hunter.gif'
import strandHunter from '../img/Gif/strand-hunter.gif'
import solarHunter from '../img/Gif/solar-hunter.gif'
import stasisHunter from '../img/Gif/stasis-hunter.gif'
import solarWarlock from '../img/Gif/solar-warlock.gif'
import arcWarlock from '../img/Gif/arc-warlock.gif'
import dim from '../img/logo-icon/dim-logo.png'
// Image importing for normal stuff
import solarH from "../img/class-portrait/SolarHunter1.png"
import solarW from "../img/class-portrait/SolarWarlock1.png"
import solarT from "../img/class-portrait/SolarTitan1.png"
import strandH from "../img/class-portrait/StrandHunter1.png"
import strandT from "../img/class-portrait/StrandTitan1.png"
import voidH from "../img/class-portrait/VoidHunter1.png"
import voidW from "../img/class-portrait/VoidWarlock1.png"
import voidT from "../img/class-portrait/VoidTitan1.png"
import arcH from "../img/class-portrait/ArcHunter1.png"
import arcT from "../img/class-portrait/ArcTitan1.png"
import stasisH from "../img/class-portrait/StasisHunter1.png"
import stasisT from "../img/class-portrait/StasisTitan1.png"
// Cooler image importing for webp
import solarHwebp from "../img/class-portrait/SolarHunter1.webp"
import solarWwebp from "../img/class-portrait/SolarWarlock1.webp"
import solarTwebp from "../img/class-portrait/SolarTitan1.webp"
import strandHwebp from "../img/class-portrait/StrandHunter1.webp"
import strandTwebp from "../img/class-portrait/StrandTitan1.webp"
import voidHwebp from "../img/class-portrait/VoidHunter1.webp"
import voidWwebp from "../img/class-portrait/VoidWarlock1.webp"
import voidTwebp from "../img/class-portrait/VoidTitan1.webp"
import arcHwebp from "../img/class-portrait/ArcHunter1.webp"
import arcTwebp from "../img/class-portrait/ArcTitan1.webp"
import stasisHwebp from "../img/class-portrait/StasisHunter1.webp"
import stasisTwebp from "../img/class-portrait/StasisTitan1.webp"

export function BuildGuide() {
  // Get the array with all the build info
  const [queryParameters] = useSearchParams()
  const urlBuildId = queryParameters.get('name')

  return (
    <>
    { preBuildArray == '' ? null :
    preBuildArray.map((data, i) => (
        data.buildId === urlBuildId ?
        <div key={i} className="build-guide-container">
            <div className="build-general">
                <section className="background-img">
                { data.classImg == "solarH" ?
                    <picture className="image-chooser">
                        <source type="image/webp" srcSet={solarHwebp} />
                        <source type="image/png" srcSet={solarH} />
                        <img className="testar" loading="lazy" src={solarH} />
                    </picture> :
                data.classImg == "solarW" ?
                    <picture className="image-chooser">
                        <source type="image/webp" srcSet={solarWwebp} />
                        <source type="image/png" srcSet={solarW} />
                        <img className="testar" loading="lazy" src={solarW} />
                    </picture> :
                data.classImg == "solarT" ?
                    <picture className="image-chooser">
                        <source type="image/webp" srcSet={solarTwebp} />
                        <source type="image/png" srcSet={solarT} />
                        <img className="testar" loading="lazy" src={solarT} />
                    </picture> :
                data.classImg == "strandH" ?
                    <picture className="image-chooser">
                        <source type="image/webp" srcSet={strandHwebp} />
                        <source type="image/png" srcSet={strandH} />
                        <img className="testar" loading="lazy" src={strandH} />
                    </picture> :
                data.classImg == "strandT" ?
                    <picture className="image-chooser">
                        <source type="image/webp" srcSet={strandTwebp} />
                        <source type="image/png" srcSet={strandT} />
                        <img className="testar" loading="lazy" src={strandT} />
                    </picture> :
                data.classImg == "voidH" ?
                    <picture className="image-chooser">
                        <source type="image/webp" srcSet={voidHwebp} />
                        <source type="image/png" srcSet={voidH} />
                        <img className="testar" loading="lazy" src={voidH} />
                    </picture> :
                data.classImg == "voidW" ?
                    <picture className="image-chooser">
                        <source type="image/webp" srcSet={voidWwebp} />
                        <source type="image/png" srcSet={voidW} />
                        <img className="testar" loading="lazy" src={voidW} />
                    </picture> :
                data.classImg == "voidT" ?
                    <picture className="image-chooser">
                        <source type="image/webp" srcSet={voidTwebp} />
                        <source type="image/png" srcSet={voidT} />
                        <img className="testar" loading="lazy" src={voidT} />
                    </picture> :
                data.classImg == "arcH" ?
                    <picture className="image-chooser">
                        <source type="image/webp" srcSet={arcHwebp} />
                        <source type="image/png" srcSet={arcH} />
                        <img className="testar" loading="lazy" src={arcH} />
                    </picture> :
                data.classImg == "arcT" ?
                    <picture className="image-chooser">
                        <source type="image/webp" srcSet={arcTwebp} />
                        <source type="image/png" srcSet={arcT} />
                        <img className="testar" loading="lazy" src={arcT} />
                    </picture> :
                data.classImg == "stasisH" ?
                    <picture className="image-chooser">
                        <source type="image/webp" srcSet={stasisHwebp} />
                        <source type="image/png" srcSet={stasisH} />
                        <img className="testar" loading="lazy" src={stasisH} />
                    </picture> :
                data.classImg == "stasisT" ?
                    <picture className="image-chooser">
                        <source type="image/webp" srcSet={stasisTwebp} />
                        <source type="image/png" srcSet={stasisT} />
                        <img className="testar" loading="lazy" src={stasisT} />
                    </picture> 
                : null }
                    <div className="above-layer">
                        <div className="shared-container">
                            <h3>{ parse(data.buildGuide.title) }</h3>
                            <hr className="largeLine" />
                            <hr className="smallLine" />
                            <div className="info-container">
                                <div className="row">
                                    <div className="item">
                                        <h3>SUPER</h3>
                                        <hr className="smallLine" />
                                        <HoverBox image={data.buildGuide.superGuide.superImg} title={data.buildGuide.superGuide.superTitle} text={data.buildGuide.superGuide.superText} superImg={true}/>
                                    </div>
                                    <div className="item">
                                        <h3>ABILITIES</h3>
                                        <hr className="smallLine" />
                                        <div className="item-row">
                                        {data.buildGuide.abilitiesGuide.map((boxInfo, i) => (
                                            data.tags[1] == "STRAND" ?
                                            <HoverBox key={i} image={boxInfo.abilityImg} title={boxInfo.abilityTitle} text={boxInfo.abilityText} strand={true}/>
                                            : <HoverBox key={i} image={boxInfo.abilityImg} title={boxInfo.abilityTitle} text={boxInfo.abilityText}/>
                                        ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="item">
                                        <h3>ASPECTS</h3>
                                        <hr className="smallLine" />
                                        <div className="item-row">
                                            {data.buildGuide.aspectsGuide.map((boxInfo, i) => (
                                                <HoverBox key={i} image={boxInfo.aspectImg} title={boxInfo.aspectTitle} text={boxInfo.aspectText} />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="item">
                                        <h3>FRAGMENTS</h3>
                                        <hr className="smallLine" />
                                        <div className="item-row">
                                            {data.buildGuide.fragmentsGuide.map((boxInfo, i) => (
                                                <HoverBox key={i} image={boxInfo.fragmentImg} title={boxInfo.fragmentTitle} text={boxInfo.fragmentText} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="item">
                                        <h3>BUILD SUMMARY</h3>
                                        <hr className="smallLine" />
                                        <p>{parse(data.buildGuide.buildSummary)}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="item">
                                        <a target="_blank" href="https://app.destinyitemmanager.com/4611686018471237512/d2/inventory" className="button"><img src={dim}/>DIM LINK</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="equipment-container">
                    <div className="shared-container equipment">
                        <h3>EQUIPMENT</h3>
                        <hr className="largeLine" />
                        <hr className="smallLine" />
                        <div className="info-container">
                        <div className="row">
                            <div className="item">
                                <h3>WEAPONS</h3>
                                <hr className="smallLine" />
                                <div className="item-row">
                                    {data.buildGuide.weapons.map((weaponInfo, i) => (
                                        <div key={i} className="multiple-items">
                                            {weaponInfo.map((weaponInfo, i) => (
                                                <HoverBox key={i} i={i} image={weaponInfo.weaponImg} title={weaponInfo.weaponTitle} energy={weaponInfo.energy} text={weaponInfo.weaponText} />
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="item text-item">
                                <h3>FURTHER INFO</h3>
                                <hr className="smallLine" />
                                <p>{parse(data.buildGuide.weaponInfo)}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="item">
                                <h3>EXOTIC</h3>
                                <hr className="smallLine" />
                                <div className="item-row">
                                    <div className="multiple-items">
                                        {data.buildGuide.exotic.exoticRow.map((boxInfo, i) => (
                                            <HoverBox key={i} i={i} image={boxInfo.exoticImg} title={boxInfo.exoticTitle} text={boxInfo.exoticText} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="item text-item">
                                <h3>FURTHER INFO</h3>
                                <hr className="smallLine" />
                                <p>{parse(data.buildGuide.exotic.info)}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="item">
                                <h3>ARMOR MODS</h3>
                                <hr className="smallLine" />
                            </div>
                        </div>
                        <div className="row mod-row">
                            <div className="item">
                                <h4>HEAD</h4>
                                <div className="item-row">
                                    <div className="multiple-items">
                                        {data.buildGuide.armor.head.map((boxInfo, i) => (
                                            <HoverBox key={i} image={boxInfo.modImg} title={boxInfo.modTitle} text={boxInfo.modText} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <h4>ARMS</h4>
                                <div className="item-row">
                                    <div className="multiple-items">
                                        {data.buildGuide.armor.arms.map((boxInfo, i) => (
                                            <HoverBox key={i} image={boxInfo.modImg} title={boxInfo.modTitle} text={boxInfo.modText} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mod-row">
                            <div className="item">
                                <h4>CHEST <i>(Your choice)</i></h4>
                                <div className="item-row">
                                    <div className="multiple-items">
                                        {data.buildGuide.armor.chest.map((boxInfo, i) => (
                                            <HoverBox key={i} image={boxInfo.modImg} title={boxInfo.modTitle} text={boxInfo.modText} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <h4>LEGS</h4>
                                <div className="item-row">
                                    <div className="multiple-items">
                                        {data.buildGuide.armor.legs.map((boxInfo, i) => (
                                            <HoverBox key={i} image={boxInfo.modImg} title={boxInfo.modTitle} text={boxInfo.modText} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mod-row">
                            <div className="item">
                                <h4>CLASS ITEM</h4>
                                <div className="item-row">
                                    <div className="multiple-items">
                                        {data.buildGuide.armor.class.map((boxInfo, i) => (
                                            <HoverBox key={i} image={boxInfo.modImg} title={boxInfo.modTitle} text={boxInfo.modText} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <h4>STATS</h4>
                                <div className="item-row">
                                    <div className="multiple-items svg-row">
                                        {data.buildGuide.armorStats.map((svg, i) => (
                                            <SvgPage key={i} i={i} pickSvg={svg} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></div>
                </section>
            </div>
            <div className="build-guide">
                {/* <img src={logoHunter} alt="" className="logo-bg" /> */}
                <section>
                    <h3>GAMEPLAY AND TIPS</h3>
                    <hr className="largeLine" />
                    <hr className="smallLine" />
                    <div className="guide-container">
                        <div className="row">
                            <div className="item start-item">
                                <h3>GENERAL</h3>
                                <hr className="smallLine" />
                                <p>{parse(data.buildGuide.gameplay.general)}</p>
                            </div>
                            <div className="item">
                                <h3>EXOTIC</h3>
                                <hr className="smallLine" />
                                <p>{parse(data.buildGuide.gameplay.exotic)}</p>
                            </div>
                            <div className="item last-text">
                                <h3>ENDGAME</h3>
                                <hr className="smallLine" />
                                <p>{parse(data.buildGuide.gameplay.endgame)}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="item start-item">
                                { data.buildGuide.gameplay.gif == "arcHunterGif" ? <img src={arcHunter}/>
                                : data.buildGuide.gameplay.gif == "voidHunterGif" ? <img src={voidHunter}/>
                                : data.buildGuide.gameplay.gif == "strandHunterGif" ? <img src={strandHunter}/>
                                : data.buildGuide.gameplay.gif == "solarHunterGif" ? <img src={solarHunter}/>
                                : data.buildGuide.gameplay.gif == "stasisHunterGif" ? <img src={stasisHunter}/>
                                : data.buildGuide.gameplay.gif == "solarWarlockGif" ? <img src={solarWarlock}/>
                                : data.buildGuide.gameplay.gif == "arcWarlockGif" ? <img src={arcWarlock}/>
                                : null }
                            </div>
                            <div className="item">
                                <h3>GAMEPLAY LOOP</h3>
                                <hr className="smallLine" />
                                <ul>
                                    {data.buildGuide.gameplay.loop.map((boxInfo, i) => (
                                        <li key={i}>{parse(boxInfo)}</li>
                                    ))}
                                    <p>{parse(data.buildGuide.gameplay.loopEnd)}</p>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div> : null)
        )}
    </>
  )
}
