import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { ScoringResult, Quote } from "../../services";

interface GameState {
  quote: Quote | null;
  guessedLetters: string[];
  notGuessedLetters: string[];
  startedTime: number;
  isGameOver: boolean;
  isTimeout: boolean;
  gameResults: Partial<ScoringResult> | null;
}

const initialState: GameState = {
  quote: null,
  guessedLetters: [],
  notGuessedLetters: [],
  startedTime: 0,
  isGameOver: false,
  isTimeout: false,
  gameResults: null,
};

export const loginSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame: (state, action: PayloadAction<Quote>) => {
      state.isGameOver = initialState.isGameOver;
      state.isTimeout = initialState.isTimeout;
      state.guessedLetters = initialState.guessedLetters;
      state.notGuessedLetters = initialState.notGuessedLetters;
      state.quote = action.payload;
      const currentDate = new Date();
      state.startedTime = currentDate.getTime();
    },
    tryLetter: (state, action: PayloadAction<string>) => {
      state.quote?.content.toUpperCase().includes(action.payload.toUpperCase())
        ? state.guessedLetters.push(action.payload.toUpperCase())
        : state.notGuessedLetters.push(action.payload.toUpperCase());
    },
    stopGame: (state, action: PayloadAction<boolean>) => {
      const currentDate = new Date();
      const finishedTime = currentDate.getTime();
      const uniqueChar = [...new Set(state.quote?.content.toUpperCase())];
      state.gameResults = {
        quoteId: state.quote?._id,
        length: state.quote?.content.length,
        uniqueCharacters: uniqueChar.filter((letter) => letter.match("[A-Z]"))
          .length,
        duration: finishedTime - state.startedTime,
        errors: state.notGuessedLetters.length,
      };
      state.isTimeout = action.payload;
      state.isGameOver = true;
    },
  },
});

export const { startGame, tryLetter, stopGame } = loginSlice.actions;
export const quote = (state: RootState) => state.game.quote;
export const guessedLetters = (state: RootState) => state.game.guessedLetters;
export const notGuessedLetters = (state: RootState) =>
  state.game.notGuessedLetters;
export const numberOfErrors = (state: RootState) =>
  state.game.notGuessedLetters.length;
export const isGameOver = (state: RootState) => state.game.isGameOver;
export const gameResult = (state: RootState) => state.game.gameResults;
export default loginSlice.reducer;
export const isTimeout = (state: RootState) => state.game.isTimeout;
