import * as types from './types';
import { PrimeItemObj } from '../models/PrimeItemObj';

function getPrimes(num: number = 50): number[] {
  const sieve: boolean[] = [];
  const primes: number[] = [];

  for (let i = 2; i <= num; i++) {
    if (!sieve[i]) {
      primes.push(i);
      for (let j = i * 2; j <= num; j += i) {
        sieve[j] = true;
      }
    }
  }
  return primes;
}

function getRandomPlace(num: number) {
  return Math.floor(Math.random() * num * 2);
}

function randomPrimes(): PrimeItemObj[] {
  const prime: number[] = getPrimes();
  const randomDoublePrime: number[] = new Array(prime.length * 2);

  for (let i = 0; i <= prime.length; i++) {
    let firstRandomPlace = getRandomPlace(prime.length);
    let secondRandomPlace = getRandomPlace(prime.length);

    if (!randomDoublePrime[firstRandomPlace]) {
      randomDoublePrime[firstRandomPlace] = prime[i];
    } else {
      for (
        let count = 0, startPosition = firstRandomPlace + 1;
        count <= randomDoublePrime.length;
        count++, startPosition++
      ) {
        if (startPosition >= randomDoublePrime.length) startPosition = 0;

        if (!randomDoublePrime[startPosition]) {
          randomDoublePrime[startPosition] = prime[i];
          break;
        }
      }
    }
    for (
      let count = 0, startPosition = secondRandomPlace + 1;
      count <= randomDoublePrime.length;
      count++, startPosition++
    ) {
      if (startPosition >= randomDoublePrime.length) startPosition = 0;

      if (!randomDoublePrime[startPosition]) {
        randomDoublePrime[startPosition] = prime[i];
        break;
      }
    }
  }
  return randomDoublePrime.map(
    (item, i): PrimeItemObj => ({
      id: i,
      num: item,
      matched: false,
      selected: false,
    })
  );
}

export const getRandomPrimes = () => ({
  type: types.GET_RANDOM_OF_PRIMES,
  payload: randomPrimes(),
});

export const selectFirstPrime = (prime: PrimeItemObj) => ({
  type: types.SELECTED_FIRST_PRIME,
  payload: prime,
});

export const selectSecondPrime = (prime: PrimeItemObj) => ({
  type: types.SELECTED_SECOND_PRIME,
  payload: prime,
});

export const setMatch = () => {
  return { type: types.SET_MATCH };
};

export const hideWrongSelect = () => {
  return async (dispatch: any) =>
    setTimeout(() => {
      dispatch({ type: types.HIDE_WRONG_SELECT });
    }, 800);
};
