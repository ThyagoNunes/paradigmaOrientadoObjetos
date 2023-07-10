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
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(cor, carroceria, marca, ano, versão, combustivel, velocidade) {
        var _this = _super.call(this, cor, carroceria, marca, ano, versão, combustivel) || this;
        _this.velocidade = velocidade;
        return _this;
    }
    return Motorcycle;
}(Vehicle_1.Vehicle));
var cbr1000 = new Motorcycle('Preta', 'ESPORTIVA', 'HONDA', 2023, 'EDIÇÃO LIMITADA', 'GASOLINA', 80);
cbr1000.acelerar();
cbr1000.businar();
cbr1000.frear();
cbr1000.abastecer();
/* testar msg param */
console.log(cbr1000);
