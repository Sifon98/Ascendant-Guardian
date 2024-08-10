import React, { useEffect, useState, useRef } from 'react'
import '../scss/home.scss'
import { Link } from "react-router-dom"
// Images for the page landing
import Ennead from "../img/home/ennead.jpg"
import Ennead1920 from "../img/home/ennead-1920w.jpg"
import EnneadMobile from "../img/home/ennead-mobile.jpg"
import Enneadwebp from "../img/home/ennead.webp"
import Ennead1920webp from "../img/home/ennead-1920w.webp"
import EnneadMobilewebp from "../img/home/ennead-mobile.webp"
// Images for the pages builds section
import Card1 from "../img/class-portrait/mini/SolarHunter1-min.png"
import Card2 from "../img/class-portrait/mini/StrandTitan1-min.png"
import Card3 from "../img/class-portrait/mini/StasisHunter1-min.png"
import Card4 from "../img/class-portrait/mini/VoidWarlock1-min.png"
import Card1webp from "../img/class-portrait/mini/SolarHunter1-min.webp"
import Card2webp from "../img/class-portrait/mini/StrandTitan1-min.webp"
import Card3webp from "../img/class-portrait/mini/StasisHunter1-min.webp"
import Card4webp from "../img/class-portrait/mini/VoidWarlock1-min.webp"
// Images for the pages raids section
import RaidCard1 from "../img/home/kings-art.jpg"
import RaidCard2 from "../img/home/vault-art.jpg"
import RaidCard3 from "../img/home/crota-art.jpg"
import RaidCard1webp from "../img/home/kings-art.webp"
import RaidCard2webp from "../img/home/vault-art.webp"
import RaidCard3webp from "../img/home/crota-art.webp"
// Images for the pages resources section
import ResCard1 from "../img/resources/dim.jpg"
import ResCard2 from "../img/resources/d2armorpicker.png"
import ResCard3 from "../img/resources/ishtar.jpg"
import ResCard4 from "../img/resources/raid.png"
import ResCard1webp from "../img/resources/dim.webp"
import ResCard2webp from "../img/resources/d2armorpicker.webp"
import ResCard3webp from "../img/resources/ishtar.webp"
import ResCard4webp from "../img/resources/raid.webp"

