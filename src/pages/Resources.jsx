import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import '../scss/resources.scss'
// Normal jpg images
import DimImg from '../img/resources/dim.jpg'
import ArmorImg from '../img/resources/d2armorpicker.png'
import LightImg from '../img/resources/light.jpg'
import StackingImg from '../img/resources/stacking.png'
import AegisImg from '../img/resources/aegis.png'
import BraytechImg from '../img/resources/braytech.jpg'
import RecipesImg from '../img/resources/recipes.png'
import SetsImg from '../img/resources/sets.png'
import TodayImg from '../img/resources/today.jpg'
import RaidImg from '../img/resources/raid.png'
import TrackerImg from '../img/resources/tracker.jpg'
import TrialsImg from '../img/resources/trials.png'
import WastedImg from '../img/resources/wasted.png'
import IshtarImg from '../img/resources/ishtar.jpg'
import ByfImg from '../img/resources/byf.jpg'
import MyelinImg from '../img/resources/myelin.jpg'
// Cool webp images
import DimImgwebp from '../img/resources/dim.webp'
import ArmorImgwebp from '../img/resources/d2armorpicker.webp'
import LightImgwebp from '../img/resources/light.webp'
import StackingImgwebp from '../img/resources/stacking.webp'
import AegisImgwebp from '../img/resources/aegis.webp'
import BraytechImgwebp from '../img/resources/braytech.webp'
import RecipesImgwebp from '../img/resources/recipes.webp'
import SetsImgwebp from '../img/resources/sets.webp'
import TodayImgwebp from '../img/resources/today.webp'
import RaidImgwebp from '../img/resources/raid.webp'
import TrackerImgwebp from '../img/resources/tracker.webp'
import TrialsImgwebp from '../img/resources/trials.webp'
import WastedImgwebp from '../img/resources/wasted.webp'
import IshtarImgwebp from '../img/resources/ishtar.webp'
import ByfImgwebp from '../img/resources/byf.webp'
import MyelinImgwebp from '../img/resources/myelin.webp'

