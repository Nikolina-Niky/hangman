import { useAppDispatch, useAppSelector } from "./hooks";
import { loginUser, loggedUser } from "./reducers/loginReducer";
import {
  quote,
  startGame,
  tryLetter,
  guessedLetters,
  notGuessedLetters,
  numberOfErrors,
  isGameOver,
  stopGame,
  gameResult,
} from "./reducers/gameReducer";

export {
  useAppDispatch,
  useAppSelector,
  loginUser,
  loggedUser,
  quote,
  startGame,
  tryLetter,
  guessedLetters,
  notGuessedLetters,
  numberOfErrors,
  isGameOver,
  stopGame,
  gameResult,
};
