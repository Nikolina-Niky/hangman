import axios from "axios";
import { ScoringResult } from "./types";
import { calculateScore } from "../../utils/helperFuctions";

export const httpsScoringService = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task",
  headers: {
    "Content-type": "application/json",
  },
});

export const sendScoringResult = async (scoringResult: ScoringResult) => {
  const { data } = await httpsScoringService.post("/highscores", scoringResult);
  return data;
};

export const getScoringResults = async () => {
  const { data } = await httpsScoringService.get<ScoringResult[]>(
    "/highscores"
  );

  return data.map((result) => ({
    ...result,
    score: calculateScore(
      result.length,
      result.uniqueCharacters,
      result.errors,
      result.duration
    ),
  }));
};
