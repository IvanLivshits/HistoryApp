import React from 'react'


import InfoCard from '../InfoCard/InfoCard'
import { ICardsBlock } from './CardsBlock.types'
import './CardsBlock.scss'


function CardsBlock({title, cardData}: ICardsBlock) {
  return (
    <section className="cards-block">
        <div className="cards-block__container">
            <div className="cards-block__title">
                {title} 
            </div>
            <div className="cards-block__body">
                <div className="cards-block__cards-wrapper">
                    {cardData && cardData.map((card, idx) => 
                        <div key={idx} className="cards-block__card">
                            <InfoCard 
                                imageUrl={card.imageUrl}
                                title={card.title}
                                country={card.country}
                                description={card.description}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>    
    </section>
  )
}

export default CardsBlock