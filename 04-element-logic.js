function nextElementA() {
    let seqA = [1, 3, 5, 7];
    let proximoA = seqA[seqA.length - 1] + 2;
    console.log("Próximo elemento da sequência (a):", proximoA);
}

function nextElementB() {
    let seqB = [2, 4, 8, 16, 32, 64];
    let proximoB = seqB[seqB.length - 1] * 2;
    console.log("Próximo elemento da sequência (b):", proximoB);
}

function nextElementC() {
    let seqC = [0, 1, 4, 9, 16, 25, 36];
    let n = seqC.length;
    let proximoC = n * n;
    console.log("Próximo elemento da sequência (c):", proximoC);
}

function nextElementD() {
    let seqD = [4, 16, 36, 64];
    let n = 2 * (seqD.length + 1);
    let proximoD = n * n;
    console.log("Próximo elemento da sequência (d):", proximoD);
}

function nextElementE() {
    let seqE = [1, 1, 2, 3, 5, 8];
    let proximoE = seqE[seqE.length - 1] + seqE[seqE.length - 2];
    console.log("Próximo elemento da sequência (e):", proximoE);
}

function nextElementF() {
    let seqF = [2, 10, 12, 16, 17, 18, 19];
    let proximoF = seqF[seqF.length - 1] + seqF[seqF.length - 2];
    console.log("Próximo elemento da sequência (f):", proximoF);
}

nextElementA();
nextElementB();
nextElementC();
nextElementD();
nextElementE();
nextElementF();
