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

    let classhidden;
    if(this.props.hidden===true){
      classhidden= "carta-trebol hidden"
    }else{
      classhidden= "carta-trebol"
    }

    return (
      <div className="carta col-3">
        <img className={classhidden} src={img} onClick={this.click} img alt="carta trébol" />
      </div>
    )
  }
}

export default CartaTrebol;