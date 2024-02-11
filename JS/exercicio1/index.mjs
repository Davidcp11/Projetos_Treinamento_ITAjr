import { Answer, answerPrinter } from "./utils.mjs"

function cumprimentar(nome) {
    return 'Olá, ' + nome + '!';
}

function idadeEmDias(anos) {
    return anos * 365;
}

function calculaSalario(horas, priceHora) {
    return 'Salário igual a R$ ' + horas * priceHora;
}

function nomeDoMes(mes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return meses[mes - 1];
}

function maiorOuIgual(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        if (a >= b) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function inverso(a) {
    if (typeof a === 'number') {
        return -a;
    } else if (typeof a === 'boolean') {
        return !a;
    } else {
        return 'booleano ou número esperados, mas o parâmetro é do tipo ' + typeof a;
    }
}

function entarEntre(number, min, max, inclusive = false) {
    if (number <= max && number >= min) {
        if (number !== max && number !== min) {
            return true;
        } else if (inclusive) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}


function multiplicar(a, b) {
    let resultado = 0;
    for (let i = 0; i < a; i = i + 1) {
        resultado = resultado + b;
    }
    return resultado;
}

function repetir(elemento, vezes) {
    let resultado = [];
    for (let i = 0; i < vezes; i++) {
        resultado.push(elemento)
    }
    return resultado
}

function simboloMais(a) {
    let resultado = '';
    for (let i = 0; i < a; i++) {
        resultado = resultado + '+';
    }
    return resultado
}

function receberPrimeiroEUltimoElemento(elementos) {
    let resultado = []
    resultado.push(elementos[0]);
    resultado.push(elementos[elementos.length - 1])
    return resultado
}

function removerPropriedade(obj, nome) {
    const chaves = Object.keys(obj);
    let objFinal = {};
    for (let i = 0; i < chaves.length; i++) {
        if (nome !== chaves[i]) {
            objFinal[chaves[i]] = obj[chaves[i]]
        }
    }
    return objFinal
}

function filtrarNumeros(conjunto) {
    let arrayRetorno = [];
    for (let i = 0; i < conjunto.length; i++) {
        if (typeof conjunto[i] === 'number') {
            arrayRetorno.push(conjunto[i]);
        }
    }
    return arrayRetorno;
}

function objetoParaArray(obj) {
    const chaves = Object.keys(obj);
    let arrayDeRetorno = [];
    for (let i = 0; i < chaves.length; i++) {
        arrayDeRetorno.push([chaves[i], obj[chaves[i]]]);
    }
    return arrayDeRetorno;
}

function receberSomenteParesDeIndicesPares(numeros) {
    let arrayDeRetorno = [];
    for (let i = 0; i < numeros.length; i++) {
        if (i % 2 === 0 && numeros[i] % 2 === 0) {
            arrayDeRetorno.push(numeros[i]);
        }
    }
    return arrayDeRetorno;
}

function checarAnoBissexto(ano) {
    if (ano % 4 === 0) {
        if (ano % 100 === 0 && ano % 400 !== 0) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

function somarNumeros(numeros) {
    let resultado = 0;
    for (let i = 0; i < numeros.length; i++) {
        resultado += numeros[i];
    }
    return resultado;
}

function despesasTotais(despesas) {
    let gastosTotais = 0;
    for (let i = 0; i < despesas.length; i++) {
        gastosTotais += despesas[i]['preco'];
    }
    return gastosTotais;
}

function calculaMedia(numeros) {
    let soma = 0;
    let media = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    media = soma / numeros.length;
    return media;
}

function areaDoTriangulo(base, altura) {
    let area = base * altura / 2;
    return area.toFixed(2);
}

function menorNumero(numeros) {
    let numerosOrdenados = numeros.sort((a, b) => a - b);
    return numerosOrdenados[0];
}

function funcaoDaSorte(numero) {
    let numeroAleatorio = Math.round(Math.random() * 10 + 1);
    if (numero === numeroAleatorio) {
        return 'Parabéns! O número sorteado foi o ' + numeroAleatorio;
    } else {
        return 'Que pena! O número sorteado foi o ' + numeroAleatorio
    }
}

function contarPalavras(frase) {
    const palavras = frase.split(" ")
    return palavras.length
}

function contarCaractere(caractere, frase) {
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (caractere === frase[i]) {
            contador++;
        }
    }
    return contador;
}

function buscarPalavrasSemelhantes(palavra, conjuntoDePalavras) {
    let palavrasSemelhantes = [];
    for (let i = 0; i < conjuntoDePalavras.length; i++) {
        if (conjuntoDePalavras[i].includes(palavra)){
            palavrasSemelhantes.push(conjuntoDePalavras[i]);
        }
    }
    return palavrasSemelhantes
}

function removerVogais(frase){
    const vogais = 'aeiou';
    let resultado = '';
    for(let i = 0; i < frase.length; i++){
        if(!vogais.includes(frase[i])){
            resultado += frase[i];
        }
    }
    return resultado;
}

function inverter(obj){
    let objDeRetorno = {};
    const chaves = Object.keys(obj);
    for(let i = 0; i < chaves.length; i++){
        objDeRetorno[obj[chaves[i]]] = chaves[i];
    }
    return objDeRetorno
}

function filtrarPorQtdDeDigitos(numeros, qtdDigitos){
    let arrayDeRetorno = [];
    for(let i = 0; i < numeros.length; i++){
        if(Math.abs(numeros[i]) < 10**(qtdDigitos) && Math.abs(numeros[i]) >= 10**(qtdDigitos-1)){
            arrayDeRetorno.push(numeros[i]);
        }
        
    }
    return arrayDeRetorno;
}

function segundoMaior(numerosSemOrdenacao){
    let ordenados = numerosSemOrdenacao.sort((a, b) => a - b);
    return ordenados[ordenados.length - 2];
}

function receberMelhorEstudante(estudantes){
    const chaves = Object.keys(estudantes);
    let melhorMedia = calculaMedia(estudantes[chaves[0]]);
    let melhorEstudante = chaves[0];
    for(let i = 0; i < chaves.length; i++){
        if(melhorMedia < calculaMedia(estudantes[chaves[i]])){
            melhorMedia = calculaMedia(estudantes[chaves[i]]);
            melhorEstudante = chaves[i];
        }
    }
    return {nome: melhorEstudante, media: melhorMedia}
}

answerPrinter.batchPrint([
    new Answer(cumprimentar, 'Rancho'),
    new Answer(idadeEmDias, 20),
    new Answer(calculaSalario, 150, 40.5),
    new Answer(nomeDoMes, 3),
    new Answer(maiorOuIgual, 1, '1'),
    new Answer(inverso, true),
    new Answer(entarEntre, 5, 5, 10),
    new Answer(multiplicar, 3, 4),
    new Answer(repetir, 'codigo', 3),
    new Answer(simboloMais, 4),
    new Answer(receberPrimeiroEUltimoElemento, ['primeiro', 'meio', 'ultimo']),
    new Answer(removerPropriedade, { a: 1, b: 2 }, 'a'),
    new Answer(filtrarNumeros, ['a', 1, 2, 'b', 5]),
    new Answer(objetoParaArray, { a: 1, b: 2 }),
    new Answer(receberSomenteParesDeIndicesPares, [10, 70, 22, 43]),
    new Answer(checarAnoBissexto, 2020),
    new Answer(somarNumeros, [10, 10, 15, 15]),
    new Answer(despesasTotais, [{ nome: 'a', categoria: 'b', preco: 150 }, { nome: 'a', categoria: 'b', preco: 100 }]),
    new Answer(calculaMedia, [7, 9, 8]),
    new Answer(areaDoTriangulo, 9.25, 13.1),
    new Answer(menorNumero, [7, 9, 5, 3]),
    new Answer(funcaoDaSorte, 4),
    new Answer(contarPalavras, 'Coquinha vai levar G'),
    new Answer(contarCaractere, 'a', 'Coquinha vai levar G'),
    new Answer(buscarPalavrasSemelhantes, 'pro', ['programa', 'tela', 'profissional']),
    new Answer(removerVogais, 'Coquinha vai levar G'),
    new Answer(inverter,  {a: 1, b: 2, c: 3}),
    new Answer(filtrarPorQtdDeDigitos, [123, 10, 100, 1000], 3),
    new Answer(segundoMaior, [1,11,12, 2, 8]),
    new Answer(receberMelhorEstudante, {joao:[1,2,3,4], maria:[1,2,3,5], carla:[1, 2, 2, 3]})])