import React, { Component } from "react";
import "./CartaCorazon.css";

import imgfrente from "../../img/corazon.png"
import imgComun from "../../img/carta-posterior.png"

class CartaCorazon extends Component {
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
      classhidden= "carta-corazon hidden"
    }else{
      classhidden= "carta-corazon"
    }

    return (
      <div className="carta col-3">
        <img className= {classhidden} src={img} onClick={this.click} img alt="carta corazón" />
      </div>
    )
  }
}

export default CartaCorazon;