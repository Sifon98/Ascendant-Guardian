import React from 'react'
import GuideCards from '../guide/GuideCards'

export default function GuideContainer({guideArray, selectActivity}) {
  return (
    <div className="guide-width">
      <div className="guide-container">
        {guideArray.map((data, i) => (
            selectActivity == "ANY ACTIVITY" ?
                <GuideCards key={i++} guideId={data.guideId} 
                    guideTitle={data.guideTitle} 
                    guideUnderTitle={data.guideUnderTitle} 
                    guideText={data.guideText} />
            : selectActivity == "RAIDS" && selectActivity == data.tag ? 
                <GuideCards key={i++} guideId={data.guideId} 
                    guideTitle={data.guideTitle} 
                    guideUnderTitle={data.guideUnderTitle} 
                    guideText={data.guideText} />
            : selectActivity == "DUNGEONS" && selectActivity == data.tag ? 
                <GuideCards key={i++} guideId={data.guideId} 
                    guideTitle={data.guideTitle} 
                    guideUnderTitle={data.guideUnderTitle} 
                    guideText={data.guideText} /> : null
            )
        )}
      </div>
    </div>
  )
}
