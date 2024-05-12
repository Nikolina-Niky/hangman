import { getQuote } from "./gameService";
import { getScoringResults, sendScoringResult } from "./scoringService";
import type { Quote } from "./gameService/types";
import type { ScoringResult } from "./scoringService/types";

export { getQuote, getScoringResults, sendScoringResult };
export type { Quote, ScoringResult };
