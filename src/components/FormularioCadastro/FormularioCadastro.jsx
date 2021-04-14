import React, {Component} from 'react';
import "./estilo.css"

export default class FormularioCadastro extends Component{

    constructor(props){
        super(props);
        this.titulo=""; //inicia vazio;
        this.texto="";
    }

    _handleMudancaTitulo(evento){ //handle -> manipulador de evento
        evento.stopPropagation();
        this.titulo=evento.target.value
    }

    _handleMudancaTexto(evento){
        evento.stopPropagation();
        this.texto=evento.target.value
    }
    _criarNota(evento){
        evento.preventDefault(); //previne o comportamento padrão do formulario = recarregar pagina 
        evento.stopPropagation() //para com a propagação no html
        this.props.criarNota(this.titulo,this.texto); // this.props-> estamos acessando essa propriedade
    }

    render(){
        return(
            <form className="form-cadastro"
            onSubmit={this._criarNota.bind(this)}
            >
            <input 
            type="text" 
            placeholder="Título"
            className="form-cadastro-input" 
            onChange={this._handleMudancaTitulo.bind(this)} //pega esse metodo dessa classe/instancia //// onchange é de mudaça //onChange é um método externo //bind->o this é dinamico, entao ele chama o this do valor correto q vc quer associar
            />
            <textarea
            rows={15}
             placeholder="Escreva a sua nota"
             className="form-cadastro-input" 
             onChange={this._handleMudancaTexto.bind(this)}
             />
            <button className="form-cadastro-input form-cadastro-submit">Criar nota</button>
          </form>
        );
    }
}