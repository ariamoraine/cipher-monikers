import { ADD_GAME } from './actionTypes';

export const addGame = game => ({
  type: ADD_GAME,
  payload: {
    game
  }
})