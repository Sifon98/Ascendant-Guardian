import React from 'react'
import BuildCards from '../build/BuildCards'

function BuildsContainer({buildArray, selectClass, selectSubclass, selectActivity}) {
  // My kinda large sorting function
  return (
    <div className="build-width">
      <div className="build-container">
        {buildArray.map((data, i) => (
          selectClass == "ANY CLASS" && selectSubclass == "ANY SUBCLASS" && selectActivity == "ANY ACTIVITY" ? 
            <BuildCards key={i++} buildId={data.buildId} tags={data.tags} classImg={data.classImg}
              buildTitle={data.buildTitle}
              buildText={data.buildText}
              author={data.author}
              superImg={data.superImg}
              aspectImg1={data.aspectImg1}
              aspectImg2={data.aspectImg2}
              exoticImg={data.exoticImg}
            /> : selectClass == data.tags[0] && selectSubclass == "ANY SUBCLASS" && selectActivity == "ANY ACTIVITY" ? 
            <BuildCards key={i++} buildId={data.buildId} tags={data.tags} classImg={data.classImg}
              buildTitle={data.buildTitle}
              buildText={data.buildText}
              author={data.author}
              superImg={data.superImg}
              aspectImg1={data.aspectImg1}
              aspectImg2={data.aspectImg2}
              exoticImg={data.exoticImg}
            /> : selectClass == "ANY CLASS" && selectSubclass == data.tags[1] && selectActivity == "ANY ACTIVITY" ? 
            <BuildCards key={i++} buildId={data.buildId} tags={data.tags} classImg={data.classImg}
              buildTitle={data.buildTitle}
              buildText={data.buildText}
              author={data.author}
              superImg={data.superImg}
              aspectImg1={data.aspectImg1}
              aspectImg2={data.aspectImg2}
              exoticImg={data.exoticImg} 
            /> : selectClass == "ANY CLASS" && selectSubclass == "ANY SUBCLASS" && selectActivity == data.tags[2] ? 
            <BuildCards key={i++} buildId={data.buildId} tags={data.tags} classImg={data.classImg}
              buildTitle={data.buildTitle}
              buildText={data.buildText}
              author={data.author}
              superImg={data.superImg}
              aspectImg1={data.aspectImg1}
              aspectImg2={data.aspectImg2}
              exoticImg={data.exoticImg} 
            /> : selectClass == data.tags[0] && selectSubclass == data.tags[1] && selectActivity == "ANY ACTIVITY" ? 
            <BuildCards key={i++} buildId={data.buildId} tags={data.tags} classImg={data.classImg}
              buildTitle={data.buildTitle}
              buildText={data.buildText}
              author={data.author}
              superImg={data.superImg}
              aspectImg1={data.aspectImg1}
              aspectImg2={data.aspectImg2}
              exoticImg={data.exoticImg} 
            /> : selectClass == "ANY CLASS" && selectSubclass == data.tags[1] && selectActivity == data.tags[2] ? 
            <BuildCards key={i++} buildId={data.buildId} tags={data.tags} classImg={data.classImg}
              buildTitle={data.buildTitle}
              buildText={data.buildText}
              author={data.author}
              superImg={data.superImg}
              aspectImg1={data.aspectImg1}
              aspectImg2={data.aspectImg2}
              exoticImg={data.exoticImg} 
            /> : selectClass == data.tags[0] && selectSubclass == "ANY SUBCLASS" && selectActivity == data.tags[2] ? 
            <BuildCards key={i++} buildId={data.buildId} tags={data.tags} classImg={data.classImg}
              buildTitle={data.buildTitle}
              buildText={data.buildText}
              author={data.author}
              superImg={data.superImg}
              aspectImg1={data.aspectImg1}
              aspectImg2={data.aspectImg2}
              exoticImg={data.exoticImg} 
            /> : selectClass == data.tags[0] && selectSubclass == data.tags[1] && selectActivity == data.tags[2] ? 
            <BuildCards key={i++} buildId={data.buildId} tags={data.tags} classImg={data.classImg}
              buildTitle={data.buildTitle}
              buildText={data.buildText}
              author={data.author}
              superImg={data.superImg}
              aspectImg1={data.aspectImg1}
              aspectImg2={data.aspectImg2}
              exoticImg={data.exoticImg} 
            /> : null
          )
        )}
      </div>
    </div>
  )
}

export default BuildsContainer