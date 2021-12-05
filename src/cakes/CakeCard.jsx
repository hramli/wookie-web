import React from 'react';
import { Link } from 'react-router-dom';
import './CakeCard.css'

export class CakeCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="cake-card col-md-6 col-lg-4">
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