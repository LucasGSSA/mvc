import { Pessoa } from "../model/model";
import { Funcionario } from "../model/model";

export class VizualizadorPessoa {
  apresentacao(pessoa: Pessoa){
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Sexo: ${pessoa.sexo}`);
  }
}