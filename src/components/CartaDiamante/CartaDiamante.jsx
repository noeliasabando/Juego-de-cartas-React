import React, { Component } from "react";
import "./CartaDiamante.css";

import imgfrente from "../../img/trebol.png"
import imgComun from "../../img/carta-posterior.png"

class CartaDiamante extends Component {
  state = {
    visible: false,
  }
  render() {
    let img;
    if (this.state.visible) {
      img = imgfrente
    } else { img = imgComun }

    return (
      <div className="carta col-3">
        <img className="carta-diamante" src={img} img alt="carta diamante" />
      </div>
    )
  }
}

export default CartaDiamante;