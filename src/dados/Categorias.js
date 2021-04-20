export default class Categorias{ //ela é uma classe de dados observável pelos componentes
    constructor(){
        this.categorias=[];
        this._inscritos=[]; //os parametros que ela tem que notificar ao form
    }

    inscrever(func){ //qual  a função que eu quero q execute
        this._inscritos.push(func) //add no array
    }

    notificar(){
        this._inscritos.forEach(func=>{
            func(this.categorias); //executar a função que passamos no parametro
        });
    }

    desinscrever(func){
        this._inscritos=this._inscritos.filter(f=>f !== func);
    }

    adicionarCategoria(novaCategoria){
        this.categorias.push(novaCategoria);
        this.notificar();
    }
}