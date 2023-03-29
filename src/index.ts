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

/**
 * Arrays Métodos
 */

dados.push()


/**
 * Dates
 */
let aniversario: Date = new Date("2022-12-01 05:00")
console.log(aniversario.toString())


/**
 * Funções
 */

function addToHello(name: string): string {
    return `Olá ${name} Seja Bem vindo !`
}

let Vini: string = addToHello("Vns")
console.log(Vini)


function addNumber(x:number, y:number): number {
    return x + y;
}

let soma: number = addNumber(4, 8)
console.log(soma)

//Função Multi Typle
function CallToPhone(phone : number | string): number | string {
    return phone
}
console.log(CallToPhone("11914186155"))

//Funções Async 
async function getDatabase(id: number): Promise<string> {
    return "felipe";
}

/**
 * Interfaces
 */
interface robot2{
    readonly id:number | string;
    name:string
}

const bot : robot2 ={
    id: 1,
    name: "Robo"
}
console.log(bot)
