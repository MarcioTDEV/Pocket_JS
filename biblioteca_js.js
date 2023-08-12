/*  CRITÉRIOS DA LINGUAGEM

    -   Código executado de cima para baixo
    -   Case sensitive
    -   Tipagem Fraca: var pode receber diferentes tipos de valor; ponto e vírgula opcional.
    -   Variáveis declaradas no escopo local não podem ser acessadas na global (return)
    

   
    --null 
    ausência de valor válido
    definido intencionalmente
    
    --undefined 
    ausência de valor válido
    variável declarada, mas sem valor atribuido. ou função sem retorno

    --NaN
    indica erro de conversão de qualquer tipo para número

    var - variável pode ser redeclarada e atualizada. Escopo global
    let - escopo de bloco, pode ser atualizado, não redeclarado
    const - não pode ser atualizado nem redeclarado. escopo de bloco

    hoisting - todas as declarações de variáveis e funções são movidas para o topo do 
    escopo em que foram definidas antes da execução do código 

    Escopo: visibilidade de uma variável em um código
    - Global: escopo mais amplo e acessível em todo o código. declarada fora de
    qualquer função
    - função: declaradas dentro de uma função só podem ser usadas nela ou em funções 
    aninhadas
    - bloco: let e const funcionam em blocos como, if, for, etc. quando declaradas, só podem
    ser acessadas no bloco específico
    
*/


