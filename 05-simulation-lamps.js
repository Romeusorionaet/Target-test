const lamps = {
    1: { status: "desligada", temperature: "fria" },
    2: { status: "desligada", temperature: "fria" },
    3: { status: "desligada", temperature: "fria" }
};

function turnOnSwitch(alternator) {
    lamps[alternator].status = "acesa";
}

function turnOffSwitch(alternator) {
    lamps[alternator].status = "desligada";
}

function warmLamp(alternator) {
    lamps[alternator].temperature = "quente";
}

function discoverLamps() {
    console.log("Passo 1: Ligar alternator A e deixar por alguns minutos. A lâmpada conectada a ele é aquecida.");
    turnOnSwitch(1);
    warmLamp(1);
    
    console.log("Passo 2: Desligar alternator A e ligar alternator B.");
    turnOffSwitch(1);
    turnOnSwitch(2);
    
    console.log("Passo 3: Deixar alternator C desligado.");
    turnOffSwitch(3);

    console.log("\nVisitando a sala das lâmpadas...");

    for (let i = 1; i <= 3; i++) {
        if (lamps[i].status === "acesa") {
            lamps[i].temperature = "fria";
        }
    }

    lamps[1].temperature = "quente"; 

    lamps[2].temperature = "quente"; 

    lamps[3].temperature = "fria"; 

    for (let i = 1; i <= 3; i++) {
        console.log(`Lâmpada ${i}: Status ${lamps[i].status}, Temperatura ${lamps[i].temperature}`);
    }

    console.log("\nAssim sabemos que:")
    console.log("\nA lâmpada (1): desligada e quente pertence ao alternator A.");    
    console.log("\nA lâmpada (2): acesa e quente pertence ao alternator B.");    
    console.log("\nA lâmpada (3): desligada e fria pertence ao alternator C.");    
}

discoverLamps();
