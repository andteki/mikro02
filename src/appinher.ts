class Szemely {
    name: string;
    city: string;
    constructor(name: string, city: string) {
        this.name = name;
        this.city = city;
    }
}

class Dolgozo extends Szemely {
    salary: number;
}

class Mernok extends Dolgozo {
    diploma: string;
}

let imre = new Dolgozo('Pali Imre', 'Szeged');
imre.salary = 1950000;
let kati = new Mernok('Ernyős Katalin', 'Szeged');
kati.diploma = "834123BDU";
console.log(kati.name, kati.diploma);

