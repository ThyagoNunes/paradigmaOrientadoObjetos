"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
var Vehicle = /** @class */ (function () {
    function Vehicle(cor, carroceria, marca, ano, versão, combustivel) {
        this.cor = cor;
        this.carroceria = carroceria;
        this.marca = marca;
        this.ano = ano;
        this.versão = versão;
        this.combustivel = combustivel;
    }
    Vehicle.prototype.ligar = function () {
        console.log('Ligando o computador de bordo');
        setTimeout(function () {
            console.log('Computador de bordo ligado e pronto pra uso');
        }, 500);
    };
    Vehicle.prototype.desligar = function () {
        setTimeout(function () {
            console.log('Desligando o computador de bordo');
        }, 3000);
    };
    Vehicle.prototype.acelerar = function () {
        setTimeout(function () {
            console.log('Acelerou');
        }, 1000);
    };
    Vehicle.prototype.businar = function () {
        setTimeout(function () {
            console.log('BIP BIP');
        }, 1500);
    };
    Vehicle.prototype.frear = function () {
        setTimeout(function () {
            console.log('Freiar');
        }, 2000);
    };
    Vehicle.prototype.abastecer = function () {
        setTimeout(function () {
            console.log('Reserva combustível < 15% total do tanque');
        }, 2500);
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
