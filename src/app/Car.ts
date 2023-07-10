import { Vehicle } from './Vehicle';

class Car extends Vehicle {
  velocidade: number;
  constructor(
    cor: string,
    carroceria: ('SEDÃ' | 'HATCHBACK' | 'PERUA' | 'SUV' | 'COUPÉ' | 'CONVERSÍVEL' | 'MPV'),
    marca: ('TOYOTA' | 'VOLKSWAGEN' | 'FORD' | 'CHEVROLET' | 'HONDA' | 'BMW' | 'MERCEDES-BENZ' | 'AUDI' | 'NISSAN' | 'TESLA'),
    ano: number,
    versão: ('BÁSICA' | 'LTS' | 'COMPLETA' | 'ESPORTIVA' | 'ECO-FRIENDLY' | 'EDIÇÃO LIMITADA'),
    combustivel: ('DIESEL' | 'ENERGIA' | 'FLEX' | 'ETANOL' | 'GASOLINA' | 'GÁS'),
    velocidade: number,
  ) {
    super(cor, carroceria, marca, ano, versão, combustivel);
    this.velocidade = velocidade;
  }
}

const sw4 = new Car('Preto', 'SUV', 'TOYOTA', 2023, 'COMPLETA', 'GASOLINA', 80)
sw4.ligar();
sw4.acelerar();
sw4.businar();
sw4.frear();
sw4.desligar();
sw4.abastecer();
/* testar msg param */


console.log(sw4);  