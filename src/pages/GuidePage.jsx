import React, {useState, useEffect} from 'react'
import { preGuideArray } from '../components/guide/GuideArray'
import { useSearchParams } from "react-router-dom"
import GuideSection from '../components/guide/GuideSection'
import Loading from '../components/Loading'

export function GuidePage() {
    // Used for loading screen
    const [imgCount, setImgCount] = useState(10);
    const [imgLoadCount, setImgLoadCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [unload, setUnload] = useState(false);
    // Image Popups
    const [popUp, setPopUp] = useState();
    const [imgUrl, setImgUrl] = useState('');
    // Navigation Array
    const [navArray, setNavArray] = useState();
    // Get the array with all the guide info
    const [queryParameters] = useSearchParams()
    const urlGuideId = queryParameters.get('name')

    const imagePopUp = (name) => {
        setImgUrl(name)

        setPopUp(!popUp)
    }

    useEffect(() => {
        //change to - 10 when going live
        setTimeout(() => setImgCount(prevImgCount => prevImgCount - 10), 3000)
    }, [])

    useEffect(() => {
        imgCount == imgLoadCount ? (setUnload(() => true), setTimeout(() => setLoading(false), 500)) : null
    }, [imgCount, imgLoadCount])

    // preGuideArray.map((data) => (
    //     console.log(data.guidePage)
    // ))

    // Change variable depending on screen width
    const [widthGuide, setWidthGuide] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWidthGuide(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [window.innerWidth]);

    const [navOpenGuide, setNavOpenGuide] = useState(0);

    const toggleNavGuide = () => {
        if (navOpenGuide == 0 || navOpenGuide == 2) {
            setNavOpenGuide(1)
        }
        else {
            setNavOpenGuide(2)
        }
    }

  return (
    <>
    { loading && <Loading unload={unload}/> }
    { preGuideArray.map((data, i) => (
        data.guideId === urlGuideId ?
        <div key={i} id="intro" className="guide-page">
            <div className={`modal ${popUp == undefined ? '' : popUp ? 'active' : 'inactive'}`} onClick={()=>{setPopUp(!popUp)}}>
                <img src={imgUrl} alt="Popup image, can be different" />
            </div>
            <div className="guide-page-container">
                { widthGuide > 768 ?
                <div className="navigation-window">
                    <div className={`navigation ${loading == false ? 'background-slide' : ''}`}>
                        <div className={`wrapper ${loading == false ? 'content-fade' : ''}`}>
                            <h3>THE NAVIGATOR</h3>
                            <hr className="largeLine" />
                            <hr className="smallLine" />
                            { data.guidePage.navigation.map((data, i) => (
                                <div key={i}><a href={data.href} className={data.class}>{data.text}</a><br/></div>
                            ))}
                        </div>
                    </div>
                </div>
                : 
                <div className="nav-mobile">
                    <div className={`nav-arrow ${navOpenGuide == 0 ? '' : navOpenGuide == 1 ? 'navOpenArrow' : 'navClosedArrow'}`} onClick={toggleNavGuide}>
                        <hr />
                        <hr />
                    </div>
                    <div className={navOpenGuide == 0 ? 'nav-temp' : navOpenGuide == 1 ? 'navOpen' : 'navClosed'}>
                        <div className="nav-menu">
                            { data.guidePage.navigation.map((data, i) => (
                                <div key={i}><a href={data.href} onClick={toggleNavGuide} className={data.class}>{data.text}</a><br/></div>
                            ))}
                        </div>
                    </div>
                </div> 
                }
                <div className="information">
                    { data.guidePage.section.map((data, i) => (
                        <GuideSection key={i} data={data} imagePopUp={imagePopUp} setImgCount={setImgCount} setImgLoadCount={setImgLoadCount} loading={loading}/>
                    ))}
                </div>
            </div>
        </div> : null
    ))}
    </>
  )
}
