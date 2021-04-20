import React, {Component} from "react";
import CardNota from '../../components/CardNota'
import "./estilo.css"

export default class ListaDeNotas extends Component  {
  constructor(){
    super();
    this.state={notas:[]}
    this._novasNotas=this._novasNotas.bind(this);
  }
  componentDidMount(){
    this.props.notas.inscrever(this._novasNotas);
  }

  componentWillUnmount(){
    this.props.notas.desinscrever(this._novasNotas)
  }
  _novasNotas(notas){
    this.setState({...this.state,notas})
  }

  render(){ //as classes precisam ser renderizadas
        return( //precisa exibir alguma coisa
            <ul className="lista-notas">
              {this.state.notas.map((nota, index) => {  //map= pega cada item e passa para uma função e ele percorre o array; ( não pode usar o for )
              return ( 
                
                <li className="lista-notas-item" key={index}>  
                  
                  <CardNota 
                  indice={index}
                  apagarNota={this.props.apagarNota} //props->pega a propriedade pai e passa para os filhos
                  titulo={nota.titulo} 
                  texto={nota.texto}
                  categoria={nota.categoria}/>
                </li>
              );
            })}
            </ul>
        );
    }
   
}