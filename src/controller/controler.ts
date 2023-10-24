import { Pessoa } from "../model/model";
import { VizualizadorPessoa } from "../view/view";

export class ControladorPessoa {
  constructor(public conta: Pessoa, public view: VizualizadorPessoa){}

  apresentar(){
    this.view.apresentacao(this.conta);
    
  }
  
}