import React, {Component} from 'react'
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from './components/ListaDeCategorias'
import "./assets/App.css";
import "./assets/index.css"
import Categorias from './dados/Categorias';
import ArrayDeNotas from './dados/Notas';

class App extends Component { //controla todo o estado (state) geral das aplicações
  constructor(){
    super();
    this.categorias= new Categorias();
    this.notas= new ArrayDeNotas();
    }

 
  render(){ //o proprio react gerencia o render, n pode chamar o render diretamente;
    return (
      <section className="conteudo">
        <FormularioCadastro 
        categorias={this.categorias} 
        criarNota={this.notas.adicionarNota.bind(this.notas)} /* criar as informações */ /> 
        <main className="conteudo-principal">
        <ListaDeCategorias
        adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
        categorias={this.categorias} />
        <ListaDeNotas
        apagarNota={this.notas.apagarNota.bind(this.notas)}
        notas={this.notas} /*salvar as informações *//>

        </main>
  
      </section>
    );
  }
}

export default App;
