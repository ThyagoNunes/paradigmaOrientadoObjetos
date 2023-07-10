import { Vehicle } from './Vehicle';

class Motorcycle extends Vehicle {
  velocidade: number;
  constructor(
    cor: string,
    carroceria: ('NAKED' | 'ESPORTIVA' | 'CUSTOM' | 'TOURING' | 'OFF-ROAD' | 'SCOOTER' | 'TRAIL' | 'ELÉTRICO(A)'),
    marca: ('HONDA' | 'SUZUKI' | 'KAWASAKI' |  'YAMAHA' | 'HARLEY-DAVIDSON'),
    ano: number,
    versão: "ESPORTIVA" | "BÁSICA" | "EDIÇÃO LIMITADA" | "EDIÇÃO ESPECIAL" | "EDIÇÃO COLECIONADOR",
    combustivel: ('DIESEL' | 'ENERGIA' | 'FLEX' | 'ETANOL' | 'GASOLINA'),
    velocidade: number,
  ) {
    super(cor, carroceria, marca, ano, versão, combustivel);
    this.velocidade = velocidade;
  }
}

const cbr1000 = new Motorcycle('Preta', 'ESPORTIVA', 'HONDA', 2023, 'EDIÇÃO LIMITADA', 'GASOLINA', 80)
cbr1000.acelerar();
cbr1000.businar();
cbr1000.frear();
cbr1000.abastecer();
/* testar msg param */


console.log(cbr1000);  