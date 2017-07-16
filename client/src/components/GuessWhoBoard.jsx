import React from 'react'
import CardSet from './CardSet'
import QuestionBox from './QuestionBox'

class GuessWhoBoard extends React.Component {

  constructor(props) {
    super(props);

    //State will need to hold all the FaceCard information, and the index of the selected FaceCard
    this.state = {

      selectedCardIndex: 0,

      answer: "Please click a button below to ask a question :)",

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
          image: 'images/alex.jpg',
          reverse_image: 'images/reverse.jpg',
          flippable: false
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
          image: 'images/alfred.jpg',
          reverse_image: 'images/reverse.jpg',
          flippable: false
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
          image: 'images/anita.jpg',
          reverse_image: 'images/reverse.jpg',
          flippable: false
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
          image: 'images/anne.jpg',
          reverse_image: 'images/reverse.jpg',
          flippable: false
        }
      ]
    }
  }//constructor

  compareAgainstChosenCard(key, value){
    const selectedCard = this.state.cards[this.state.selectedCardIndex];
    return selectedCard[key] === value;
  }

  handleQuestion(questionType){
    console.log("questionType: ", questionType);

    switch (questionType) {
      case "man_question":
        //Are they a man? We need to say Yes or No...
        const answer = this.compareAgainstChosenCard("male", true);
        console.log("ANSWER: ", answer);

        if (answer){
          this.setState({answer: "Yes, it's a man! Now you can flip over all the female cards..."});
        }
        //...and make all the No cards flippable

        break;
      case "woman_question":

        break;
      default:

    }//switch

  }

  cardIsFlippable(cardID) {
    const cardArray = this.state.cards;
    const cardToCheck = cardArray[cardID];

    return cardToCheck.flippable;
  }

  onCardClick(card) {
    console.log("card: ", card);

    if (this.cardIsFlippable(card.props.id)){
      let cards = this.state.cards;
      let cardToUpdate = cards[card.props.id];

      cardToUpdate.showCard = false;
      this.setState( {cards: cards} );
    }
  }

  render() {
    return (
      <div className="guess-who-board">
        <h2>Guess Who!</h2>
        <CardSet cards={this.state.cards} onCardClick={this.onCardClick.bind(this)}/>
        <h2>Ask your question</h2>
        <QuestionBox answer={this.state.answer} onAsk={this.handleQuestion.bind(this)} />
      </div>
    );
  }//render

}//GuessWhoBoard

export default GuessWhoBoard
