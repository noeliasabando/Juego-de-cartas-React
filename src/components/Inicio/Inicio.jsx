import React, { Component } from "react";
import { Link } from "react-router-dom";
import  "./Inicio.css";

class Inicio extends Component{
 render(){
   return(
     <div className="container">
       <div className="row">
         <div className="col-12 col-md-12 text-center">
          <h1 className="titulo">Bienvenido  que se yo</h1>
          <Link className="nav-link entrar" to="/tablero" >Jugar</Link>
         </div>
       </div>
     </div>
   )
 }
}

export default Inicio;