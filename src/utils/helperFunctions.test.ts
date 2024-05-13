import { calculateScore } from "./helperFunctions";

describe("calculateScore", () => {
  test("result with fewer errors is ranged higher", () => {
    const sore1 = calculateScore(54, 17, 1, 65956);
    const sore2 = calculateScore(68, 20, 2, 65956);
    expect(sore1).toBeGreaterThanOrEqual(sore2);
  });

  test("result with same number of errors and higher number of unique letters is ranged higher", () => {
    const sore1 = calculateScore(54, 17, 2, 65956);
    const sore2 = calculateScore(68, 20, 2, 65956);
    expect(sore2).toBeGreaterThanOrEqual(sore1);
  });

  test("result with same number of errors and unique letters and longer text is ranged higher", () => {
    const sore1 = calculateScore(54, 20, 2, 65956);
    const sore2 = calculateScore(68, 20, 2, 65956);
    expect(sore2).toBeGreaterThanOrEqual(sore1);
  });

  test("result with same number of errors and unique letters and text length, fester result is ranged higher", () => {
    const sore1 = calculateScore(68, 20, 2, 65956);
    const sore2 = calculateScore(68, 20, 2, 45956);
    expect(sore2).toBeGreaterThanOrEqual(sore1);
  });
});
