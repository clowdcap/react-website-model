import React from 'react'
import CardItem from './CardItem'
import './cards.css'

const Cards = () => {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destinations!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem src="images/img-9.jpg"
                    text="Lorem ipsum dolor sit amet consectetur inside amazon jungle ?"
                    label="Adventure"
                    path="/services"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards