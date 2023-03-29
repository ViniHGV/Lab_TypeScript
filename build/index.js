"use strict";
/**
*Variaveis
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Tipos Primitivos
let ligado = true;
let nome = "Vinicius";
let idade = 19;
let altura = 1.85;
console.log(`Meu nome é ${nome} tenho ${idade} anos e ${altura} de altura`);
//Tipos Especiais
let nulo = null;
let indefinido = undefined;
//Tipos Abrangentes
let ani = "Qualquer coisa";
let semRetorno;
/**
 *Objetos
*/
//Objeto - sem previsibilidade
let pessoa = {
    nome: "Vinicius",
    idade: 19,
    altura: 1.85
};
let meuProduto = {
    nome: "Tênis",
    preco: 100,
    unidades: 8,
};
/**
*Arrays
*/
let dados = ["Vinicius", "Bruna", "Mary", "Noni"];
let dados2 = ["Vinicius", "Bruna", "Mary", "Noni"];
//Array Multi Types
let infos = ["Vinicius", 19];
/**
 * Tuplas
 */
let boleto = ["Agua", 199.9, 51151];
/**
 * Arrays Métodos
 */
dados.push();
/**
 * Dates
 */
let aniversario = new Date("2022-12-01 05:00");
console.log(aniversario.toString());
/**
 * Fuções
 */
function addToHello(name) {
    return `Olá ${name} Seja Bem vindo !`;
}
let Vini = addToHello("Vns");
console.log(Vini);
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(4, 8);
console.log(soma);
//Função Multi Typle
function CallToPhone(phone) {
    return phone;
}
console.log(CallToPhone("11914186155"));
//Funções Async 
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "felipe";
    });
}
const bot = {
    id: 1,
    name: "Robo"
};
console.log(bot);
