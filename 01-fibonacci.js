const readline = require('readline');

function fibonacci(n) {
    let a = 0, b = 1;
    while (a < n) {
        [a, b] = [b, a + b];
    }
    return a === n;
}

function verificationFibonacci(numero) {
    if (fibonacci(numero)) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${numero} NÃO pertence à sequência de Fibonacci.`;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Informe um número: ", (input) => {
    const numeroInformado = parseInt(input);
    const resultado = verificationFibonacci(numeroInformado);
    console.log(resultado);
    rl.close();
});
