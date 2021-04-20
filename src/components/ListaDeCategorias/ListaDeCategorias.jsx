import React, { Component } from 'react';
import './estilo.css';

class ListaDeCategorias extends Component {

    constructor(){
        super();
        this.state={categorias:[]}
        this._novasCategorias=this._novasCategorias.bind(this)
    }
    componentDidMount(){ //local para add subscrição
        this.props.categorias.inscrever(this._novasCategorias);
    }

    componentWillUnmount(){
        this.props.categorias.desinscrever(this._novasCategorias);

    }

    _novasCategorias(categorias){
        this.setState({...this.state,categorias});
    }

    _handleEventoInput(evento){
        if(evento.key==="Enter"){
           let valorCategoria= evento.target.value; //target é o proprio elemento de inpu
            this.props.adicionarCategoria(valorCategoria); //props é usado p elementos filhos
        }
    }
    
   render(){
       return(
           <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.state.categorias.map((categoria, index)=>{ //index é parametro para a key
                      return  <li key={index} className="lista-categorias_item">{categoria}</li>

                    })}
               
           </ul>
           <input 
           type="text"
           className="lista-categorias_input"
           placeholder="Adicionar Categoria"
           onKeyUp={this._handleEventoInput.bind(this)} />
           </section>
       )
   }
}
 
export default ListaDeCategorias;