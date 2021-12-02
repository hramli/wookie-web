import React from 'react'
import Carousel from 'react-material-ui-carousel'
import './Burgers.css'

export class Burgers extends React.Component {
  render() {
    return (
      <div id="burgers-component">
        <h1 className="section-title">Wookie Burger 2.0</h1>

        {/* <Carousel
          fullHeightHover={false}
        >
          <img src={`${process.env.PUBLIC_URL}/images/burgers/burger2.jpg`} alt="" className="page-img"/>
          <img src={`${process.env.PUBLIC_URL}/images/burgers/burger0.jpg`} alt="" className="carousel-img"/>
          <img src={`${process.env.PUBLIC_URL}/images/burgers/burger1.jpg`} alt="" className="carousel-img"/>
        </Carousel> */}

        <img src={`${process.env.PUBLIC_URL}/images/burgers/burger2.jpg`} alt="" className="page-img"/>
        <img src={`${process.env.PUBLIC_URL}/images/burgers/burger0.jpg`} alt="" className="carousel-img"/>
        <img src={`${process.env.PUBLIC_URL}/images/burgers/burger1.jpg`} alt="" className="carousel-img"/>
      </div>
    )
  }
}
