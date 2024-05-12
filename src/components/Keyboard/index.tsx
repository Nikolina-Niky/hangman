import { useMemo } from "react";
import { getAlphabet } from "../../utils";
import { MarginButton } from "./styled";
import {
  useAppDispatch,
  useAppSelector,
  tryLetter,
  notGuessedLetters,
  guessedLetters,
  isGameOver,
} from "../../redux";

const Index = () => {
  const alphabet = useMemo(() => {
    return getAlphabet();
  }, []);

  const dispatch = useAppDispatch();
  const guessed = useAppSelector(guessedLetters);
  const notGueesed = useAppSelector(notGuessedLetters);
  const gameOver = useAppSelector(isGameOver);

  return (
    <>
      {alphabet.map((letter: string, i: number) => (
        <MarginButton
          key={`${letter}${i}`}
          disabled={
            gameOver || guessed.includes(letter) || notGueesed.includes(letter)
          }
          variant="contained"
          onClick={() => dispatch(tryLetter(letter))}
        >
          {letter}
        </MarginButton>
      ))}
    </>
  );
};

export default Index;
