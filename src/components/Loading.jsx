import React, { useState, useEffect } from 'react'
import '../scss/loading.scss'

export default function Loading({unload}) {
    // const [unload, setUnload] = useState(false);
    const [hunter, setHunter] = useState(false);
    const [warlock, setWarlock] = useState(false);
    const [titan, setTitan] = useState(false);

    useEffect(() => {
        setWarlock(true), setTitan(false), setHunter(false)
        setTimeout(() => {setWarlock(false), setTitan(true), setHunter(false)}, 2000)
        setTimeout(() => {setWarlock(false),setTitan(false), setHunter(true)}, 4000)
        setTimeout(() => {setWarlock(true), setTitan(false), setHunter(false)}, 6000)
        setTimeout(() => setInterval(() => {setWarlock(false), setTitan(true), setHunter(false)}, 6000), 2000)
        setTimeout(() => setInterval(() => {setWarlock(false),setTitan(false), setHunter(true)}, 6000), 4000)
        setTimeout(() => setInterval(() => {setWarlock(true), setTitan(false), setHunter(false)}, 6000), 6000)
        // setTimeout(() => {setUnload(true)}, 11000)
    }, [])

  return (
        <main className={`${unload && "unload"}`}>
            <div className="testermannen">
            <div className={`the-cade-6-unit-dank-af-anmation ${hunter == true ? "hunter" : '' } ${warlock == true ? "warlock" : '' } ${titan == true ? "titan" : '' }`}>
                <span className="circle circle--1"></span>
                <span className="circle circle--2"></span>
                <span className="circle circle--3"></span>
                <span className="circle circle--4"></span>
                <div className="line-group line-group--1">
                    <span className="line line--1"></span>
                    <span className="line line--2"></span>
                    <span className="line line--3"></span>
                    <span className="line line--4"></span>
                </div>
                <div className="line-group line-group--2">
                    <span className="line line--1"></span>
                    <span className="line line--2"></span>
                    <span className="line line--3"></span>
                    <span className="line line--4"></span>
                </div>
                <div className="line-group line-group--3">
                    <span className="line line--1"></span>
                    <span className="line line--2"></span>
                    <span className="line line--3"></span>
                    <span className="line line--4"></span>
                </div>
                <div className="shape-group">
                    <span className="shape shape--1"></span>
                    <span className="shape shape--2"></span>
                    <span className="shape shape--3"></span>
                    <span className="shape shape--4"></span>
                </div>
            </div>
            </div>
        </main>
  )
}
