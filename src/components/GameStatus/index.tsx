import { Typography } from "@mui/material";
import {
  useAppSelector,
  useAppDispatch,
  guessedLetters,
  notGuessedLetters,
  numberOfErrors,
  quote,
  stopGame,
  isTimeout,
} from "../../redux";
import { useEffect } from "react";

const Index = () => {
  const notGuessed = useAppSelector(notGuessedLetters);
  const guessed = useAppSelector(guessedLetters);
  const guessedQuote = useAppSelector(quote);
  const errors = useAppSelector(numberOfErrors);
  const timeout = useAppSelector(isTimeout);
  const dispatch = useAppDispatch();

  // it is used only here, if it shoud be used on multiple places it will be moved to reducer
  const isWinner =
    guessedQuote &&
    notGuessed.length <= 5 &&
    guessedQuote?.content
      .toUpperCase()
      .split("")
      .filter((letter) => letter.match("[A-Z]"))
      .every((letter) => guessed.includes(letter));

  const isLoser = guessedQuote && notGuessed.length > 5;

  useEffect(() => {
    if (isWinner || isLoser) {
      dispatch(stopGame(false));
    }
  }, [isWinner, isLoser, dispatch]);

  const getTitle = () => {
    switch (true) {
      case isLoser:
        return "Nice try!";
      case isWinner:
        return "Wohoooo, you win!";
      case timeout:
        return "Sorry your time is out!";
      default:
        return `number of letters that do not match ${errors}.  Tries left ${
          6 - errors
        }`;
    }
  };

  return <Typography variant="h2">{getTitle()}</Typography>;
};

export default Index;
