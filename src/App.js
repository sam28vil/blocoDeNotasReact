import React, {Component} from 'react'
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from "./components/ListaDeNotas";
import "./assets/App.css";
import "./assets/index.css"

class App extends Component { 
  constructor(){
    super();
    this.state={ //serve p guardar valores/estado que podem vir a mudar com a interação do usuário com o componente// dinamismo
      notas:[]
    };
  }

  criarNota(titulo,texto){
    const novaNota={titulo,texto}
    const novoArrayNotas=[...this.state.notas,novaNota]
    const novoEstado={
      notas:novoArrayNotas
    }
    this.setState(novoEstado) 
  }

  render(){ //o proprio react gerencia o render, n pode chamar o render diretamente;
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} /* criar as informações */ /> 
        <ListaDeNotas notas={this.state.notas} /*salvar as informações */ /> 
  
      </section>
    );
  }
}

export default App;
