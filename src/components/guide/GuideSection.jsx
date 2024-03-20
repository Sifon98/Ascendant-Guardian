import React from 'react'
import parse from 'html-react-parser'
// Import gifs and images
import RedBorderGif from '../../img/Gif/Red-Border.gif'
import RedBorderGif1 from '../../img/Gif/Red-Border-1.gif'
import CataclysmRunner from '../../img/Gif/Cataclysm-Runner.gif'
import CataclysmOther from '../../img/Gif/Cataclysm-Psion-Tormentor.gif'
import IntroImg from '../../img/guide/light-node.png'
import TestImg from '../../img/guide/background.png'
import CataclysmMap from '../../img/guide/cataclysm-map.jpeg'
import FakeLoad from '../../img/guide/fake-load.png'

export default function GuideSection({data, imagePopUp, setImgCount, setImgLoadCount, loading}) {
  return (
    <section className={`${loading == false ? 'background-slide' : ''}`}>
        <div className={`wrapper ${loading == false ? 'content-fade' : ''}`}>
            <h3 className="medium-header">{parse(data.title)}</h3>
            <hr className="largeLine" />
            <hr className="smallLine" />
            <div className="info">
                <h3>GENERAL INFO</h3>
                <hr className="smallLine" />
                <p>{parse(data.text)}</p>
            </div>
            { data.underSection == undefined ? null : data.underSection.map((data, i) => (
                data.style == "style-noheader" ?
                    <div key={i}>
                    <div onLoad={() => setImgCount(prevImgCount => prevImgCount + 1)} className="fake-load"><img src={FakeLoad} alt="" /></div>
                    <div id={`${data.id == undefined ? null : data.id}`} className={data.style}>
                        <div className="text">
                            <p>{parse(data.text)}</p>
                        </div>
                        <div className="img">
                            {data.module ? 
                                data.image == "CataclysmMap" ? <img onLoad={() => setImgLoadCount(prevImgLoadCount => prevImgLoadCount + 1)} src={CataclysmMap} className="clickable" onClick={()=>{imagePopUp(CataclysmMap)}} /> 
                                : null 
                            : data.image == "LightNode" ? <img onLoad={() => setImgLoadCount(prevImgLoadCount => prevImgLoadCount + 1)} src={IntroImg}/> : null}
                            {data.href == undefined ? null : <p>Credit: <a href={data.href} target="_blank">{data.name}</a></p>}
                        </div>
                    </div>
                    </div> :
                data.style == "style-header" ?
                    <div key={i}>
                    <div onLoad={() => setImgCount(prevImgCount => prevImgCount + 1)} className="fake-load"><img src={FakeLoad} alt="" /></div>
                    <div id={`${data.id == undefined ? null : data.id}`} className={data.style}>
                        <div className="text">
                            <h3>{parse(data.title)}</h3>
                            <hr className="smallLine" />
                            <p>{parse(data.text)}</p>
                        </div>
                        <div className="img">
                            {data.image == "RootRedBorder" ? <img onLoad={() => setImgLoadCount(prevImgLoadCount => prevImgLoadCount + 1)} src={RedBorderGif} /> 
                            : data.image == "CataclysmRunner" ? <img onLoad={() => setImgLoadCount(prevImgLoadCount => prevImgLoadCount + 1)} src={CataclysmRunner} /> 
                            : data.image == "TestImg" ? <img onLoad={() => setImgLoadCount(prevImgLoadCount => prevImgLoadCount + 1)} src={TestImg} /> : null }
                        </div>
                    </div>
                    </div> :
                data.style == "style-header-inverted" ?
                    <div key={i}>
                    <div onLoad={() => setImgCount(prevImgCount => prevImgCount + 1)} className="fake-load"><img src={FakeLoad} alt="" /></div>
                    <div id={`${data.id == undefined ? null : data.id}`} className={data.style}>
                        <div className="img">
                            {data.image == "RootRedBorder1" ? <img onLoad={() => setImgLoadCount(prevImgLoadCount => prevImgLoadCount + 1)} src={RedBorderGif1} /> 
                            : data.image == "CataclysmOther" ? <img onLoad={() => setImgLoadCount(prevImgLoadCount => prevImgLoadCount + 1)} src={CataclysmOther} /> : null }
                        </div>
                        <div className="text">
                            <h3>{parse(data.title)}</h3>
                            <hr className="smallLine" />
                            <p>{parse(data.text)}</p>
                        </div>
                    </div>
                    </div> :
                data.style == "style-text" ?
                    <div key={i} id={`${data.id == undefined ? null : data.id}`} className={data.style}>
                        <h3>{parse(data.title)}</h3>
                        <hr className="smallLine" />
                        <p>{parse(data.text)}</p>
                    </div>
                : null
            ))}
        </div>
        <div id={`${data.fakeId == undefined ? null : data.fakeId}`} className="fake-block"/>
    </section>
  )
}