/*  MÉTODOS NUMÉRICOS

    -   Objeto Number contém os métodos para trabalhar com números
    -   A marioria dos tipos de dado também tem um obj pai (String, Object, Array)
    
    Number()
    Converte string em número
    Ex: let b = (Number("232"));

    ParseFloat()
    Transforma uma string em ponto Flutuante
    Ex: let b = (parseFloat("12.323")); ou let b = Number.parseFloat("12.90")

    ParseInt
    Transforma string em inteiro
    Ex: let b = (parseInt("12.323")); ou let b = Number.parseInt("12.90")

    To Fixed
    Define a qtde de casas decimais de um tipo float
    Ex console.log(23.91.toFixed(1))

    Math.max(32,41,52)
    retorna o maior valor entre os números passados
    Math.min -> o menor valor

    Math.pow(base, expoente)
    eleva um número
 
*/
/*  MÉTODOS DE STRING

    length
    Indica o tamanho da string
    ex: tá de sacanagem?

    IndexOf()
    Retorna um primeiro índice a partir do caractere passado na string
    Ex: let str = "Manoel"
        console.log(str.indexOf("n"))

    lastIndexOf()
    Retorna o ultimo indice a partir do caractere passado na string

     ()
    Retorna uma fatia da string. Recebe o index de inicio e o de fim da palavra
    Ex: let str = "Guabiraba Guabiraba o beja flor"
        console.log(str.slice(27, 31))

    Replace()
    Troca uma palavra da string. Recebe a palavra existente e a nova palavra
    Ex: let str = "Manoel da silva xavier garcia de souza"
        console.log(str.replace("souza", "maia"))

    trim()
    Remove espaços em branco no inicio e fim da string
    Ex: let str  = "        Manoel          "
        console.log(str.trim())

    split()
    transforma a string em array. recebe um marcador que vai definir onde a 
    string será quebrada em array
    Ex: let str = "Laranja, uva, pera, maçã, manga"
        console.log(str.split(","))

*/
/*  MÉTODOS DE ARRAY

    Splice
    Remover algum elemento específico do array -> splice
    array.splice(posição inicial, qtde de elementos removidos)
    array.splice(2,1, (adiciona elemento: opcional))
    
    concat
    Junta dois array
    Ex: const nomes = ['gabriel', 'joao']
        const numeros = [2,5,12,41]
        const juntar = nomes.concat(numeros)
        console.log(juntar)

    Pop 
    Separa elemento do fim do array
    Ex: let arr = ["pera", "uva", "maça"]
        let b = arr.pop()
        console.log(b)   

    unshift/shift
    Adiciona elemento no início do array/remove.sem parâmetro
    ex: let arr = ["manga","uva", "pera"]
        arr.unshift("banana")
        console.log(arr)

    Join
    transforma array em string. recebe caractere que vai espaçar a string
    Ex: let arr = ["manoela","roeu", "a","roupa"]
        console.log(arr.join(' '))
    
    reverse
    Inverte a ordem de um array
    Ex: let arr = ["manoela","roeu", "a","roupa"]
        console.log(arr.reverse())

    foreach
    vai passar por cada item do array. Para cada item do mesmo, uma função vai ser executada
    recebe uma função de Callback. Recebe item, index e array por parâmetro. 
    Exlet arr = ["manga", "laranja", "pera", "uva", "maçã", "goiaba"];
            arr.forEach((item, index, array)=>{
                console.log(item, index, array)
            })


    percorrer um array e criar um novo com os novos elementos alterados: map()
    não altera o valor do array inicial
    recebe por padrão uma função que recebe tres parametros(item, index, array)
    EX: let b = a.map((item)=>{return item.idade + 10})

    percorrer todo o array e criar um novo array com apenas os elementos que atendam
    uma condição específica. Em caso de objetos, vai retornar todos os objetos 
    cujo atributo se encaixe na especificação
    Ex: let b = a.filter((item)=>{return item.idade > 20})
*/
/*
    reduzir um array a um único valor: reduce()
    recebe por padrão uma função que tem dois parâmetros (acumulador, item) e
    tem um acumulador definido no final da expressão
    Ex: let b = a.reduce((ac, item)=>{return ac + item.idade},0)
        
    quando for preciso testar se todos os elementos do array passam por um teste específico
    semelhante ao filter, porém, retorna um boolean
    Ex: verificar se todos os itens são maiores que 100 //false
    let arrN = ["32","341","23","41","451","75","43"]
    let j = arrN.every(item=>item>100)

    testar se pelo menos item do array passa por um teste específico
    retorna um boolean
    Ex: verificar se pelo menos um número é menor que 100
    let arrN = [100,421,531,636,431,1]
    console.log(arrN.some(item=>item <100))

    procurar um valor dentro de um array
    vai retornar o primeiro valor que satisfizer o teste
    ex: verificar se um item é maior que 100
    let arrN = [32,41,100,101,43,431]
    console.log(arrN.find(item=>item>100)) //101

    {
    ordenar array
    altera o array original

    - array numérico simples
    let arr = [6,3,4,5,1,2]
    console.log(arr.sort())

    - array string simples
    let arrN = ["Caio","Albano","Bartolomeu"]
    console.log(arrN.sort())
    
    sort vai fazer uma comparação onde precisa retornar um núm positivo, negativo ou 0
*/
/*  OBJETO WINDOW

        window.open()
        abre uma nova janela. recebe um endereço como parâmetro
             // window.open(ender.innerHTML)
        também recebe a url de um arquivo
        o segundo parâmetro indica onde a janela vai ser aberta:
        "_blank": uma nova guia
        "_self": na mesma guia
             ex: window.open("https://www.google.com","_blank")
        também é possível definir o tamanho da janela no terceiro parâmetro
            window.open("https://www.google.com","_blank","width=400px,height=300px,top=200,left=200")

        window.close()
        fecha a janela indicada. Precisa ser referenciada em uma var global
        Ex:
            const botaoAbrir = document.querySelector(".abrir")
            const botaoFechar = document.querySelector(".fechar")
            var janela

            function abrirJanela (){
                janela = window.open("teste.html", "_blank")
            }
            function fecharJanela (){
                janela.close()
            }
            botaoAbrir.addEventListener("click", abrirJanela)
            botaoFechar.addEventListener("click", fecharJanela)


        Altura e largura da Janela
            height = window.innerHeight // altura interna da Janela!
            width = window.innerWidth // largura interna da Janela!
            posicaoX = window.screenX // posição inicial da janela no eixo x
            posicaoY = window.screenY // posição inicial da janela no eixo y
            
            
            Navegação dentro da própria janela
            window.scrollBy(eixoX , eixoY)
            vai levar a pagina para a posição especificada. recebe dois parâmetros
            
            Altura e largura de um elemento 
            elemento.clientWidth || clientHeight


            Tamanho total vertical do documento (eixo Y)
            document.body.scrollHeigth
            
            Tamanho total Horizontal do documento (eixo X)
            document.body.scrollWidth
            */


