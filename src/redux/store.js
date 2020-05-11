import { ADD_GAME } from "./actionTypes";

const initialState = {
  games: [
    // array of string ids used as game keys
  ],
  boards: [

  ],
}

export default function(state = initialState, {type, payload}) {
  switch(type) {
    case ADD_GAME: {
      const { game } = payload
      return {
        ...state,
        games: [...state.games, game]
      }
    }
    default:
      return state;
  }
}