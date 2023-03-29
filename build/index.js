"use strict";
/**
*Variaveis
*/
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
