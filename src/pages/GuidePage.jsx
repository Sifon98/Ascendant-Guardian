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
        setTimeout(() => setImgCount(prevImgCount => prevImgCount - 5), 3000)
    }, [])

    useEffect(() => {
        imgCount == imgLoadCount ? (setUnload(() => true), setTimeout(() => setLoading(false), 500)) : null
        console.log(imgCount)
        console.log(imgLoadCount);
    }, [imgCount, imgLoadCount])

    // preGuideArray.map((data) => (
    //     console.log(data.guidePage)
    // ))

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
