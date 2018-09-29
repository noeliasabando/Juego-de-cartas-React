import React, { Component } from "react";
import "./Tablero.css";
import CartaCorazon from "../CartaCorazon/CartaCorazon";
import CartaTrebol from "../CartaTrebol/CartaTrebol";
import CartaDiamante from "../CartaDiamante/CartaDiamante";
import CartaPica from "../CartaPica/CartaPica";

class Tablero extends Component {
  render() {
    return (
      <div>
        <div className="container tablero">
          <div className="row">
            <CartaCorazon />
            <CartaTrebol />
            <CartaDiamante />
            <CartaPica />
          </div>
        </div>
        <div className="container tablero">
          <div className="row">
            <CartaCorazon />
            <CartaTrebol />
            <CartaDiamante />
            <CartaPica />
          </div>
        </div>
      </div>
    )
  }
}

export default Tablero;