import { ControladorPessoa } from "./controller/controler";
import { Pessoa } from "./model/model";
import { VizualizadorPessoa } from "./view/view";



const Eu = new Pessoa("lucas",18,"Masculino");
const View = new VizualizadorPessoa();
const cntrl1 = new ControladorPessoa(Eu,View);

cntrl1.apresentar();
cntrl1.andar(3);