export function Home() {
  const containerRef = useRef(null)
  const containerRaidRef = useRef(null)
  const containerResourceRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  // A callback function that sets the state to true or false depending on if element is visible
  const callbackFunction = (entries) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  const callbackFunction1 = (entries) => {
    const [entry] = entries
    setIsVisible1(entry.isIntersecting)
  }

  const callbackFunction2 = (entries) => {
    const [entry] = entries
    setIsVisible2(entry.isIntersecting)
  }

  // Options for the observer
  const options = {
    threshold: 0.6
  }

  // Create/remove the observer
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
    
  }, [containerRef, options]);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction1, options)
    if (containerRaidRef.current) {
      observer.observe(containerRaidRef.current)
    }

    return () => {
      if (containerRaidRef.current) {
        observer.unobserve(containerRaidRef.current)
      }
    }
    
  }, [containerRaidRef, options]);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction2, options)
    if (containerResourceRef.current) {
      observer.observe(containerResourceRef.current)
    }

    return () => {
      if (containerResourceRef.current) {
        observer.unobserve(containerResourceRef.current)
      }
    }
    
  }, [containerResourceRef, options]);

  return (
    <>
      <div className="background-color">
        <div className="landing">
          <picture>
            <source
              type="image/webp"
              srcSet={`${EnneadMobilewebp} 608w, ${Ennead1920webp} 1920w, ${Enneadwebp} 2000w`}
            />
            <img
              src={Ennead1920}
              srcSet={`${EnneadMobile} 608w, ${Ennead1920} 1920w, ${Ennead} 2000w`}
              alt="wow an image"
            />
          </picture>
          <div className="text-box">
            <div className="text-wrapper">              
              <p>Builds <span>/</span>/ Guides <span>/</span>/ Resources</p>
              <h2>ASCENDANT GUARDIAN</h2>
            </div>
            <a href="#builds" >
              <div className="circular-box">
                <div className="arrow"/>
              </div>
            </a>
            <div className="landing-hover-box">
              <div className="line-wrapper">
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" id="builds">
        <section ref={containerRef}>
          <div className="cards">
            <picture className={`card ${isVisible ? 'transform' : ''}`}>
              <source type="image/webp" srcSet={Card1webp} />
              <source type="image/png" srcSet={Card1} />
              <img loading="lazy" src={Card1} />
            </picture>
            <picture className={`card ${isVisible ? 'transform' : ''}`} >
              <source type="image/webp" srcSet={Card2webp} />
              <source type="image/png" srcSet={Card2} />
              <img loading="lazy" src={Card2} />
            </picture>
            <picture className={`card ${isVisible ? 'transform' : ''}`}>
              <source type="image/webp" srcSet={Card3webp} />
              <source type="image/png" srcSet={Card3} />
              <img loading="lazy" src={Card3}  />
            </picture>
            <picture className={`card ${isVisible ? 'transform' : ''}`}>
              <source type="image/webp" srcSet={Card4webp} />
              <source type="image/png" srcSet={Card4} />
              <img loading="lazy" src={Card4}  />
            </picture>
          </div>
          <div className="info">
            <div className="text-container">
              <h2>BUILDS</h2>
              <hr />
              <p>Here you can find builds for <strong>Hunters, Warlocks</strong> and <strong>Titans</strong>.<br/><br/>
                You will learn what <strong>abilites</strong> to use, which the best <strong>exotics</strong>, <strong>weapons</strong> and <strong>mods</strong> are for your chosen build.
                After that you will recieve <strong>detailed instructions</strong> with tips for <strong>endgame</strong> and alternative variants for the builds.
              </p>
              <Link to="/builds" className="button">READ MORE</Link>
            </div>
          </div>
        </section>
        <section ref={containerRaidRef}>
          <div className="info">
            <div className="text-container">
              <h2>GUIDES</h2>
              <hr />
              <p>If you need guidance in <strong>Raids</strong> or <strong>Dungeons</strong> you can find help here.<br/><br/>
                The guides go over everything you would need to know. This includes <strong>Encounters</strong>, <strong>Challenges</strong>
                , <strong>Red Border Puzzles</strong> and <strong>Secret Chests</strong>. The instructions are easy to read yet still detailed 
                with <strong>images</strong> and <strong>GIFs</strong> to make it easier to understand.
              </p>
              <Link to="/guides" className="button">READ MORE</Link>
            </div>
          </div>
          <div className="raid-showcase">
            <picture className={`raid ${isVisible1 ? 'transform-raid' : ''}`}>
              <source type="image/webp" srcSet={RaidCard1webp} />
              <source type="image/jpg" srcSet={RaidCard1} />
              <img loading="lazy" src={RaidCard1} />
            </picture>
            <picture className={`raid ${isVisible1 ? 'transform-raid' : ''}`} >
              <source type="image/webp" srcSet={RaidCard2webp} />
              <source type="image/jpg" srcSet={RaidCard2} />
              <img loading="lazy" src={RaidCard2} />
            </picture>
            <picture className={`raid ${isVisible1 ? 'transform-raid' : ''}`}>
              <source type="image/webp" srcSet={RaidCard3webp} />
              <source type="image/jpg" srcSet={RaidCard3} />
              <img loading="lazy" src={RaidCard3}  />
            </picture>
          </div>
        </section>
        <section ref={containerResourceRef} className="resource-section">
          <div className="resource-showcase">
            <picture className={`resource ${isVisible2 ? 'transform-resource' : ''}`}>
              <source type="image/webp" srcSet={ResCard1webp} />
              <source type="image/jpg" srcSet={ResCard1} />
              <img loading="lazy" src={ResCard1} />
            </picture>
            <picture className={`resource ${isVisible2 ? 'transform-resource' : ''}`} >
              <source type="image/webp" srcSet={ResCard2webp} />
              <source type="image/png" srcSet={ResCard2} />
              <img loading="lazy" src={ResCard2} />
            </picture>
            <picture className={`resource ${isVisible2 ? 'transform-resource' : ''}`}>
              <source type="image/webp" srcSet={ResCard3webp} />
              <source type="image/jpg" srcSet={ResCard3} />
              <img loading="lazy" src={ResCard3}  />
            </picture>
            <picture className={`resource ${isVisible2 ? 'transform-resource' : ''}`}>
              <source type="image/webp" srcSet={ResCard4webp} />
              <source type="image/png" srcSet={ResCard4} />
              <img loading="lazy" src={ResCard4}  />
            </picture>
          </div>
          <div className="info">
            <div className="text-container">
              <h2>RESOURCES</h2>
              <hr />
              <p>To become the very best in <strong>Destiny</strong> you will need some help.<br/><br/>
                The <strong>D2 community</strong> is one of the best in gaming and have created various <strong>sites</strong> and <strong>spreadsheets</strong> for anyone to use.
                This includes sites that allow you to <strong>equip</strong> any items from your <strong>vault</strong> or other <strong>characters</strong> to sites that <strong>optimize</strong> your <strong>builds</strong> further.
              </p>
              <Link to="/resources" className="button">READ MORE</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}