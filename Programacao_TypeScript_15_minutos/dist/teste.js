"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const funcoes_1 = __importDefault(require("./funcoes")); // Importando a(s) função(ões) do arquivo funcoes.ts, para serem
// 'enviadas' e atribuídas ao objeto chamado funcao, para assim ser usado aqui, neste arquivo de teste.ts.
/*
    TypeScript aceita a sintaxe do JavaScript.
     TypeScript é um superset, um conjunto adicional de instruções;
     TypeScript é um transpilador, ou seja, transforma a sintaxe dele
     em JavaScript. Para fazer isso, esteja no diretório onde se encontra
     este arquivo (ou seja, o arquivo teste.ts). Depois, abra o terminal
     neste diretório e digite :     tsc teste.ts
      Isso vai fazer com que gere o arquivo teste.js
    TypeScript é para Tempo de Desenvolvimento, ou seja, durante a programação,
    a construção do sistema. Em Produção (eu penso, em tempo de produção), não se
    roda TypeScript. Ou seja, em Produção, tem que transpilar o TypeScript em JavaScript,
    para que se possa usá-lo em Produção. Faz isso, porque ele vai fornecer uma segurança,
    no que está sendo feito no projeto, para que o mesmo não "quebre" em Produção.
    Type Checker é um Recurso para verificação de tipos. Ajuda o desenvolvedor na correta pro-
    gramação, como evita colocar erros na Produção.
  
  Para criar um arquivo de configuração, para um projeto TypeScript.
    Esteja na pasta do projeto. Estando, digite :    tsc --init
    Após isso, um arquivo foi criado. Ele se chama tsconfig.json
        "target": "es6" => Versão EcmaScript 6
        "outDir": "./dist"  => Quando acontecer a criação dos arquivos, vai colocar nesta pasta, chamada dist.
  
  Após criar o arquivo tsconfig.json, realizando as duas configurações acima, pode apagar o arquivo teste.js

  Após isso, no Terminal, digite       tsc      seguido de ENTER
    Isso faz com que seja criada a pasta dist, ao qual vai possuir o arquivo(s) .js , que passou ou passaram pela
    transpilação do TypeScript.
  
  
*/
let nome; // Declarando 'nome', como sendo do tipo string.
// nome = 'John'; // OK. Atribuindo uma string a nome.
let array = []; // Declarando array como sendo number e inicializando
// o mesmo. Inicialmente, ele não possui nada. 
array.push(1); // Adicionando o valor 1 ao array.
console.log('teste'); // Imprimindo no console do terminal, a string.
/*
function somar(num1, num2){    // Construção em JavaScript.
   console.log(num1 + num2);
}
*/
// somar();  // Se fizer essa chamada, no TypeScript, vai dar erro. Porém, no JavaScript, não
// ocorre isso.
// somar(1, 2);  // OK. Funciona para JavaScript.
function somar2(num1, num2) {
    console.log(num1 + num2);
}
somar2(3, 4); // OK. Funciona.
// somar('2',8); // Erro. '2' é uma string, não um number.
function somar3(num1, num2) {
    // definindo o tipo de retorno para a função somar3, que será um number.
    console.log(num1 + num2);
    return num1 + num2;
}
console.log(somar3(10, 5)); // OK. Funciona.
console.log(funcoes_1.default.somarNumeros(10, 50));
