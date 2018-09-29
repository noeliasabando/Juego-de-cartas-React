import React, { Component } from "react";
import "./CartaTrebol.css";

import imgfrente from "../../img/trebol.png"
import imgComun from "../../img/carta-posterior.png"

class CartaTrebol extends Component {
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
        <img className="carta-trebol" src={img} img alt="carta trébol" />
      </div>
    )
  }
}

export default CartaTrebol;