/*  MANIPULAÇÃO DO DOM - SELECIONANDO ELEMENTOS


    Tamanho da janela medido pela vertical (eixo Y)
    window.innerHeigth

    Tamanho da janela medido pela horizontal (eixo X)
    window.innerWidth

    Posição da barra de rolagem vertical
    window.scrollY

    Posição da barra de rolagem horizontal
    window.scrollX

*/
/*  CRIANDO ELEMENTOS VIA JS - createElement()/createNodeText()

    //primeiro, é preciso criar o elemento
    let paragrafo = document.createElement("p")

    //em seguida, o conteúdo do parágrafo usando o método appendChild para inserir
    //o elemento filho em um pai
    //nesse caso, o elemento filho é o texto criado, e o pai, a variável
    let texto = document.createTextNode("o texto deve ser criado dessa forma")
    paragrafo.appendChild(texto)

    //ou pode ser inserido com innerHTML
    let p = document.createElement("p"); p.innerHTML = "Conteúdo do título JS"
    //o appendChild também é usado para inserir o conteúdo
    //em um determinado local do document

    let body = document.getElementsByTagName("body")[0]
    body.appendChild(paragrafo)
    //ou dessa forma: body.innerHTML +=paragrafo.innerHTML

    //inserir elementos antes de outro
    ElementoPai.insertBefore(elementoASerInserido, elementoReferencia)

*/
/*  TROCAR ELEMENTOS

    // É possível trocar elementos JS
    // para substituir um elemento, é necessário criar um novo
    let p = document.createElement("p")
    let conteudo = document.createTextNode("texto para o parágrafo criado com js")
    p.appendChild(conteudo)

    //em seguida, selecionar o elemento pai
    let body = document.querySelector("body")

    //após isso, trocar o elemento
    body.replaceChild(p, "elemento antigo")

*/
// aqui.replaceChild(div, p)
/*  ALTERANDO ATRIBUTOS

    //todos os atributos podem ser alterados via JS usando setAtribute()
    var title = document.querySelector("#title")
    title.setAttribute("class", "testando atributo")
    title.setAttribute("alt", "testando atributo")

    //remover atributo
    //basta selecionar o elemento e usar removeAtribute
    title.removeAttribute("id", "teste")

*/
/*  REMOVENDO ELEMENTOS JS

    //primeiro localizar o elemento pai
    let container = document.querySelector("#container")

    //em seguida, localizar o elemento filho
    let p = document.querySelector("#container p")

    //apos, usar o seguinte método: removeChild()
    container.removeChild(p)


    //removendo o elemento diretamente
    p.remove()
*/
/*  EVENTOS 

    É possível definir atributos em HTML que podem chamar funções ao serem solicitados

    click: ao clicar, chamará um evento 
    EX: <h1 click="csole.log('h1 foi clicado')"> TÍTULO PRINCIPAL </h1>

    change: ao sair do foco, o elemento realiza uma ação

    input: ao digitar em uma caixa input, a função é executada automaticamente

    mouseover: ao passar o mouse por cima, vai executar uma ação

    mouseout: quando o mouse sair, vai executar uma função


    EVENTOS DE TECLADO - KEYDOWN

    qualquer tecla que insira valor é pressionada
    document.addEventListener("keypress",()=>{
        alert("Aqui")
    })
    
    o evento tem callback que recebe var event com informações sobre a ação
    selecionar o botão pressionado e condicional para o mesmo
    document.addEventListener("keydown",({key})=>{
        if(key === 'Escape'){
            alert("modal fechado")
        }
    })
*/
/*  DATA

    Chamando a classe Date
    let data = new Date();

    Passando formato de data com string(valor do tipo string que representa uma data)
    definindo Ano
    const data = new Date("2019-04-20")
    Definindo ano, e horas
    const data = new Date("2019-04-20T20:10:10") || ("2019-20-10 20:20:10")

    Criando uma variável com formato pré definido
    os valores não podem ter zero a esquerda
    let data = new Date(ano, mes, dia, hora, minuto, segundo, milisegundo)
    let data = new Date(2022, 7 ,21 ,9, 40, 1000 )

    Obter o Ano
    let data = new Date()
    data.getFullYear()

    Obter Mês
    data.getMonth()

    Obter dia
    data.getDate()

    Obter a data: retorna um número de 0 a 6 onde 0 é domingo
    data.getDay()

    Obter Hora
    data.getHours()

    Obter Minutos
    data.getMinutes()

    Obter Segundos()
    data.getSeconds()

    Obter Millisegundos
    data.getMilliseconds()

    - Exibindo uma data atual formatada
    let a = new Date();
    console.log(a.getDate(), (a.getMonth()+1), a.getFullYear())
___________________________________________________________________
    - Realizando operações com ano
    Diferença entre dois anos

    let a = new Date()
   let atual = new Date()
   atual.setFullYear(2020)
   console.log((a-atual)/1000/60/60/24/30/12)
    
   A resposta do sistema a conta é dada em millisegundos, portanto é necessário
   realizar a conversão para a data atual

    É necessário pegar o valor das duas datas, realizar a operação,
    usar Math.ceil e calcular manualmente os valores até a proporção 
    desejada: de milisegundos a anos
    _____________________________________________________________

    Somar dias a uma determinada data
    let a = new Date();
    a.setFullYear(a.getFullYear() + 2)
    console.log(a.getFullYear())

    */

