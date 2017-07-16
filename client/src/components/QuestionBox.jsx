import React from 'react';

class QuestionBox extends React.Component {

  handleButtonClick(event){
    const buttonID = event.target.id;
    this.props.onAsk(buttonID);
  }

  render() {

    return (
      <div>
        <p>Are they a man?</p>
        <button id="man_question" onClick={this.handleButtonClick.bind(this)}>Ask!</button>
        <p>Are they a woman?</p>
        <button id="woman_question" onClick={this.handleButtonClick.bind(this)}>Ask!</button>
      </div>
    );
  }//render

}

export default QuestionBox;
