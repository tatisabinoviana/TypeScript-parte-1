import { Comparavel } from './comparavel.js';
import { Imprmivel } from '../utils/imprimivel.js';

export interface Modelo<T> extends Imprmivel, Comparavel<T> {
}