/*
________________________________________________________
EDITANDO AS DATAS
 
Alterar o Ano
data.setFullYear()

Alterar o mês: recebe um array de 0 a 11 onde 0 é janeiro
data.setMonth()

Alterar a data
data.setDate()

*/

/*      
FOR IN
let array = ["banana", "pera", "uva", "maçã"];
for(let i in array){
    console.log(array[i]+" \n + i + " " a);
}
lê-se:
para cada index (variável com qualquer nome) do array faça
exibir array na posição do index, index e o array completo


FOR IN PERCORRENDO UM OBJETO
let pessoa = {
nome: "thiago",
idade: 30,
nacionalidada: "corintiano",
};
for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
};
lê-se: para cada index (variável de qualquer nome) do array selecionado faça
exibir o index, exibir o array na chave selecionada;


FOR OF
Diferença: o index não busca a chave numérica, ou chave do objeto,
mas sim o próprio valor em si
Ex: 
*/

/*  JSON

notação de objetos js
formato para troca de dados que a maioria das apis retornam 

Tipos de dados
String, int, float, array, objeto={"chave":"valor"}, null

converter js para json
const json = JSON.stringify(variável)
Ex: let produtos = [
    {nome: "geladeira", preco:4000},
    {nome: "sofá", preco:2500},
    {nome: "televisao", preco:1200}
]
console.log(produtos)
let jsondata = JSON.stringify(produtos)
console.log(jsondata)

Trabalhando com apis, transformando json em js

const jsonNovamente = JSON.parse(jsondata)

*/


