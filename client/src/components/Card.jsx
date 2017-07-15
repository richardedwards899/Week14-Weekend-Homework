import React from 'react';

class Card extends React.Component {


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
    }//imagePath

    return (
      <div className="card">
        <p>Card id: {this.props.id}</p>
        <img src={chooseImage()}/>
        <p>Name: {this.props.name}</p>
      </div>
    );
  }//render

}

export default Card;
