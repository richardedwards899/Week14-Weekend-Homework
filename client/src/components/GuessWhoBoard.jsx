import React from 'react'
// import CommentList from './CommentList'
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
          showCard: true
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
          showCard: true
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
          showCard: true
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
          showCard: true
        }
      ]
    }
  }//constructor

  render() {
    return (
      <div className="guess-who-board">
        <h2>Guess Who!</h2>
        {/* <CardSet /> */}
        <h2>Ask your question</h2>
        {/* <QuestionBox /> */}
      </div>
    )
  }

}

export default GuessWhoBoard
