import { Imprmivel } from './imprimivel.js';

export function imprimir(...objetos: Imprmivel[]) {
  for (let objeto of objetos) {
    console.log(objeto.paraTexto());
  }
}