/*  DESTRUCTURING

quando se quer apenas uma propriedade de um objeto e não o objeto inteiro

let teste = {
    andar: true,
    correr: false
}
function b ({andar}){
    console.log(andar)
}
b(teste)

outras formas de destructuring

let arr = ['banana', 'maçã', 'moranja']
let [fruta1, ...fruta2] = arr
console.log(fruta2)


let pessoa =  {
    nome: 'Joao',
    idade: 32
}
let {nome: nomePaciente, idade: idadePaciente} = pessoa
console.log(nomePaciente)

*/
/*  REST E SPREAD

Rest: agrupa uma quantidade de dados sem limites

function lista(empresa, ...clientes){
    console.log(empresa, clientes)
}
lista("aec",'joaco','carlos','andre')


    Spread: espalha os elementos em uma variável
    //a função max recebe apenas valores. eles podem ser espalhados usando spread
    let maior = [341,1532,65,123,65,6123,653,62,78,69,765,873,432]
    console.log(Math.max(...maior))
    
    
    usando o spread para percorrer uma nodelist
    let lista = document.querySelectorAll("li")
    [...lista].map(item=>console.log(item)) 
    
    
    clonar objetos
    let carro = {
        marca: 'chevrolet',
        modelo: 'monza'
    }
    let carro2 = {...carro}
    console.log(carro2)
    
    
    */

/*  FETCH
 
requisição de dados do servidor
 
fetch("https://ranekapi.origamid.dev/json/api/produto")
.then(data=>data.json())
.then(data=>console.log(data))
 
enviar dados para o servidor
 
const data = {
    id: 'marciot',
    nome: 'MarcioT',
    email: "marcio@marcio.com",
    senha:"1234",
    cep:"504002223",
     rua: "qualquer nome",
     numero: 320,
     bairro: 'Campina Grande',
     estado: "Paraíba"
 }
 
 fetch("https://ranekapi.origamid.dev/json/api/usuario",{
     method: 'POST',
     headers: {
         "Content-Type": 'application/json',
     },
     body: JSON.stringify(data)
 })
 */

/*  ASYNC AWAIT
funcionam como as promises
a função precisa ser declarada com async
e quando precisamos esperar por algo, a instrução precisa ser await
pode aplicar em funções anônimas e métodos de classe
tentar usar sem await gera um erro

function asyncPrim() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('função assíncrona')
            resolve()
        }, 1000)
    })
}
async function asyncSeg() {
    console.log("Função iniciada")
    await asyncPrim()
    console.log("acabou o comando")
}
asyncSeg()

uso prático -------------------
function getData() {
    return fetch("https://ranekapi.origamid.dev/json/api/produto")
        .then(data => data.json())
        .then(data => console.log(data))
}

async function showData() {
    console.log('aqui')
    let data = await getData()
    console.log(data)
}
showData()

 */


/*  PARADIGMA DE PROGRAMAÇÃO ORIENTADA A OBJETOS

    Aglutinação de estados e comportamentos

    Pilares:
    Herança -> capacidade de ser idealizado baseado em outro objeto. 
    Um objeto pai pode passar suas propriedades para um filho, replicando 
    características

    Polimorfismo -> capacidade do objeto de se passar por outro. Depois que o 
    objeto é herdado, uma ou mais características precisam ser reescritas

    Encapsulamento -> esconde detalhes da impplementação do objeto, 
    expondo apenas o que deve ser acessado publicamente. Adiciona segurança 
    na aplicação

    Abstração -> é a filosofia de representar o objeto de uma forma 
    abstrata, que define a identidade de um objeto

*/

/*  CLASSES E OBJETOS

    Classes: moldes de objetos
    Objetos: são abstrações de coisas do mundo real
    
    class Pessoa
    {
        //atributos: variáveis ou características
        nome
        idade
        // métodos: funções; comportamentos da classe
    }
    //criando objeto a partir da classe
    let pessoa = new Pessoa()
    
    //instanciando a classe
    pessoa.nome = "Rogério"
    pessoa.idade = 23

*/

/*  ENCAPSULAMENTO - PROTEÇÃO DOS DADOS

    visibilidade
    + público
    - privado
    # protegido
*/

