import React from 'react'
import CardSet from './CardSet'
import QuestionBox from './QuestionBox'
import cardCollection from '../data/cardCollection.js'


class GuessWhoBoard extends React.Component {

  constructor(props) {
    super(props);

    //State will need to hold all the FaceCard information, and the index of the selected FaceCard
    this.state = {
      selectedCardIndex: this.pickANumber(24),
      answer: "Please click a button below to ask a question :)",
      cards: cardCollection,
    }
  }//constructor

  pickANumber(max){
    return Math.floor((Math.random() * max));
  }

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

    let answer = null;

    switch (questionType) {
      case "man_question":

        answer = this.compareAgainstChosenCard("male", true);

        if (answer){
          this.setState({answer: "Yes, it's a man!  You can flip over all the female cards..."});
          this.makeCardsFlippable("male", [false]);
        } else {
          this.setState({answer: "No, it's not a man.  You can flip over all the male cards..."});
          this.makeCardsFlippable("male", [true]);
        }
        break;

      case "woman_question":

        answer = this.compareAgainstChosenCard("male", false);

        if (answer){
          this.setState({answer: "Yes, it's a woman!  You can flip over all the male cards..."});
          this.makeCardsFlippable("male", [true]);
        } else {
          this.setState({answer: "No, it's not a woman. You can flip over all the female cards..."});
          this.makeCardsFlippable("male", [false]);
        }
        break;

      case "hat_question":

        answer = this.compareAgainstChosenCard("hat", true);

        if (answer){
          this.setState({answer: "Yes, they're wearing a hat! You can flip over all faces without hats..."});
          this.makeCardsFlippable("hat", [false]);
        } else {
          this.setState({answer: "No, they're not wearing a hat. You can flip over all faces wearing hats..."});
          this.makeCardsFlippable("hat", [true]);
        }
        break;

      case "beard_question":

        answer = this.compareAgainstChosenCard("beard", true);

        if (answer){
          this.setState({answer: "Yes, they have a beard!  You can flip over all faces without a beard..."});
          this.makeCardsFlippable("beard", [false]);
        } else {
          this.setState({answer: "No, they don't have a beard. You can flip over all faces with beards..."});
          this.makeCardsFlippable("beard", [true]);
        }
        break;

      case "moustache_question":

        answer = this.compareAgainstChosenCard("moustache", true);

        if (answer){
          this.setState({answer: "Yes, they have a moustache!  You can flip over all faces without a moustache..."});
          this.makeCardsFlippable("moustache", [false]);
        } else {
          this.setState({answer: "No, they don't have a moustache. You can flip over all faces with moustaches..."});
          this.makeCardsFlippable("moustache", [true]);
        }
        break;

      case "glasses_question":

        answer = this.compareAgainstChosenCard("glasses", true);

        if (answer){
          this.setState({answer: "Yes, they have glasses!  You can flip over all faces without glasses..."});
          this.makeCardsFlippable("glasses", [false]);
        } else {
          this.setState({answer: "No, they don't have glasses. You can flip over all faces with glasses..."});
          this.makeCardsFlippable("glasses", [true]);
        }
        break;

      case "Dark_hair_question":

        answer = this.compareAgainstChosenCard("hairColour", "Dark");

        if (answer){
          this.setState({answer: "Yes, they have dark hair!  You can flip over all anyone without dark hair..."});
          this.makeCardsFlippable("hairColour", ['Brown', 'Ginger', 'Fair', 'White']);
        } else {
          this.setState({answer: "No, they don't have dark hair. You can flip over anyone with dark hair..."});
          this.makeCardsFlippable("hairColour", ['Dark']);
        }
        break;

      case "Brown_hair_question":

        answer = this.compareAgainstChosenCard("hairColour", "Brown");

        if (answer){
          this.setState({answer: "Yes, they have brown hair!  You can flip over all anyone without brown hair..."});
          this.makeCardsFlippable("hairColour", ['Black', 'Ginger', 'Fair', 'White']);
        } else {
          this.setState({answer: "No, they don't have brown hair.  You can flip over anyone with brown hair..."});
          this.makeCardsFlippable("hairColour", ['Brown']);
        }
        break;

      case "Ginger_hair_question":

        answer = this.compareAgainstChosenCard("hairColour", "Ginger");

        if (answer){
          this.setState({answer: "Yes, they have ginger hair!  You can flip over all anyone without ginger hair..."});
          this.makeCardsFlippable("hairColour", ['Dark', 'Brown', 'Fair', 'White']);
        } else {
          this.setState({answer: "No, they don't have ginger hair. You can flip over anyone with ginger hair..."});
          this.makeCardsFlippable("hairColour", ['Ginger']);
        }
        break;

      case "Fair_hair_question":

        answer = this.compareAgainstChosenCard("hairColour", "Fair");

        if (answer){
          this.setState({answer: "Yes, they have fair hair! You can flip over all anyone without fair hair..."});
          this.makeCardsFlippable("hairColour", ['Black', 'Brown', 'Ginger', 'White']);
        } else {
          this.setState({answer: "No, they don't have fair hair. You can flip over anyone with fair hair..."});
          this.makeCardsFlippable("hairColour", ['Fair']);
        }
        break;

      case "White_hair_question":

        answer = this.compareAgainstChosenCard("hairColour", "White");

        if (answer){
          this.setState({answer: "Yes, they have white hair! You can flip over all anyone without white hair..."});
          this.makeCardsFlippable("hairColour", ['Black', 'Brown', 'Ginger', 'Fair']);
        } else {
          this.setState({answer: "No, they don't have white hair. You can flip over anyone with white hair..."});
          this.makeCardsFlippable("hairColour", ['White']);
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
        <h1 className="game-title">Guess Who!</h1>
        <QuestionBox
          className="question-box"
          answer={this.state.answer}
          onAsk={this.handleQuestion.bind(this)}
        />
        <CardSet cards={this.state.cards} onCardClick={this.onCardClick.bind(this)}/>
      </div>
    );
  }//render

}//GuessWhoBoard

export default GuessWhoBoard
