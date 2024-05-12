import {
  Hangman,
  GuessQuote,
  Keyboard,
  GameStatus,
  Suspense,
} from "../../components";
import { Grid, Button } from "@mui/material";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getQuote, sendScoringResult } from "../../services";
import {
  useAppDispatch,
  useAppSelector,
  startGame,
  gameResult,
  loggedUser,
  isGameOver,
} from "../../redux";
import { ScoringResult } from "../../services";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const results = useAppSelector(gameResult);
  const currentUser = useAppSelector(loggedUser);
  const gameOver = useAppSelector(isGameOver);

  const {
    data: quote,
    isPending,
    error,
    refetch: fetchQuote,
  } = useQuery({
    queryKey: ["fetchQuote"],
    queryFn: getQuote,
  });

  const { mutate: sendResults, isSuccess } = useMutation({
    mutationFn: (result: ScoringResult) => {
      return sendScoringResult(result);
    },
  });

  useEffect(() => {
    if (isSuccess) {
      navigate("/results");
    }
  }, [isSuccess, navigate]);

  useEffect(() => {
    if (gameOver && results && currentUser) {
      const finalResult = { ...results, userName: currentUser };
      sendResults(finalResult as ScoringResult);
    }
  }, [gameOver, results, currentUser, sendResults]);

  useEffect(() => {
    if (quote) {
      dispatch(startGame(quote));
    }
  }, [quote, dispatch]);

  return (
    <Suspense isPending={isPending} error={error?.message}>
      <Grid
        container
        display="flex"
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap={3}
      >
        <Grid item>
          <GameStatus />
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={() => fetchQuote()}>
            Restart the game
          </Button>
        </Grid>
        <Grid item>
          <Hangman />
        </Grid>
        <Grid item>
          <GuessQuote />
        </Grid>
        <Grid item>
          <Keyboard />
        </Grid>
      </Grid>
    </Suspense>
  );
};

export default Index;
