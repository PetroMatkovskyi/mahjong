import {
  GET_RANDOM_OF_PRIMES,
  HIDE_WRONG_SELECT,
  SELECTED_FIRST_PRIME,
  SELECTED_SECOND_PRIME,
  SET_MATCH,
} from './types';
import { MahjongStore } from '../models/MahjongStore';
import { PrimeItemObj } from '../models/PrimeItemObj';

type Action = {
  type: string;
  payload: any | PrimeItemObj;
};

const initialState: MahjongStore = { randomPrime: [], selected: [] };

export const mahjongReducer = (state = initialState, action: Action): MahjongStore => {
  switch (action.type) {
    case GET_RANDOM_OF_PRIMES:
      return { ...state, randomPrime: [...action.payload] };

    case SELECTED_FIRST_PRIME:
      return {
        ...state,
        randomPrime: state.randomPrime.map((i) => {
          if (i.id === action.payload.id) return { ...i, selected: true };
          return i;
        }),
        selected: [...state.selected, action.payload],
      };

    case SELECTED_SECOND_PRIME:
      return {
        ...state,
        randomPrime: state.randomPrime.map((i) => {
          if (i.id === action.payload.id) return { ...i, selected: true };
          return i;
        }),
        selected: [...state.selected, action.payload],
      };

    case SET_MATCH:
      return {
        ...state,
        randomPrime: state.randomPrime.map((i) => {
          if (i.selected) return { ...i, selected: false, matched: true };
          return i;
        }),
        selected: [],
      };

    case HIDE_WRONG_SELECT:
      return {
        ...state,
        randomPrime: state.randomPrime.map((i) => {
          if (i.selected) return { ...i, selected: false };
          return i;
        }),
        selected: [],
      };
  }
  return state;
};
