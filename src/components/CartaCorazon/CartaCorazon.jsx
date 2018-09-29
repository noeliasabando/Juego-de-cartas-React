import React, { Component } from "react";
import "./CartaCorazon.css";

import imgfrente from "../../img/corazon.png"
import imgComun from "../../img/carta-posterior.png"

class CartaCorazon extends Component {
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
        <img className="carta-corazon" src={img} img alt="carta corazón" />
      </div>
    )
  }
}

export default CartaCorazon;