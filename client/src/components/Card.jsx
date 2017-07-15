import React from 'react';

class Card extends React.Component {

  handleClick(){
    console.log("hullo");
    this.props.onCardClick(this);
  }

  render() {
    const chooseImage = () => {
      if (this.props.showCard){
        return (
          this.props.image
        );
      } else {
        return (
          this.props.reverse_image
        );
      }
    }//chooseImage

    return (
      <div onClick={this.handleClick.bind(this)} className="card">
        <p>Card id: {this.props.id}</p>
        <img className="cardImage" src={chooseImage()}/>
        <p>Name: {this.props.name}</p>
      </div>
    );
  }//render

}

export default Card;
