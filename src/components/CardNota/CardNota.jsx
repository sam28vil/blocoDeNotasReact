import React, { Component } from 'react';
import "./estilo.css";
import {ReactComponent as DeleteSVG} from '../../assets/img/delete.svg';

export default class  CardNota extends Component {

  apagar(){
    const indice=this.props.indice;
    this.props.apagarNota(indice);
  }
    render() { 
        return ( 
            <section className="card-nota">
                <header className="card-nota-cabecalho">
                  <h3 className="card-nota-titulo">{this.props.titulo}</h3> 
                  <DeleteSVG onClick={this.apagar.bind(this)} />
                  <h4>{this.props.categoria}</h4>
                </header>
                <p className="card-nota-texto">{this.props.texto}</p>
              </section>
         );
    }
}
 
