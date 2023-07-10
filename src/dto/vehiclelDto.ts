export interface VehicleDto {
  cor: string
  carroceria:('SEDÃ' | 'HATCHBACK' | 'PERUA' | 'SUV' | 'COUPÉ' | 'CONVERSÍVEL' | 'MPV' | 'NAKED' | 'ESPORTIVA' | 'CUSTOM' | 'TOURING' | 'OFF-ROAD' | 'SCOOTER' | 'TRAIL' | 'ELÉTRICO(A)');
  marca: ('TOYOTA' | 'VOLKSWAGEN' | 'FORD' | 'CHEVROLET' | 'HONDA' | 'BMW' | 'MERCEDES-BENZ' | 'AUDI' | 'NISSAN' | 'TESLA' | 'HONDA' | 'SUZUKI' | 'KAWASAKI' | 'YAMAHA' | 'HARLEY-DAVIDSON');
  ano: number;
  versão: ('BÁSICA' | 'LTS' | 'COMPLETA' | 'ESPORTIVA' | 'ECO-FRIENDLY' | 'EDIÇÃO LIMITADA' | 'EDIÇÃO ESPECIAL' | 'EDIÇÃO COLECIONADOR');
  combustivel: ('DIESEL' | 'ENERGIA' | 'FLEX' | 'ETANOL' | 'GASOLINA' | 'GÁS');
}