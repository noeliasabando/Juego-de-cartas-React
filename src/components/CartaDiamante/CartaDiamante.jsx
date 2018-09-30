import React, { Component } from "react";
import "./CartaDiamante.css";

import imgfrente from "../../img/diamante.png"
import imgComun from "../../img/carta-posterior.png"

class CartaDiamante extends Component {
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
      classhidden= "carta-diamante hidden"
    }else{
      classhidden= "carta-diamante"
    }

    return (
      <div className="carta col-3">
        <img className={classhidden} src={img} onClick={this.click} img alt="carta diamante" />
      </div>
    )
  }
}

export default CartaDiamante;