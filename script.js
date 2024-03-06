class Partito {
    #privateVoti = 0;
    constructor(nome) {
        this.nome = nome;
    }

    addVoto() {
        this.#privateVoti += 1;
        stampaPartiti(); //dopo aver modificato il valore, richiamo la stampa
    }

    ritornaVoti() { //ritorna un valore numerico con contenuto i voti
        return this.#privateVoti;
    }
}

//richimato solamente all'inizio onload(). e' un ordine predefinito
function inizio() {
    document.getElementById("primoPosto").innerHTML = "Partito 1, voti: 0";
    document.getElementById("secondoPosto").innerHTML = "Partito 2, voti: 0";
    document.getElementById("terzoPosto").innerHTML = "Partito 3, voti: 0";
}

const partito1 = new Partito("Partito 1");
const partito2 = new Partito("Partito 2")
const partito3 = new Partito("Partito 3")

//stampa in ordine di voto i partiti
function stampaPartiti() {
    const votiPartito1 = partito1.ritornaVoti();
    const votiPartito2 = partito2.ritornaVoti();
    const votiPartito3 = partito3.ritornaVoti();

    //controllo tutte le possibili combinazioni per stampare in ordine di voto
    if (votiPartito1 >= votiPartito2 && votiPartito1 >= votiPartito3) {
        document.getElementById("primoPosto").innerHTML = "Partito 1, voti: " + partito1.ritornaVoti();
        if (votiPartito2 >= votiPartito3) {
            document.getElementById("secondoPosto").innerHTML = "Partito 2, voti: " + partito2.ritornaVoti();
            document.getElementById("terzoPosto").innerHTML = "Partito 3, voti: " + partito3.ritornaVoti();
        } else {
            document.getElementById("secondoPosto").innerHTML = "Partito 3, voti: " + partito3.ritornaVoti();
            document.getElementById("terzoPosto").innerHTML = "Partito 2, voti: " + partito2.ritornaVoti();
        }

    } else if (votiPartito2 >= votiPartito1 && votiPartito2 >= votiPartito3) {
        document.getElementById("primoPosto").innerHTML = "Partito 2, voti: " + partito2.ritornaVoti();
        if (votiPartito1 >= votiPartito3) {
            document.getElementById("secondoPosto").innerHTML = "Partito 1, voti: " + partito1.ritornaVoti();
            document.getElementById("terzoPosto").innerHTML = "Partito 3, voti: " + partito3.ritornaVoti();
        } else {
            document.getElementById("secondoPosto").innerHTML = "Partito 3, voti: " + partito3.ritornaVoti();
            document.getElementById("terzoPosto").innerHTML = "Partito 1, voti: " + partito1.ritornaVoti();
        }
    } else {
        document.getElementById("primoPosto").innerHTML = "Partito 3, voti: " + partito3.ritornaVoti();
        if (votiPartito1 >= votiPartito2) {
            document.getElementById("secondoPosto").innerHTML = "Partito 1, voti: " + partito1.ritornaVoti();
            document.getElementById("terzoPosto").innerHTML = "Partito 2, voti: " + partito2.ritornaVoti();
        } else {
            document.getElementById("secondoPosto").innerHTML = "Partito 2, voti: " + partito2.ritornaVoti();
            document.getElementById("terzoPosto").innerHTML = "Partito 1, voti: " + partito1.ritornaVoti();
        }
    }
}

//richiamo il metodo dell'oggetto che aggiunge un voto
function aggiungiVoto(nomePartito) {
    if (nomePartito === "partito1") {
        partito1.addVoto();
    } else if (nomePartito === "partito2") {
        partito2.addVoto();
    } else
        partito3.addVoto();
}


