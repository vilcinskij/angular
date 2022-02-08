export class Uzduotis{
    public pavadinimas:string;  // publick ir taip by default, bet rašome kad butu daugiau gražių žodžių
    public tipas:string;
    
    constructor(pavadinimas:string, tipas:string){
        this.pavadinimas=pavadinimas;
        this.tipas=tipas;
    }

}