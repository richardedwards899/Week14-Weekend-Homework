import React from 'react'
import CardSet from './CardSet'
import QuestionBox from './QuestionBox'
import cardCollection from '../data/cardCollection.js'


class GuessWhoBoard extends React.Component {

  constructor(props) {
    super(props);

    //State will need to hold all the FaceCard information, and the index of the selected FaceCard
    this.state = {
      selectedCardIndex: 3,
      answer: "Please click a button below to ask a question :)",
      cards: cardCollection,
    }
  }//constructor

  compareAgainstChosenCard(key, value){
    const selectedCard = this.state.cards[this.state.selectedCardIndex];
    return selectedCard[key] === value;
  }

  containsValue(value, array){
    let counter = 0;
    let found = false;
    array.forEach(function(item, index){
      if (item === value){
        found = true;
      }
    });
    return found;
  }

  //set flippable to true for each card if its 'key' field value can be found within valueArray.
  makeCardsFlippable(key, valueArray){
    const cards = this.state.cards;

    cards.forEach(function(card){

      if (this.containsValue(card[key], valueArray)) {
        card.flippable = true;
      }
    }.bind(this));

    this.setState({cards: cards});
  }



  handleQuestion(questionType){
    console.log("questionType: ", questionType);

    let answer = null;

    switch (questionType) {
      case "man_question":

        answer = this.compareAgainstChosenCard("male", true);

        if (answer){
          this.setState({answer: "Yes, it's a man! Now you can flip over all the female cards..."});
          this.makeCardsFlippable("male", [false]);
        } else {
          this.setState({answer: "No, it's not a man. You can flip over all the male cards..."});
          this.makeCardsFlippable("male", [true]);
        }
        break;

      case "woman_question":

        answer = this.compareAgainstChosenCard("male", false);

        if (answer){
          this.setState({answer: "Yes, it's a woman! Now you can flip over all the male cards..."});
          this.makeCardsFlippable("male", [true]);
        } else {
          this.setState({answer: "No, it's not a woman. You can flip over all the female cards..."});
          this.makeCardsFlippable("male", [false]);
        }
        break;

      case "hat_question":

        answer = this.compareAgainstChosenCard("hat", true);

        if (answer){
          this.setState({answer: "Yes, they're wearing a hat! Now you can flip over all faces without hats..."});
          this.makeCardsFlippable("hat", [false]);
        } else {
          this.setState({answer: "No, they're not wearing a hat. Now you can flip over all faces wearing hats..."});
          this.makeCardsFlippable("hat", [true]);
        }
        break;

      case "beard_question":

        answer = this.compareAgainstChosenCard("beard", true);

        if (answer){
          this.setState({answer: "Yes, they have a beard! Now you can flip over all faces without a beard..."});
          this.makeCardsFlippable("beard", [false]);
        } else {
          this.setState({answer: "No, they don't have a beard. Now you can flip over all faces with beards..."});
          this.makeCardsFlippable("beard", [true]);
        }
        break;

      case "moustache_question":

        answer = this.compareAgainstChosenCard("moustache", true);

        if (answer){
          this.setState({answer: "Yes, they have a moustache! Now you can flip over all faces without a moustache..."});
          this.makeCardsFlippable("moustache", [false]);
        } else {
          this.setState({answer: "No, they don't have a moustache. Now you can flip over all faces with moustaches..."});
          this.makeCardsFlippable("moustache", [true]);
        }
        break;

      case "glasses_question":

        answer = this.compareAgainstChosenCard("glasses", true);

        if (answer){
          this.setState({answer: "Yes, they have glasses! Now you can flip over all faces without glasses..."});
          this.makeCardsFlippable("glasses", [false]);
        } else {
          this.setState({answer: "No, they don't have glasses. Now you can flip over all faces with glasses..."});
          this.makeCardsFlippable("glasses", [true]);
        }
        break;

      case "Dark_hair_question":

        answer = this.compareAgainstChosenCard("hairColour", "Dark");

        if (answer){
          this.setState({answer: "Yes, they have dark hair! Now you can flip over all anyone without dark hair..."});
          this.makeCardsFlippable("hairColour", ['Brown', 'Ginger', 'Fair', 'White']);
        } else {
          this.setState({answer: "No, they don't have dark hair. Now you can flip over anyone with dark hair..."});
          this.makeCardsFlippable("hairColour", ['Dark']);
        }
        break;

      case "Brown_hair_question":

        answer = this.compareAgainstChosenCard("hairColour", "Brown");

        if (answer){
          this.setState({answer: "Yes, they have brown hair! Now you can flip over all anyone without brown hair..."});
          this.makeCardsFlippable("hairColour", ['Black', 'Ginger', 'Fair', 'White']);
        } else {
          this.setState({answer: "No, they don't have brown hair. Now you can flip over anyone with brown hair..."});
          this.makeCardsFlippable("hairColour", ['Brown']);
        }
        break;

      case "Ginger_hair_question":

        answer = this.compareAgainstChosenCard("hairColour", "Ginger");

        if (answer){
          this.setState({answer: "Yes, they have ginger hair! Now you can flip over all anyone without ginger hair..."});
          this.makeCardsFlippable("hairColour", ['Black', 'Brown', 'Fair', 'White']);
        } else {
          this.setState({answer: "No, they don't have ginger hair. Now you can flip over anyone with ginger hair..."});
          this.makeCardsFlippable("hairColour", ['Ginger']);
        }
        break;

      default:

    }//switch

  }//handleQuestion

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
        <QuestionBox
          answer={this.state.answer}
          onAsk={this.handleQuestion.bind(this)}
        />
      </div>
    );
  }//render

}//GuessWhoBoard

export default GuessWhoBoard
