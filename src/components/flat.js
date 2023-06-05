import React from 'react';
import "./flat.css";

class Flat extends React.Component {
  render() {
    const title = this.props.flat.price + this.props.flat.priceCurrency + " - " + this.props.flat.name;
    const style = {
      backgroundImage: `url('${this.props.flat.imageUrl}')`
    };

    return (
      <div className="flat">
        <div class="flat-picture" style={style}></div>
        <div class="flat-title">{title}</div>
      </div>
    )
  }
}

export default Flat
