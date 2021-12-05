import React from 'react';
import { useParams } from 'react-router-dom';
import { getWookieCakeById } from '../shared/constants';
import './Cake.css'

export function CakeDeliveryInfo() {
  return (
    <ul>
      <li className="cake-page-description">Please Whatsapp 945 945 45 for order and delivery</li>
      <li className="cake-page-description">$10 per address. Delivery time 12pm to 5pm. Re-delivery charge at $10. CBD area extra $5 or pickup at Yishun without delivery charge.</li>
      <li className="cake-page-description">Payment via PayNow to UEN 53419046D, please screenshot and whatsapp to us at 945 945 45 upon payment</li>
    </ul>
  )
}

export function Cake() {
  let { cakeId } = useParams();
  let cake = getWookieCakeById(cakeId)
  let description = [];

  let descriptionKey = 0;
  for (const desc of cake.description) {
    description.push(
      <p className="cake-page-description" key={descriptionKey}>{desc}</p>
    )
    descriptionKey++;
  }

  return (
    <div className="cake-page-wrapper row">
      <div className="col-md-5 cake-img-wrapper">
        <img src={`${process.env.PUBLIC_URL}/images/cakes/${cake.imageFileName}`} alt="" className="cake-page-img"/>
      </div>
      <div className="col-md-7 cake-description-wrapper">
        <h3 className="cake-title">{cake.name}</h3>
        <hr />
        <div className="cake-price">
          <p>6" diameter: SGD {cake.price.sixInch}</p>
          <p>8" diameter: SGD {cake.price.eightInch}</p>
        </div>
        <hr />
        <div className="cake-page-description-wrapper">
          {description}
          <hr />
          <CakeDeliveryInfo />
        </div>
      </div>
    </div>
  );
}