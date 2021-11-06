import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card } from '../../components/Card';
import { getRandomPrimes } from '../../store';
import { MahjongStore } from '../../models/MahjongStore';

import './MahjongPage.scss';

export const MahjongPage: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRandomPrimes());
  }, []);

  const onclick = () => {
    dispatch(getRandomPrimes());
  };

  const store = useSelector((store: { mahjong: MahjongStore }) => store.mahjong);
  return (
    <div className="wrapper">
      <h1>Mahjong game</h1>
      <div className="cards">
        {store.randomPrime.map((item, i) => (
          <Card key={i} prime={item} selected={store.selected} />
        ))}
      </div>
      <button onClick={onclick} className="button">
        reload
      </button>
    </div>
  );
};
