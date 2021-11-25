import React from 'react'
import { CakeCard } from './CakeCard';
import { WookieCakes } from '../shared/constants';
import './CakeCard.css'

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
