import React, { Component } from "react";
import "./Tablero.css";
import CartaCorazon from "../CartaCorazon/CartaCorazon";
import CartaTrebol from "../CartaTrebol/CartaTrebol";
import CartaDiamante from "../CartaDiamante/CartaDiamante";
import CartaPica from "../CartaPica/CartaPica";

class Tablero extends Component {
  state={
    cartas: [
      {tipo:"carta corazon", visible: false, hidden:true},
      {tipo:"carta corazon", visible: false, hidden:true},
      {tipo:"carta trebol", visible: false, hidden:true},
      {tipo:"carta trebol", visible: false, hidden:true},
      {tipo:"carta diamante", visible: false, hidden:true},
      {tipo:"carta diamante", visible: false, hidden:true},
      {tipo:"carta pica", visible: false, hidden:true},
      {tipo:"carta pica", visible: false, hidden:true},
    ]
  }

  toggle(index){
    let estadoNuevo=this.state.cartas
    estadoNuevo[index].visible = !this.state.cartas[index].visible
    
    this.setState({
      cartas: estadoNuevo,
    })
  }
 

  pintarCartas(){
    let mostrarCarta= this.state.cartas.map((carta, index)=>{
      if(carta.tipo==="carta corazon"){
        return <CartaCorazon hidden={carta.hidden} visible={carta.visible} index={index} toggle={this.toggle.bind(this)} />
      }
      if(carta.tipo==="carta trebol"){
        return <CartaTrebol hidden={carta.hidden} visible={carta.visible} index={index} toggle={this.toggle.bind(this)} />
      }
      if(carta.tipo==="carta diamante"){
        return <CartaDiamante hidden={carta.hidden} visible={carta.visible} index={index} toggle={this.toggle.bind(this)} />
      }
      if(carta.tipo==="carta pica"){
        return <CartaPica hidden={carta.hidden} visible={carta.visible} index={index} toggle={this.toggle.bind(this)} />
      }
    })
    return mostrarCarta;
  }

  render() {
    return (
      <div>
        <div className="container tablero">
          <div className="row">
            {this.pintarCartas()}
          </div>
        </div>
      </div>
    )
  }
}

export default Tablero;