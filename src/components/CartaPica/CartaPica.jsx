import React, { Component } from "react";
import "./CartaPica.css";

import imgfrente from "../../img/pica.png"
import imgComun from "../../img/carta-posterior.png"

class CartaPica extends Component {
  click= (event)=>{
    this.props.toggle(this.props.index)
  }
  render() {
    let img;
    if (this.props.visible) {
      img = imgfrente
    } else { img = imgComun }

    return (
      <div className="carta col-3">
        <img className="carta-pica" src={img} onClick={this.click} img alt="carta pica" />
      </div>
    )
  }
}

export default CartaPica;