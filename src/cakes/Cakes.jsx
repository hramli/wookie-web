import React from 'react'
import { CakeCard } from './CakeCard';
import { CakeType, getCakesByCakeType } from '../shared/constants';
import './Cakes.css'

export function Cakes() {
  let regularCakes = getCakesByCakeType(CakeType.REGULAR);
  let regularCakeCards = [];
  let premiumCakes = getCakesByCakeType(CakeType.PREMIUM);
  let premiumCakeCards = [];
  let id = 0

  for(const cake of regularCakes){
    regularCakeCards.push(
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

  for(const cake of premiumCakes){
    premiumCakeCards.push(
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
      <div className="col-lg-6 cake-section-wrapper">
        <h1 className="section-title">Regular Cakes</h1>
      </div>
      <div>
        {regularCakeCards}
      </div>

      <div className="col-lg-6 cake-section-wrapper">
        <h1 className="section-title">Premium Cakes</h1>
      </div>
      <div>
        {premiumCakeCards}
      </div>
    </div>
  )
}
