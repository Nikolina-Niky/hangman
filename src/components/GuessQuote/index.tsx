import { useAppSelector, guessedLetters, quote, isGameOver } from "../../redux";
import {
  MaskedQuote,
  EmptySpace,
  MaskedLetter,
  QuoteLetterBox,
} from "./styled";

const Index = () => {
  const guessed = useAppSelector(guessedLetters);
  const quoteToGuess = useAppSelector(quote);
  const gameOver = useAppSelector(isGameOver);

  const returnStyledLetter = (letter: string, i: number) => {
    if (letter.match("[A-Za-z]")) {
      return (
        <MaskedLetter key={i}>
          {(guessed.includes(letter.toUpperCase()) || gameOver) && letter}
        </MaskedLetter>
      );
    } else if (letter === "") {
      return <EmptySpace key={i}>&nbsp;&nbsp;</EmptySpace>;
    } else {
      return <span key={i}>{letter}</span>;
    }
  };

  return (
    <QuoteLetterBox>
      <MaskedQuote>
        {quoteToGuess?.content
          .split("")
          .map((letter: string, i: number) => returnStyledLetter(letter, i))}
      </MaskedQuote>
    </QuoteLetterBox>
  );
};

export default Index;
