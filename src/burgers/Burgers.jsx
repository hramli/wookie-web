import React from 'react'

export class Burgers extends React.Component {
  render() {
    return (
      <div>
        <h1>burger</h1>
        <img src={`${process.env.PUBLIC_URL}/images/burgers/burger0.jpg`} alt="" className=""/>
        <img src={`${process.env.PUBLIC_URL}/images/burgers/burger1.jpg`} alt="" className=""/>
        <img src={`${process.env.PUBLIC_URL}/images/burgers/burger2.jpg`} alt="" className=""/>
      </div>
    )
  }
}
