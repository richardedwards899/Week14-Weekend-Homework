import React from 'react';

class QuestionBox extends React.Component {

  handleButtonClick(event){
    const buttonID = event.target.id;
    this.props.onAsk(buttonID);
  }

  render() {

    return (
      <div>
        <h2>Answer: {this.props.answer}</h2>
        <div className="question">Are they a man?</div>
        <button id="man_question" onClick={this.handleButtonClick.bind(this)}>Ask!</button>
        <div className="question">Are they a woman?</div>
        <button id="woman_question" onClick={this.handleButtonClick.bind(this)}>Ask!</button>
        <div className="question">Are they wearing a hat?</div>
        <button id="hat_question" onClick={this.handleButtonClick.bind(this)}>Ask!</button>
        <div className="question">Do they have a beard?</div>
        <button id="beard_question" onClick={this.handleButtonClick.bind(this)}>Ask!</button>
        <div className="question">Do they have a moustache?</div>
        <button id="moustache_question" onClick={this.handleButtonClick.bind(this)}>Ask!</button>
      </div>
    );
  }//render

}

export default QuestionBox;
