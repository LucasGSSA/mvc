export class Pessoa{
  constructor(
    public nome: string,
    public idade:number,
    public sexo: string,
    public local: number = 0,
    ){};

    mover(numero:number):void{
      this.local += numero;
    }

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