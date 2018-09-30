import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Tablero.css";
import CartaCorazon from "../CartaCorazon/CartaCorazon";
import CartaTrebol from "../CartaTrebol/CartaTrebol";
import CartaDiamante from "../CartaDiamante/CartaDiamante";
import CartaPica from "../CartaPica/CartaPica";

class Tablero extends Component {
  constructor(props){
    super(props)
    let cartas= [
        {tipo:"carta corazon", visible: false, hidden:false},
        {tipo:"carta corazon", visible: false, hidden:false},
        {tipo:"carta trebol", visible: false, hidden:false},
        {tipo:"carta trebol", visible: false, hidden:false},
        {tipo:"carta diamante", visible: false, hidden:false},
        {tipo:"carta diamante", visible: false, hidden:false},
        {tipo:"carta pica", visible: false, hidden:false},
        {tipo:"carta pica", visible: false, hidden:false},
      ]

    cartas = cartas.sort(() => Math.random() - 0.5);
    this.state={
      cartas:cartas,
      juegoTerminado: false,
    }
  }  

  toggle(index){
    let estadoNuevo=this.state.cartas
    estadoNuevo[index].visible = !this.state.cartas[index].visible
    
    this.setState({
      cartas: estadoNuevo,
    })
    setTimeout(this.verificarMatch.bind(this), 2500)
  }
 
  verificarMatch(){ 
    let contador=0
    let contadorHidden=0
    let juegoTerminado=false;
    let carta1=null
    let carta2=null

    let cartas=this.state.cartas /* lo q esta en state lo guardo en variable */

    cartas.forEach((carta, index) => {
      if(carta.visible=== true){
        contador+=1
        if(contador===1){
          carta1=index
        }else{carta2= index}
      }      
      if(carta.hidden===true){
        contadorHidden+=1
      }
    });

    if(contador===0){
      return
    }
    if(contador===1){
      return
    }
    if(contador===2){
      if(cartas[carta1].tipo===cartas[carta2].tipo){
        cartas[carta1].hidden=true;
        cartas[carta1].visible=false;
        cartas[carta2].hidden=true;
        cartas[carta2].visible=false;

        if(contadorHidden===6){
          juegoTerminado=true
        }
      }else{
        cartas[carta1].visible=false;        
        cartas[carta2].visible=false;
      }
      this.setState({
        cartas:cartas,
        juegoTerminado:juegoTerminado,
      })
    }
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
    if(this.state.juegoTerminado===true){
      return(
        <div>
          <div className="container tablero">
            <div className="row">
              <h1>Felicidades</h1>
              <Link className="nav-link entrar" to="/" >Volver jugar</Link>
            </div>
          </div>
        </div>
      )
    }
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