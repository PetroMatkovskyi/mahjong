import React from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';

import {
  hideWrongSelect,
  selectFirstPrime,
  selectSecondPrime,
  setMatch,
} from 'ui/mahjong/store';
import { PrimeItemObj } from 'ui/mahjong/models/PrimeItemObj';

import './Card.scss';

type Props = {
  prime: PrimeItemObj;
  selected: PrimeItemObj[];
};

export const Card: React.FC<Props> = ({ prime, selected }): JSX.Element => {
  const dispatch = useDispatch();

  const onSelectCard = () => {
    if (!prime.selected && !prime.matched) {
      if (!selected.length) {
        dispatch(selectFirstPrime(prime));
      } else if (selected.length < 2) {
        dispatch(selectSecondPrime(prime));

        if (selected[0].num === prime.num) {
          dispatch(setMatch());
        } else {
          dispatch(hideWrongSelect());
        }
      }
    }
  };

  return (
    <div
      className={cn({
        card: true,
        card_selected: prime.selected,
        card_matched: prime.matched,
      })}
      onClick={onSelectCard}
    >
      <h2 className="card__title">{prime.num}</h2>
    </div>
  );
};
