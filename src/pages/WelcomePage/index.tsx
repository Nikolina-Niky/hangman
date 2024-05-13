import { Typography, Grid, Button } from "@mui/material";
import { useAppSelector, loggedUser } from "../../redux";
import TimerIcon from "@mui/icons-material/Timer";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const currentUser = useAppSelector(loggedUser);
  const navigate = useNavigate();

  return (
    <Grid container display="flex" direction="column" gap={3}>
      <Grid item alignSelf="end">
        <Typography variant="h1">{`Welcome ${currentUser}`}</Typography>
        <Typography variant="h3">
          Ready? Let's play the game! Good luck
        </Typography>
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          onClick={() => navigate("/game", { replace: true })}
          startIcon={<TimerIcon />}
        >
          Start the game
        </Button>
        <Typography pt={3}>
          Note: You can use only buttons (letters) on the screen
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Index;
