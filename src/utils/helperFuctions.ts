export const getAlphabet = () => {
  const alphabetArray: string[] = [];
  for (let i = 65; i <= 90; i++) {
    alphabetArray.push(String.fromCharCode(i));
  }
  return alphabetArray;
};
