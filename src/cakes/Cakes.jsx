import React from 'react'

import './CakeCard.css'
import roseLychee from '../images/cakes/roseLychee.jpg'
import yuzuRaspberry from '../images/cakes/yuzuRaspberry.jpg'
import strawberryShortcake from '../images/cakes/strawberryShortcake.jpg'
import earlgreyLemonApple from '../images/cakes/earlgreyLemonApple.jpg'

export class CakeCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <div className="cake-card col-lg-4">
          <img src={roseLychee} alt="" className="cake-card-img"/>
          <div className="cake-card-info-wrapper">
            <p className="cake-card-title">Rose Lychee</p>
            <p className="cake-card-price">6 inch: $10, 8 inch: $12</p>
          </div>
        </div>
        <div className="cake-card col-lg-4">
          <img src={yuzuRaspberry} alt="" className="cake-card-img"/>
        </div>
        <div className="cake-card col-lg-4">
          <img src={strawberryShortcake} alt="" className="cake-card-img"/>
        </div>
        <div className="cake-card col-lg-4">
          <img src={earlgreyLemonApple} alt="" className="cake-card-img"/>
        </div>
      </>
    )
  }
}

export function Cakes() {
  return (
    <div>
      <div className="col-lg-6">
        <h1 className="section-title">Normal Cakes</h1>
      </div>
      <div>
        <CakeCard />
      </div>
    </div>
  )
}
