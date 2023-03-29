/** 
*Variaveis
*/

//Tipos Primitivos
let ligado: boolean = true;
let nome: string = "Vinicius";
let idade: number = 19;
let altura: number = 1.85;

console.log(`Meu nome é ${nome} tenho ${idade} anos e ${altura} de altura`)

//Tipos Especiais
let nulo: null = null
let indefinido: undefined = undefined

//Tipos Abrangentes
let ani: any = "Qualquer coisa"
let semRetorno: void 



/** 
 *Objetos 
*/

//Objeto - sem previsibilidade
let pessoa: object = {
    nome: "Vinicius",
    idade: 19,
    altura: 1.85
}

//Objeto Tipado / Com previsibilidade
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
}

let meuProduto : ProdutoLoja = {
    nome: "Tênis",
    preco: 100,
    unidades: 8,
}


/** 
*Arrays
*/

let dados: string[] = ["Vinicius", "Bruna", "Mary", "Noni"];
let dados2: Array<string> = ["Vinicius", "Bruna", "Mary", "Noni"];

//Array Multi Types
let infos : (string | number)[] = ["Vinicius", 19]


/**
 * Tuplas
 */

let boleto: [string, number, number] = ["Agua", 199.9, 51151]
