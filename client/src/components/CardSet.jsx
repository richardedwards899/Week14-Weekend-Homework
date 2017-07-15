import React from 'react'
import Card from './Card.jsx'

class CardSet extends React.Component {

  render() {

    const cards = this.props.cards.map((card) => {
      return (
        <Card key={card.id} image={card.image} name={card.name}/>
      )
    })

    return (
      <div className="comment-list">
        {cards}
      </div>
    )
  }

}

export default CardSet;
