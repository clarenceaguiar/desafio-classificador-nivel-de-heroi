let nomeHeroi = "Mike";
let quantXP = 10500;
let nivel = "";

if (quantXP < 1000) {
    nivel = "Madeira";
} else if (quantXP >= 1001 && quantXP <= 2000){
    nivel = "Ferro";
} else if (quantXP >= 2001 && quantXP <= 5000) {
    nivel = "Bronze";
} else if (quantXP >= 5001 && quantXP <= 6000) {
    nivel = "Prata";
} else if (quantXP >= 6001 && quantXP <= 7000) {
    nivel = "Ouro";
} else if (quantXP >= 7001 && quantXP <= 8000) {
    nivel = "Platina";
} else if (quantXP >= 8001 && quantXP <= 9000) {
    nivel = "Ascendente";
} else if (quantXP >= 9001 && quantXP <= 10000) {
    nivel = "Imortal";
} else if (quantXP >= 10001) {
    nivel = "Radiante";
}

console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivel + ".");