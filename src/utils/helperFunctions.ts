export const getAlphabet = () => {
  const alphabetArray: string[] = [];
  for (let i = 65; i <= 90; i++) {
    alphabetArray.push(String.fromCharCode(i));
  }
  return alphabetArray;
};

export const calculateScore = (L: number, U: number, E: number, T: number) => {
  const MAX_NUMBER_OF_ERRORS = 20; // in my case is 6 because after 6 is game over, this is only because of fetched results

  const errorPoints = (MAX_NUMBER_OF_ERRORS - E) * 26000;
  const uniqueLettersPoints = U * 1000;
  const lengthPoints = L + 100;
  const timePoints = Math.round(T / 1000);

  return errorPoints + uniqueLettersPoints + lengthPoints - timePoints;
};
