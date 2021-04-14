import React, {Component} from "react";
import CardNota from '../../components/CardNota'
import "./estilo.css"

export default class ListaDeNotas extends Component  {
  
  render(){ //as classes precisam ser renderizadas
        return( //precisa exibir alguma coisa
            <ul className="lista-notas">
              {this.props.notas.map((nota, index) => {  //map= pega cada item e passa para uma função e ele percorre o array; ( não pode usar o for )
              return ( 
                
                <li className="lista-notas-item" key={index}>  
                  
                  <CardNota titulo={nota.titulo} texto={nota.texto}/>
                </li>
              );
            })}
            </ul>
        );
    }
   
}