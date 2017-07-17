import React from 'react';

class Card extends React.Component {

  handleClick(){
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
        <img className="cardImage" src={chooseImage()}/>
      </div>
    );
  }//render

}

export default Card;
