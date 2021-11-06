import { combineReducers } from 'redux';
import { mahjongReducer } from '../../ui/mahjong/store';

export const rootReducer = combineReducers({
  mahjong: mahjongReducer,
});
