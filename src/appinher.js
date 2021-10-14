var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Szemely = /** @class */ (function () {
    function Szemely(name, city) {
        this.name = name;
        this.city = city;
    }
    return Szemely;
}());
var Dolgozo = /** @class */ (function (_super) {
    __extends(Dolgozo, _super);
    function Dolgozo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dolgozo;
}(Szemely));
var Mernok = /** @class */ (function (_super) {
    __extends(Mernok, _super);
    function Mernok() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Mernok;
}(Dolgozo));
var imre = new Dolgozo('Pali Imre', 'Szeged');
imre.salary = 1950000;
var kati = new Mernok('Ernyős Katalin', 'Szeged');
kati.diploma = "834123BDU";
console.log(kati.name, kati.diploma);
