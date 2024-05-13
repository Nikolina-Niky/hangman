export const getAlphabet = () => {
  const alphabetArray: string[] = [];
  for (let i = 65; i <= 90; i++) {
    alphabetArray.push(String.fromCharCode(i));
  }
  return alphabetArray;
};

export const calculateScore = (L: number, U: number, E: number, T: number) => {
  const MAX_TIME = 600000;
  const MAX_NUMBER_OF_ERRORS = 20; // in my case is 6 because after 6 is game over, this is only because of feched results
  const MAX_NUMBER_OF_UNIQUE_LETERS = 26;

  const errorPoints = MAX_NUMBER_OF_ERRORS - E + 300;
  const uniqueLettersPoints = MAX_NUMBER_OF_UNIQUE_LETERS - U + 200;

  const lengthPoints = L + 100;

  const timePoints = Math.round(100 - (T / MAX_TIME) * 100);

  return errorPoints + uniqueLettersPoints + lengthPoints + timePoints;
};