/*  MÉTODO CONSTRUTOR

    passa informações para serem adicionadas no momento que o 
    objeto for criado. também é possível executar outras ações

    class Pessoa{
        constructor(nome, idade){
            this.nome = nome,
            this.idade = idade
        }
    }
    let pessoa = new Pessoa("ANDRE", 12)
*/

/*  MÉTODOS 

    class Pessoa {
        constructor(nome, peso, altura){
            this.nome = nome,
            this.altura = altura,
            this.peso = peso
            this.imc = this.calculoImc(peso, altura)

        }
        calculoImc (peso, altura){
            return peso / (altura * altura)
        }

    }

    let pessoa = new Pessoa('andre', 80,1.75)
    console.log(pessoa.imc.toFixed(2))


*/

/*  MÉTODOS ACESSORES GET / SET

    //o get e o set não pode ter o mesmo nome da propriedade modificada

    class Pessoa {
        constructor(nome){
            this.nome = nome
        }
    
        get getNome (){
            return this.nome
        }
    
        set setNome (x){
            this.nome = x
        }
    }
    
    let andre = new Pessoa("Andre")
    console.log(andre.getNome)
    andre.setNome = 'Joao'
    console.log(andre.getNome)

*/

/*  ATRIBUTO ESTÁTICO

    //Atributos da propria classe 

    class Pessoa {
        static cadastros = 0
        constructor(nome){
            this.nome = nome
            Pessoa.cadastros += 1
        }
    }
    let andre = new Pessoa ('andre')
    let joao = new Pessoa ('joao')
    let carlos = new Pessoa ('carlos')
    
    console.log(Pessoa.cadastros)

*/

/*  IMPORTANDO E EXPORTANDO CLASSES

    importando
    import {NomeDaClasse} from "./NomeArquivo.js"

    exportando
    export default class Pessoa{}

    para usar o import, é necessario criar o arquivo 
    package.json da seguinte forma:
    - npm init
    - criar json
    - definir na ultima linha type:'module'
    - a main deve ser o arquivo que vai importar a classe (definir no json)
    - definir o type="module" no arquivo js que vai ser usado
*/

/*  ASSOCIANDO CLASSES

    uma classe recebe como atributo uma outra classe inteira
    os atributos da classe dentro da classe são passados no constructor

    class Pessoa {
        constructor(nome){
            this.nome= nome
        }
    }
    class Funcionario {
        constructor(nome, cargo){
            this.pessoa = new Pessoa(nome)
            this.cargo = cargo
        }
    }
    let rogerio = new Funcionario("rogerio", 'atendente')
    console.log(rogerio.pessoa.nome)
    console.log(rogerio.cargo)

*/

/*  HERANÇA

    técnica de reuso de classes.
    classes podem herdar características de outras.
    a classe que recebe o extends herda todos os atributos e 
    métodos da classe anterior.

    class Carro {
        constructor(modelo){
            this.modelo = modelo
        }
        andar(){
            console.log(this.modelo, "está andanto" )
        }
    }
    class Moto extends Carro{
        acelerar(x){
            console.log('a velocidade atual é '+ x)
        }
    }
    let teste = new Moto('bis 130')
    teste.andar()
    teste.acelerar(30)


    também é possível criar novos métodos, atrubutos e construtores,
    porém, é necessário usar o atributo super para atribuir os dados 
    à classe extendida

    class Pessoa {
        constructor(nome){
            this.nome = nome
        }
        mostrarNome (){
            return this.nome
        }
    }
    class Funcionario extends Pessoa{
        constructor(nome, função){
            super(nome)
            this.função = função
        }
    }
    
    let funcionario = new Funcionario('Carol', 'Atendente')
    console.log(funcionario.mostrarNome())

*/

/*  SOBESTRITA DE MÉTODOS

    um método de uma classe herdada pode ser alterada
    
    class Pessoa {
        constructor(nome){
            this.nome = nome
        }
        buscarNome (){
            return this.nome
        }
    }
    class Funcionario extends Pessoa {
        constructor(nome, funcao){
            super(nome)
            this.funcao = funcao
        }
        buscarNome(){
            return "O nome do funcionário é: "+ this.nome
        }
    }
    const andre = new Funcionario('Andre', 'Atendente')
    console.log(andre.buscarNome())
*/

