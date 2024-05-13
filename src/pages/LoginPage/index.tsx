import { TextField, Typography, Button, Grid } from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppDispatch, loginUser } from "../../redux";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  name: yup.string().trim().default("").required("Name is a required").min(2),
});

type FormType = yup.InferType<typeof schema>;

const Index = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: yupResolver(schema),
    context: { validationSchema: schema },
  });

  const onSubmit = (formFields: FormType) => {
    dispatch(loginUser(formFields.name));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h1">Welcome to the Hangman game</Typography>
      <Grid container display="flex" direction="column" gap={3}>
        <Grid item>
          <TextField
            id="name"
            autoComplete="on"
            {...register("name")}
            label="Enter your name"
            variant="standard"
            error={errors.name ? true : false}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            type="submit"
            startIcon={<SportsEsportsIcon />}
          >
            Enter the game
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Index;
