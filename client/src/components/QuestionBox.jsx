import React from 'react';

class QuestionBox extends React.Component {

  handleButtonClick(event){
    const buttonID = event.target.id;
    this.props.onAsk(buttonID);
  }

  handleSelect(event){
    console.log("Hair colour selected: ", event.target.value);

    const hairColour = event.target.value;
    // this.props.onHairSelect(hairColour);
    this.props.onAsk(hairColour+"_hair_question");
  }

  render() {

    return (
      <div>
        <h2>{this.props.answer}</h2>
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

        <div className="question">Do they have glasses?</div>
        <button id="glasses_question" onClick={this.handleButtonClick.bind(this)}>Ask!</button>

        <div className="question">What colour of hair do they have?</div>

        <select id="hair_question" onChange={this.handleSelect.bind(this)}>
          <option value='---'>---</option>
          <option value="Dark">Dark</option>
          <option value="Brown">Brown</option>
          <option value="Ginger">Ginger</option>
          <option value="Fair">Fair</option>
          <option value="White">White</option>
        </select>

      </div>
    );
  }//render

}

export default QuestionBox;