/*  GET E SET

    o get e set podem ter o mesmo nome, desde que 
    não seja de um atributo definido no construtor

    class espaconave{
        constructor(name, velMax){
            this.name = name
            this.velMax = velMax
            this.velocidadeAtual = 0
        }
        set velocidade (x){ 
            this.velocidadeAtual = x   
        }
        get velocidade(){
            return this.velocidadeAtual
        }
    }
    let feanor = new espaconave('feanor', 200)
    feanor.velocidade = 400
    console.log(feanor.velocidade )

*/

/*  MÉTODOS ESTÁTICOS

    class Pessoa {
        constructor(nome){
            this.nome = nome
        }
    }
    class Funcionario extends Pessoa{
        constructor(nome, diaria){
            super(nome)
            this.diaria = diaria
        }
        static calcularHorasMes(diasTrabalhados, diaria){
            return diasTrabalhados * diaria * 10
        }
    }

    let rogerio = new Funcionario('Rogerio', 8)
    console.log(Funcionario.calcularHorasMes(23,8))

*/

/*  ATRIBUTO ESTÁTICO COM GET

    é possível definir uma variável estática na classe 
    o valor não poderá ser alterado

    class Funcionario {
    
        static get valorDiaria (){
            return 60
        }
    
        constructor(nome, funcao, diasTrabalhados){
            this.nome = nome
            this.funcao = funcao
            this.diasTrabalhados = diasTrabalhados
        }
    
    }
    
    let rogerio = new Funcionario('Rogeiro', 'Atendente', 21)
    console.log(rogerio.diasTrabalhados * Funcionario.valorDiaria)
*/

/*  TRATAMENTO DE ERROS - THROW

    pode ser usado para criar uma excessão de erro no sistema

    if(true === false){
        console.log('aqui')
    }
    else{
        throw new Error('True não é igual a true')
    }
*/

/*  TRATAMENTO DE ERROS - TRY CATCH
    
    try{
        //executar uma função
    }catch(e){
        //retorna o erro
    }

*/

/*  PROMISSES

    classe que recebe dois parâmetros, caso os parâmetros 
    sejam aceitos ou rejeitados.
    O valor do resolve pode ser tratado dentro de outros then
    
    const velocidadeAtual = (velocidade, aceleracao) =>{
        return new Promise(function(resolve,reject){
            if(aceleracao > 0){
                velocidade += aceleracao *2
                console.log('Nova velocidade', velocidade)
                resolve(velocidade)
            }else{
                console.log('aceleracao invalida')
                reject("Não possui aceleração")
            }
        })
    }
    velocidadeAtual(50,2).then(velocidade =>{
     console.log('nova velocidade: ', velocidade)
    })
    
    
    //CATCH
    vai tratar o erro causado pelo reject na Promisse
    
    let naves = [
        {nome: 'Sophina', capacidade: 10, cargaAtual: 5},
        {nome: 'Amsterdã', capacidade: 14, cargaAtual: 10},
        {nome: 'Estrela-Anã', capacidade: 20, cargaAtual: 4}
    ]
    
    function Promessa (capacidade, cargaAtual){
        return new Promise((resolve, reject)=>{
            if(cargaAtual * 100 / capacidade > 30){
                console.log('Iniciando Trajeto \nBoa viagem!')
                console.log('Carga atual: ',cargaAtual,"GJ\n")
            }else{
                console.log('Partida não autorizada')
                reject('Carga atual: ',cargaAtual,"GJ")
            }
        })
    }
    
    naves.map(item=>Promessa(item.capacidade, item.cargaAtual).catch(e=>console.log(e)))
    
    */

    // criar uma nova biblioteca usando o w3s

   