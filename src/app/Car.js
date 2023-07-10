"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var Vehicle_1 = require("./Vehicle");
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(cor, carroceria, marca, ano, versão, combustivel, velocidade) {
        var _this = _super.call(this, cor, carroceria, marca, ano, versão, combustivel) || this;
        _this.velocidade = velocidade;
        return _this;
    }
    return Car;
}(Vehicle_1.Vehicle));
var sw4 = new Car('Preto', 'SUV', 'TOYOTA', 2023, 'COMPLETA', 'GASOLINA', 80);
sw4.ligar();
sw4.acelerar();
sw4.businar();
sw4.frear();
sw4.desligar();
sw4.abastecer();
/* testar msg param */
console.log(sw4);
