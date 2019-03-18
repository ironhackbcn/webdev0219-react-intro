import React, {Component} from 'react';
// import './card.css';

const cardStyle = {
  border: '1px solid black',
  padding: '1rem',
  borderRadius: '4px'
}

class Card extends Component {

  render() {
    return (
      <div style={cardStyle}>
        <h2>{this.props.title}</h2>
        <h3>{this.props.subTitle}</h3>
        {this.props.children}
      </div>
    )
  }
}

export default Card;