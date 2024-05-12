import axios from "axios";
import { ScoringResult } from "./types";

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
  const mappedScore = data.map((row) => ({
    ...row,
    score: 100 / 1 + row.errors,
  }));
  return mappedScore;
};
