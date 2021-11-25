import React from 'react'
import { Link } from 'react-router-dom';
import { WookieCakes } from '../shared/constants';
import './CakeCard.css'

export class CakeCard extends React.Component {
  render() {
    return (
      <>
        <div className="cake-card col-lg-4">
          <Link to={`/cake/${this.props.cakeId}`}>
            <div className="cake-card-img-wrapper">
              <img src={`${process.env.PUBLIC_URL}/images/cakes/${this.props.image}`} alt="" className="cake-card-img"/>
            </div>
          </Link>
          <div className="cake-card-info-wrapper">
            <Link to={`/cake/${this.props.cakeId}`}>
              <span className="cake-card-title">{this.props.name}</span>
            </Link>
            <p className="cake-card-price">SGD {this.props.price.sixInch} - SGD {this.props.price.eightInch}</p>
          </div>
        </div>
      </>
    )
  }
}

export function Cakes() {
  let cakeCards = []
  let id = 0
  for(const cake of WookieCakes){
    cakeCards.push(
      <CakeCard 
        price={cake.price}
        name={cake.name}
        image={cake.imageFileName}
        cakeId={cake.id}
        description={cake.description}
        key={id}
      />
    )
    id++
  }

  return (
    <div>
      <div className="col-lg-6">
        <h1 className="section-title">Normal Cakes</h1>
      </div>
      <div>
        {cakeCards}
      </div>
    </div>
  )
}
