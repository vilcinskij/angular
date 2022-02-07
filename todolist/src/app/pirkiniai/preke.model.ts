export class Preke{
    public pavadinimas:string;  // publick ir taip by default, bet rašome kad butu daugiau gražių žodžių
    public kiekis:string;
    
    constructor(pavadinimas:string, kiekis:string){
        this.pavadinimas=pavadinimas;
        this.kiekis=kiekis
    }

}