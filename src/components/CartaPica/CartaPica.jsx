import React, { Component } from "react";
import "./CartaPica.css";

import imgfrente from "../../img/pica.png"
import imgComun from "../../img/carta-posterior.png"

class CartaPica extends Component {
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
        <img className="carta-pica" src={img} img alt="carta pica" />
      </div>
    )
  }
}

export default CartaPica;