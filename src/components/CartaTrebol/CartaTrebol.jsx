import React, { Component } from "react";
import "./CartaTrebol.css";

import imgfrente from "../../img/trebol.png"
import imgComun from "../../img/carta-posterior.png"

class CartaTrebol extends Component {
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
        <img className="carta-trebol" src={img} onClick={this.click} img alt="carta trébol" />
      </div>
    )
  }
}

export default CartaTrebol;