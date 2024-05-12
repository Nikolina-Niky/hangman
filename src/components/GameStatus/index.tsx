import { Typography } from "@mui/material";
import {
  useAppSelector,
  useAppDispatch,
  guessedLetters,
  notGuessedLetters,
  numberOfErrors,
  quote,
  stopGame,
} from "../../redux";
import { useEffect } from "react";

const Index = () => {
  const notGuessed = useAppSelector(notGuessedLetters);
  const guessed = useAppSelector(guessedLetters);
  const guessedQuote = useAppSelector(quote);
  const errors = useAppSelector(numberOfErrors);
  const quoteToGuess = useAppSelector(quote);
  const dispatch = useAppDispatch();

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
      dispatch(stopGame());
    }
  }, [isWinner, isLoser, dispatch]);

  return (
    <>
      {!isWinner && !isLoser && quoteToGuess && (
        <Typography variant="h2">{`number of letters that do not match ${errors}`}</Typography>
      )}
    </>
  );
};

export default Index;
