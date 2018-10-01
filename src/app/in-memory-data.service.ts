import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const productos = [
        { id: 11, nombre: 'Monitor' },
        { id: 12, nombre: 'Teclado' },
        { id: 13, nombre: 'Ratón' },
        { id: 14, nombre: 'UPS' },
        { id: 15, nombre: 'Barracuda' },
        { id: 16, nombre: 'Rack' },
        { id: 17, nombre: 'Regleta' }
    ];
    return {productos};
  }
}