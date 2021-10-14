class Dolgozo {
    name: string;
    city: string;
    salary: number;
    constructor(name: string, city: string, salary: number) {
        this.name = name;
        this.city = city;
        this.salary = salary;
    }
}

let bela = new Dolgozo('Alakos Mária', 'Szeged', 1700000);
console.log(bela.name);


