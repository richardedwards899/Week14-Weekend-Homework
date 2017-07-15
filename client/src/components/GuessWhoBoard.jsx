import React from 'react'
import CardSet from './CardSet'
// import CommentForm from './CommentForm'

class GuessWhoBoard extends React.Component {

  constructor(props) {
    super(props);

    //State will need to hold all the FaceCard information, and the index of the selected FaceCard
    this.state = {

      ID_OfCardToGuess: 0,

      cards: [
        {
          id: 0,
          name: 'Alex',
          male: true,
          hairColour: 'Dark',
          hat: false,
          beard: false,
          moustache: true,
          glasses: false,
          showCard: true,
          image: 'images/alex.jpg'
        },
        {
          id: 1,
          name: 'Alfred',
          male: true,
          hairColour: 'Ginger',
          hat: false,
          beard: false,
          moustache: true,
          glasses: false,
          showCard: true,
          image: 'images/alfred.jpg'
        },
        {
          id: 2,
          name: 'Anita',
          male: false,
          hairColour: 'Fair',
          hat: false,
          beard: false,
          moustache: false,
          glasses: false,
          showCard: true,
          image: 'images/anita.jpg'
        },
        {
          id: 3,
          name: 'Anne',
          male: false,
          hairColour: 'Dark',
          hat: false,
          beard: false,
          moustache: false,
          glasses: false,
          showCard: true,
          image: 'images/anne.jpg'
        }
      ]
    }
  }//constructor

  render() {
    return (
      <div className="guess-who-board">
        <h2>Guess Who!</h2>
        <CardSet cards={this.state.cards}/>
        <h2>Ask your question</h2>
        {/* <QuestionBox /> */}
      </div>
    )
  }

}

export default GuessWhoBoard