export function Resources() {
  // Change variable depending on screen width
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]);

  const [navOpen, setNavOpen] = useState(0);

  const toggleNav = () => {
    if (navOpen == 0 || navOpen == 2) {
      setNavOpen(1)
    }
    else {
      setNavOpen(2)
    }
  }

  return (
    <div id="intro" className="resource-page">
      <div className="resource-page-container">
        { width > 768 ? 
        <div className="navigation-window">
          <div className="navigation background-slide">
            <div className="wrapper content-fade">
              <h3 className="navigator">THE NAVIGATOR</h3>
              <hr className="largeLine" />
              <hr className="smallLine" />
              <a href="#intro" className="nav-large">ESSENTIAL</a><br/>
              <a href="#collection" className="nav-large">COLLECTION</a><br/>
              <a href="#statistics" className="nav-large">STATISTICS</a><br/>
              <a href="#lore" className="nav-large">LORE</a><br/>
            </div>
          </div>
        </div> 
        : 
        <div className="nav-mobile">
          <div className={`nav-arrow ${navOpen == 0 ? '' : navOpen == 1 ? 'navOpenArrow' : 'navClosedArrow'}`} onClick={toggleNav}>
            <hr />
            <hr />
          </div>
          <div className={navOpen == 0 ? 'nav-temp' : navOpen == 1 ? 'navOpen' : 'navClosed'}>
            <div className="nav-menu">
              <a href="#intro" className="nav-large" onClick={toggleNav}>ESSENTIAL</a>
              <a href="#collection" className="nav-large" onClick={toggleNav}>COLLECTION</a>
              <a href="#statistics" className="nav-large" onClick={toggleNav}>STATISTICS</a>
              <a href="#lore" className="nav-large" onClick={toggleNav}>LORE</a>
            </div>
          </div>
        </div>
        }
        <div className="information">
          <section className="background-slide">
            <div className="wrapper content-fade">
              <h3 className="medium-header">ESSENTIAL</h3>
              <hr className="largeLine" />
              <hr className="smallLine" />
              <div className="info">
                <h3>GENERAL INFO</h3>
                <hr className="smallLine" />
                <p>There are a few <strong>websites</strong> and <strong>spreadsheets</strong> that i deem to be almost essential.
                  <strong> Destiny 2</strong> is a complicated game with a ton of information you need to learn but as
                  with most things, the <strong>D2 Community</strong> has you covered. These <strong>resources</strong> will all 
                  <strong> enhance</strong> your gameplay in various ways and when you start using them you won't be able to stop.
                </p>
              </div>
              <div className="style-header">
                  <div className="text">
                      <h3>DESTINY ITEM MANAGER</h3>
                      <hr className="smallLine" />
                      <p>Have you ever felt <strong>existential dread</strong> from going to the <strong>tower</strong> everytime you need something from your
                        <strong> vault</strong>? If so <strong>DIM</strong> solves that issue for you. You can seamlessly send <strong>weapons</strong> and
                        <strong> armor</strong> between all your <strong> characters</strong> and <strong>vault</strong> without the need to watch loading screens.
                      </p>
                  </div>
                  <div className="img">
                      <picture>
                        <source type="image/webp" srcSet={DimImgwebp} />
                        <source type="image/jpg" srcSet={DimImg} />
                        <img loading="lazy" src={DimImg} />
                      </picture>
                      <Link className="img-link" to="https://destinyitemmanager.com" target="_blank">
                        <span className="dim">GO TO PAGE</span>
                      </Link>
                  </div>
              </div>
              <div className="style-header-inverted">
                  <div className="img">
                    <picture>
                      <source type="image/webp" srcSet={ArmorImgwebp} />
                      <source type="image/png" srcSet={ArmorImg} />
                      <img loading="lazy" src={ArmorImg} />
                    </picture>
                    <Link className="img-link" to="https://d2armorpicker.com/#/" target="_blank">
                      <span className="armor">GO TO PAGE</span>
                    </Link>
                  </div>
                  <div className="text">
                      <h3>D2ARMORPICKER</h3>
                      <hr className="smallLine" />
                      <p>Optimizing your builds with armor that gives you <strong>great stats</strong> can be exhausting.
                        This is where <strong>D2ArmorPicker</strong> comes in to play. It <strong>scans</strong> your characters and vault to
                        present you with the <strong>perfect pieces</strong> for you <strong>desired build</strong>.
                      </p>
                  </div>
              </div>
              <div className="style-header">
                  <div className="text">
                      <h3>LIGHT.GG</h3>
                      <hr className="smallLine" />
                      <p><strong>Destiny 2</strong> has a huge number of <strong>weapons</strong> with a lot of different <strong>perks</strong>.
                        Keeping track of which of them are good can be quite daunting. <strong>Light.gg</strong> makes it easy to figure
                        out, simply search for a weapon and see all the <strong>possible rolls</strong> it can have and also what the
                        community considers the <strong>god roll</strong> to be.
                      </p>
                  </div>
                  <div className="img">
                      <picture>
                        <source type="image/webp" srcSet={LightImgwebp} />
                        <source type="image/jpg" srcSet={LightImg} />
                        <img loading="lazy" src={LightImg} />
                      </picture>
                      {/* <img src={LightImg} /> */}
                      <Link className="img-link" to="https://www.light.gg" target="_blank">
                        <span className="light">GO TO PAGE</span>
                      </Link>
                  </div>
              </div>
              <div className="style-header-inverted">
                  <div className="img">
                      <picture>
                        <source type="image/webp" srcSet={StackingImgwebp} />
                        <source type="image/png" srcSet={StackingImg} />
                        <img loading="lazy" src={StackingImg} />
                      </picture>
                      {/* <img src={StackingImg} /> */}
                      <Link className="img-link" to="https://docs.google.com/spreadsheets/d/1i1KUwgVkd8qhwYj481gkV9sZNJQCE-C3Q-dpQutPCi4" target="_blank">
                        <span className="stacking">GO TO PAGE</span>
                      </Link>
                  </div>
                  <div className="text">
                      <h3>COURT'S SPREADSHEETS</h3>
                      <hr className="smallLine" />
                      <p>The amount of <strong>buffs</strong> and <strong>debuffs</strong> in this game can be confusing.
                        With <strong>Court's</strong> help you will learn what <strong>stacks</strong> and <strong>doesn't stack</strong> along with
                        more useful information. If the <strong>huge amount</strong> of info somehow doesn't satisfy you check out this <a href="https://docs.google.com/spreadsheets/d/1WaxvbLx7UoSZaBqdFr1u32F2uWVLo-CJunJB4nlGUE4" target="_blank">spreadsheet</a> that 
                        goes through, among other things, <strong>mods</strong> and <strong>perks</strong>.
                      </p>
                  </div>
              </div>
              <div className="style-header">
                  <div className="text">
                      <h3>AEGIS'S SPREADSHEETS</h3>
                      <hr className="smallLine" />
                      <p>During your time in <strong>Destiny 2</strong> you will recieve many different weapons. Knowing which of these
                        are the <strong>best</strong> is not at all easy. With the help of <strong>Aegis</strong> and his <strong>tier lists </strong>
                        you will soon know which of your weapons are the best.
                      </p>
                  </div>
                  <div className="img">
                      <picture>
                        <source type="image/webp" srcSet={AegisImgwebp} />
                        <source type="image/png" srcSet={AegisImg} />
                        <img loading="lazy" src={AegisImg} />
                      </picture>
                      {/* <img src={AegisImg} /> */}
                      <Link className="img-link" to="https://drive.google.com/drive/folders/1AL3GM6rSSrm4LtSZeayxpSUsvSJdsiU3" target="_blank">
                        <span className="aegis">GO TO PAGE</span>
                      </Link>
                  </div>
              </div>
              <div className="style-header-inverted">
                  <div className="img">
                    <iframe src="https://open.spotify.com/embed/playlist/6qKIGSrWeqEGFo5HYQlBi4?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                  </div>
                  <div className="text">
                      <h3>GREAT MUSIC</h3>
                      <hr className="smallLine" />
                      <p>Everyone knows that music <strong>enhances</strong> your experience in games. <strong>Destiny</strong> already has great music
                        but if you want to listen to some <strong>other music</strong> as well or just your favorite <strong>Destiny</strong> tracks check
                        out my playlist with some more <strong>relaxing</strong> gaming music.
                      </p>
                  </div>
              </div>
            </div>
            <div id="collection" className="fake-block"/>
          </section>
          <section className="background-slide">
            <div className="wrapper content-fade">
              <h3 className="medium-header">COLLECTION</h3>
              <hr className="largeLine" />
              <hr className="smallLine" />
              <div className="info">
                <h3>GENERAL INFO</h3>
                <hr className="smallLine" />
                <p>For some of us collecting different <strong>armor</strong>, <strong>weapons</strong>, <strong>titles</strong>, <strong>triumphs </strong> 
                  and more can be the best part of the game. If this sounds like you I have a few <strong>websites</strong> that you want to 
                  look at. They will take your <strong>collection</strong> game in <strong>Destiny</strong> to the next level.
                </p>
              </div>
              <div className="style-header">
                  <div className="text">
                      <h3>BRAYTECH</h3>
                      <hr className="smallLine" />
                      <p>With <strong>Braytech</strong> you can track most things in the game.
                      </p>
                  </div>
                  <div className="img">
                      <picture>
                        <source type="image/webp" srcSet={BraytechImgwebp} />
                        <source type="image/jpg" srcSet={BraytechImg} />
                        <img loading="lazy" src={BraytechImg} />
                      </picture>
                      {/* <img src={BraytechImg} /> */}
                      <Link className="img-link" to="https://bray.tech" target="_blank">
                        <span className="braytech">GO TO PAGE</span>
                      </Link>
                  </div>
              </div>
              <div className="style-header-inverted">
                  <div className="img">
                      <picture>
                        <source type="image/webp" srcSet={RecipesImgwebp} />
                        <source type="image/png" srcSet={RecipesImg} />
                        <img loading="lazy" src={RecipesImg} />
                      </picture>
                      {/* <img src={RecipesImg} /> */}
                      <Link className="img-link" to="https://destinyrecipes.com" target="_blank">
                        <span className="recipes">GO TO PAGE</span>
                      </Link>
                  </div>
                  <div className="text">
                      <h3>DESTINY RECIPES</h3>
                      <hr className="smallLine" />
                      <p>Optimizing your builds with armor that gives you <strong>great stats</strong> can be <strong>exhausting</strong>.
                        This is where <strong>D2ArmorPicker</strong> comes in to play. It <strong>scans</strong> your characters and vault to
                        present you with the <strong>perfect pieces</strong> for you <strong>desired build</strong>.
                      </p>
                  </div>
              </div>
              <div className="style-header">
                  <div className="text">
                      <h3>DESTINY SETS</h3>
                      <hr className="smallLine" />
                      <p><strong>Destiny 2</strong> has a huge number of <strong>weapons</strong> with a lot of different <strong>perks</strong>. Keeping track
                        of which <strong>weapons</strong> and <strong>perks</strong> are good can be quite daunting. <strong>Light.gg</strong> makes it easy to figure
                        out, simply search for a weapon and see all the <strong>possible rolls</strong> it can have and also what the
                        community considers the <strong>god roll</strong> to be.
                      </p>
                  </div>
                  <div className="img">
                      <picture>
                        <source type="image/webp" srcSet={SetsImgwebp} />
                        <source type="image/png" srcSet={SetsImg} />
                        <img loading="lazy" src={SetsImg} />
                      </picture>
                      {/* <img src={SetsImg} /> */}
                      <Link className="img-link" to="https://destinysets.com" target="_blank">
                        <span className="sets">GO TO PAGE</span>
                      </Link>
                  </div>
              </div>
              <div className="style-header-inverted">
                  <div className="img">
                      <picture>
                        <source type="image/webp" srcSet={TodayImgwebp} />
                        <source type="image/jpg" srcSet={TodayImg} />
                        <img loading="lazy" src={TodayImg} />
                      </picture>
                      {/* <img src={TodayImg} /> */}
                      <Link className="img-link" to="https://www.todayindestiny.com" target="_blank">
                        <span className="today">GO TO PAGE</span>
                      </Link>
                  </div>
                  <div className="text">
                      <h3>TODAY IN DESTINY</h3>
                      <hr className="smallLine" />
                      <p>The amount of <strong>buffs</strong> and <strong>debuffs</strong> in this game can be confusing.
                        With <strong>Court's</strong> help you will learn what <strong>stacks</strong> and <strong>doesn't stack</strong> along with
                        more useful information. If the info from this <strong>spreadsheet</strong> doesn't satisfy you
                        check out this <a href="https://docs.google.com/spreadsheets/d/1WaxvbLx7UoSZaBqdFr1u32F2uWVLo-CJunJB4nlGUE4/edit#gid=1874108524" target="_blank">spreadsheet</a> that 
                        goes through, among other things, <strong>mods</strong> and <strong>perks</strong>.
                      </p>
                  </div>
              </div>
            </div>
            <div id="statistics" className="fake-block"/>
          </section>
          <section className="background-slide">
            <div className="wrapper content-fade">
              <h3 className="medium-header">STATISTICS</h3>
              <hr className="largeLine" />
              <hr className="smallLine" />
              <div className="info">
                <h3>GENERAL INFO</h3>
                <hr className="smallLine" />
                <p>These webistes and spreadsheets I deem to be pretty much essential. They will all enhance your
                  gameplay in various ways and when you start using them you won't be able to stop.
                </p>
              </div>
              <div className="style-header">
                  <div className="text">
                      <h3>RAID REPORT</h3>
                      <hr className="smallLine" />
                      <p>Have you ever felt <strong>existential dread</strong> from going to the <strong>tower</strong> everytime you need something from your <strong>vault</strong>?
                        If so <strong>DIM</strong> solves that issue for you. You can seamlessly send <strong>weapons</strong> and <strong>armor</strong> between all your
                        <strong> characters</strong> and <strong>vault</strong>.
                      </p>
                  </div>
                  <div className="img">
                      <picture>
                        <source type="image/webp" srcSet={RaidImgwebp} />
                        <source type="image/png" srcSet={RaidImg} />
                        <img loading="lazy" src={RaidImg} />
                      </picture>
                      {/* <img src={RaidImg} /> */}
                      <Link className="img-link" to="https://raid.report" target="_blank">
                        <span className="raid">GO TO PAGE</span>
                      </Link>
                  </div>
              </div>
              <div className="style-header-inverted">
                  <div className="img">
                      <picture>
                        <source type="image/webp" srcSet={TrackerImgwebp} />
                        <source type="image/jpg" srcSet={TrackerImg} />
                        <img loading="lazy" src={TrackerImg} />
                      </picture>
                      {/* <img src={TrackerImg} /> */}
                      <Link className="img-link" to="https://destinytracker.com" target="_blank">
                        <span className="tracker">GO TO PAGE</span>
                      </Link>
                  </div>
                  <div className="text">
                      <h3>DESTINY TRACKER</h3>
                      <hr className="smallLine" />
                      <p>Optimizing your builds with armor that gives you <strong>great stats</strong> can be <strong>exhausting</strong>.
                        This is where <strong>D2ArmorPicker</strong> comes in to play. It <strong>scans</strong> your characters and vault to
                        present you with the <strong>perfect pieces</strong> for you <strong>desired build</strong>.
                      </p>
                  </div>
              </div>
              <div className="style-header">
                  <div className="text">
                      <h3>TRIALS REPORT</h3>
                      <hr className="smallLine" />
                      <p><strong>Destiny 2</strong> has a huge number of <strong>weapons</strong> with a lot of different <strong>perks</strong>. Keeping track
                        of which <strong>weapons</strong> and <strong>perks</strong> are good can be quite daunting. <strong>Light.gg</strong> makes it easy to figure
                        out, simply search for a weapon and see all the <strong>possible rolls</strong> it can have and also what the
                        community considers the <strong>god roll</strong> to be.
                      </p>
                  </div>
                  <div className="img">
                      <picture>
                        <source type="image/webp" srcSet={TrialsImgwebp} />
                        <source type="image/png" srcSet={TrialsImg} />
                        <img loading="lazy" src={TrialsImg} />
                      </picture>
                      {/* <img src={TrialsImg} /> */}
                      <Link className="img-link" to="https://trials.report" target="_blank">
                        <span className="trials">GO TO PAGE</span>
                      </Link>
                  </div>
              </div>
              <div className="style-header-inverted">
                  <div className="img">
                      <picture>
                        <source type="image/webp" srcSet={WastedImgwebp} />
                        <source type="image/png" srcSet={WastedImg} />
                        <img loading="lazy" src={WastedImg} />
                      </picture>
                      {/* <img src={WastedImg} /> */}
                      <Link className="img-link" to="https://wastedondestiny.com" target="_blank">
                        <span className="wasted">GO TO PAGE</span>
                      </Link>
                  </div>
                  <div className="text">
                      <h3>TIME WASTED ON DESTINY</h3>
                      <hr className="smallLine" />
                      <p>The amount of <strong>buffs</strong> and <strong>debuffs</strong> in this game can be confusing.
                        With <strong>Court's</strong> help you will learn what <strong>stacks</strong> and <strong>doesn't stack</strong> along with
                        more useful information. If the info from this <strong>spreadsheet</strong> doesn't satisfy you
                        check out this <a href="https://docs.google.com/spreadsheets/d/1WaxvbLx7UoSZaBqdFr1u32F2uWVLo-CJunJB4nlGUE4/edit#gid=1874108524" target="_blank">spreadsheet</a> that 
                        goes through, among other things, <strong>mods</strong> and <strong>perks</strong>.
                      </p>
                  </div>
              </div>
            </div>
            <div id="lore" className="fake-block"/>
          </section>
          <section className="background-slide">
            <div className="wrapper content-fade">
              <h3 className="medium-header">LORE</h3>
              <hr className="largeLine" />
              <hr className="smallLine" />
              <div className="info">
                <h3>GENERAL INFO</h3>
                <hr className="smallLine" />
                <p>These webistes and spreadsheets I deem to be pretty much essential. They will all enhance your
                  gameplay in various ways and when you start using them you won't be able to stop.
                </p>
              </div>
              <div className="style-header">
                  <div className="text">
                      <h3>ISHTAR COLLECTIVE</h3>
                      <hr className="smallLine" />
                      <p>Have you ever felt <strong>existential dread</strong> from going to the <strong>tower</strong> everytime you need something from your <strong>vault</strong>?
                        If so <strong>DIM</strong> solves that issue for you. You can seamlessly send <strong>weapons</strong> and <strong>armor</strong> between all your
                        <strong> characters</strong> and <strong>vault</strong>.
                      </p>
                  </div>
                  <div className="img">
                      <picture>
                        <source type="image/webp" srcSet={IshtarImgwebp} />
                        <source type="image/jpg" srcSet={IshtarImg} />
                        <img loading="lazy" src={IshtarImg} />
                      </picture>
                      {/* <img src={IshtarImg} /> */}
                      <Link className="img-link" to="https://www.ishtar-collective.net" target="_blank">
                        <span className="ishtar">GO TO PAGE</span>
                      </Link>
                  </div>
              </div>
              <div className="style-header-inverted">
                  <div className="img">
                      <picture>
                        <source type="image/webp" srcSet={ByfImgwebp} />
                        <source type="image/jpg" srcSet={ByfImg} />
                        <img loading="lazy" src={ByfImg} />
                      </picture>
                      {/* <img src={ByfImg} /> */}
                      <Link className="img-link" to="https://www.youtube.com/@MynameisByf/featured" target="_blank">
                        <span className="byf">GO TO PAGE</span>
                      </Link>
                  </div>
                  <div className="text">
                      <h3>MY NAME IS BYF</h3>
                      <hr className="smallLine" />
                      <p>Optimizing your builds with armor that gives you <strong>great stats</strong> can be <strong>exhausting</strong>.
                        This is where <strong>D2ArmorPicker</strong> comes in to play. It <strong>scans</strong> your characters and vault to
                        present you with the <strong>perfect pieces</strong> for you <strong>desired build</strong>.
                      </p>
                  </div>
              </div>
              <div className="style-header">
                  <div className="text">
                      <h3>MYELIN GAMES</h3>
                      <hr className="smallLine" />
                      <p>Have you ever felt <strong>existential dread</strong> from going to the <strong>tower</strong> everytime you need something from your <strong>vault</strong>?
                        If so <strong>DIM</strong> solves that issue for you. You can seamlessly send <strong>weapons</strong> and <strong>armor</strong> between all your
                        <strong> characters</strong> and <strong>vault</strong>.
                      </p>
                  </div>
                  <div className="img">
                      <picture>
                        <source type="image/webp" srcSet={MyelinImgwebp} />
                        <source type="image/jpg" srcSet={MyelinImg} />
                        <img loading="lazy" src={MyelinImg} />
                      </picture>
                      {/* <img src={MyelinImg} /> */}
                      <Link className="img-link" to="https://www.youtube.com/c/MyelinGames/featured" target="_blank">
                        <span className="myelin">GO TO PAGE</span>
                      </Link>
                  </div>
              </div>
            </div>
            <div className="fake-block"/>
          </section>
        </div>
      </div>
    </div>
  )
}
