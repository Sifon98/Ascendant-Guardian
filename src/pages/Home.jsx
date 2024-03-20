import React, { useEffect, useState, useRef } from 'react'
import '../scss/home.scss'
import { Link } from "react-router-dom"

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
          <div className="text-box">
            <h2>ASCENDANT GUARDIAN</h2>
            {/* <hr className="large-line"/>
            <hr/> */}
            <p><i>Get ready for your <strong>ascension</strong> guardian, builds and guides to help with your <strong>journey</strong></i></p>
            <div className="arrow-box">
              <a href="#builds" className="arrow"></a>
            </div>
          </div>
        </div>
      </div>
      <div className="container" id="builds">
        <section ref={containerRef}>
          <div className="cards">
            <div className={`card ${isVisible ? 'transform' : ''}`} />
            <div className={`card ${isVisible ? 'transform' : ''}`} />
            <div className={`card ${isVisible ? 'transform' : ''}`} />
            <div className={`card ${isVisible ? 'transform' : ''}`} />
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
        <section ref={containerRaidRef} className="guide-section">
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
            <div className={`raid ${isVisible1 ? 'transform-raid' : ''}`} />
            <div className={`raid ${isVisible1 ? 'transform-raid' : ''}`} />
            <div className={`raid ${isVisible1 ? 'transform-raid' : ''}`} />
          </div>
        </section>
        <section ref={containerResourceRef} className="resource-section">
          <div className="resource-showcase">
            <div className={`resource ${isVisible2 ? 'transform-resource' : ''}`} />
            <div className={`resource ${isVisible2 ? 'transform-resource' : ''}`} />
            <div className={`resource ${isVisible2 ? 'transform-resource' : ''}`} />
            <div className={`resource ${isVisible2 ? 'transform-resource' : ''}`} />
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