
// Array para armazenar os resultados
let resultados = [];

// Função para soma
function soma(a, b) {
    return a + b;
}

// Função para subtração
function subtracao(a, b) {
    return a - b;
}

// Função para multiplicação
function multiplicacao(a, b) {
    return a * b;
}

// Função para divisão
function divisao(a, b) {
    if (b === 0) {
        return "Erro: Divisão por zero não é permitida.";
    }
    return a / b;
}

// Função para calcular porcentagem
function porcentagem(valor, percentual) {
    return (valor * percentual) / 100;
}

// Função para concatenação de strings
function concatenar(str1, str2) {
    return str1 + str2;
}

// Captura de entradas do usuário
let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));
let string1 = prompt("Digite a primeira string:");
let string2 = prompt("Digite a segunda string:");

// Processa as operações e armazena os resultados
resultados.push("Soma: " + soma(num1, num2));
resultados.push("Subtração: " + subtracao(num1, num2));
resultados.push("Multiplicação: " + multiplicacao(num1, num2));
resultados.push("Divisão: " + divisao(num1, num2));
resultados.push("Porcentagem de " + num1 + " (20%): " + porcentagem(num1, 20));
resultados.push("Concatenação: " + concatenar(string1, string2));

// Exibe os resultados usando alert()
alert("Resultados das operações:\n" + resultados.join("\n"));

// Exibe todos os resultados no console
console.log("Resultados das operações:");
resultados.forEach(resultado => console.log(resultado));
