import React from 'react'
import Card from './Card.jsx'

class CardSet extends React.Component {

  render() {

    const cards = this.props.cards.map((card) => {
      return (
        <Card
          key={card.id}
          id={card.id}
          showCard={card.showCard}
          image={card.image}
          name={card.name}
          reverse_image={card.reverse_image}
        />
      )
    })

    return (
      <div className="card-set">
        {cards}
      </div>
    )
  }

}

export default CardSet;
