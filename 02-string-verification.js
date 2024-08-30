const readline = require('readline');

function verificationStringA(str) {
    const regex = /a/gi; 
    const matches = str.match(regex); 
    const count = matches ? matches.length : 0; 

    if (count > 0) {
        return `A letra 'a' (maiúscula ou minúscula) aparece ${count} vezes na string.`;
    } else {
        return "A letra 'a' (maiúscula ou minúscula) não foi encontrada na string.";
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Escreva algo e irei verificar quantas vezes a letra 'a' foi escrita: ", (input) => {
    const resultado = verificationStringA(input);
    console.log(resultado);
    rl.close();
});
