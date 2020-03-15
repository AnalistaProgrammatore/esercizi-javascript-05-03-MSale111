let votiStudente = {
    voti: [],
    add(voto) {
        this.voti.push(voto)
    },
    media () {
        return this.voti.reduce((accumulatore, corrente) => accumulatore + corrente)/this.voti.length
    }
}

votiStudente.add(7);
votiStudente.add(8);
votiStudente.add(4);
votiStudente.add(6);

console.log (votiStudente.voti);
console.log (votiStudente.media());
