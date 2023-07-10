import { VehicleDto } from "../dto/vehiclelDto";

abstract class Vehicle implements VehicleDto{
  cor: string
  carroceria: (
  'SEDÃ' | 'HATCHBACK' | 'PERUA' | 'SUV' | 'COUPÉ' | 'CONVERSÍVEL' | 'MPV' |
  'NAKED' | 'ESPORTIVA' | 'CUSTOM' | 'TOURING' | 'OFF-ROAD' | 'SCOOTER' | 'TRAIL' | 'ELÉTRICO(A)');
  marca: (
  'TOYOTA' | 'VOLKSWAGEN' | 'FORD' | 'CHEVROLET' | 'HONDA' | 'BMW' | 'MERCEDES-BENZ' | 'AUDI' | 'NISSAN' | 'TESLA'
  | 'HONDA' | 'SUZUKI' | 'KAWASAKI' | 'YAMAHA' | 'HARLEY-DAVIDSON');
  ano: number;
  versão: ('BÁSICA' | 'LTS' | 'COMPLETA' | 'ESPORTIVA' | 'ECO-FRIENDLY' | 'EDIÇÃO LIMITADA' | 'EDIÇÃO ESPECIAL' | 'EDIÇÃO COLECIONADOR');
  combustivel: ('DIESEL' | 'ENERGIA' | 'FLEX' | 'ETANOL' | 'GASOLINA' | 'GÁS');

  protected constructor(
    cor: string,
    carroceria: ('SEDÃ' | 'HATCHBACK' | 'PERUA' | 'SUV' | 'COUPÉ' | 'CONVERSÍVEL' | 'MPV' | 'NAKED' | 'ESPORTIVA' | 'CUSTOM' | 'TOURING' | 'OFF-ROAD' | 'SCOOTER' | 'TRAIL' | 'ELÉTRICO(A)'),
    marca: ('TOYOTA' | 'VOLKSWAGEN' | 'FORD' | 'CHEVROLET' | 'HONDA' | 'BMW' | 'MERCEDES-BENZ' | 'AUDI' | 'NISSAN' | 'TESLA' | 'HONDA' | 'SUZUKI' | 'KAWASAKI' | 'YAMAHA' | 'HARLEY-DAVIDSON'),
    ano: number,
    versão: ('BÁSICA' | 'LTS' | 'COMPLETA' | 'ESPORTIVA' | 'ECO-FRIENDLY' | 'EDIÇÃO LIMITADA'  | 'EDIÇÃO ESPECIAL' | 'EDIÇÃO COLECIONADOR'),
    combustivel: ('DIESEL' | 'ENERGIA' | 'FLEX' | 'ETANOL' | 'GASOLINA' | 'GÁS')
  ) {
    this.cor = cor;
    this.carroceria = carroceria;
    this.marca = marca;
    this.ano = ano;
    this.versão = versão;
    this.combustivel = combustivel;
  }

  ligar(): void{
    console.log('Ligando o computador de bordo');
    setTimeout(() => {
      console.log('Computador de bordo ligado e pronto pra uso')
    }, 500)
  }
  
  desligar(): void {
    setTimeout(() => {
      console.log('Desligando o computador de bordo');
    }, 3000)
  }
  
  acelerar(): void {
    setTimeout(() => {
      console.log('Acelerou')
    }, 1000);
  }

  businar(): void{
    setTimeout(() => {
      console.log('BIP BIP');
    }, 1500);
  }

  frear(): void {
    setTimeout(() => {
      console.log('Freiar')
    }, 2000);
  }

  abastecer(): void {
    setTimeout(() => {
      console.log('Reserva combustível < 15% total do tanque')
    }, 2500);
  }

}

export { Vehicle }