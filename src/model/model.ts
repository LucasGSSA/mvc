export class Pessoa{
  constructor(
    public nome: string,
    public idade:number,
    public sexo: string,
    ){};

};

export class Funcionario extends Pessoa{
  
  constructor(
    nome:string,
    idade:number,
    sexo:string,
    public proficao: string,
    public salario: number){
    super(nome, idade, sexo)
  }

}