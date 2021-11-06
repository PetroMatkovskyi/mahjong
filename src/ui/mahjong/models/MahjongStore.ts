import { PrimeItemObj } from './PrimeItemObj';

export interface MahjongStore {
  randomPrime: PrimeItemObj[] | [];
  selected: PrimeItemObj[] | [];
}
