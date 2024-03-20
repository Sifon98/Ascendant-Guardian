import React from 'react'
import Zavala from '../img/logo-icon/zavala.png'
import { Link } from "react-router-dom"

export function Page404() {
  return (
    <div className="page-404">
        <div className="container-404">
            <div className="row">
                <h2>404</h2>
                <p>The page you were looking for doesn't exist, perhaps Savathûn whisked it away. If this was an issue on my end please reach out! Otherwise let's go back to a page that exists.</p>
                <Link to="/" className="button">HOME</Link>
            </div>
            <img src={Zavala} alt="Sticker of Zavala facepalming" />
        </div>
    </div>
  )
}
