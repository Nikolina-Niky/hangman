import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./navigation";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  let theme = createTheme();
  theme = createTheme(theme, {
    palette: {
      primary: {
        main: "#3a83f0",
        contrastText: "#fff",
      },
      secondary: {
        main: "#d1a32e",
        contrastText: "#fff",
      },
    },

    typography: {
      h1: {
        fontWeight: 700,
        fontSize: theme.breakpoints.up("md") ? "3em" : "2em",
        color: theme.palette.primary.main,
        paddingBottom: "30px",
      },
      h2: {
        fontWeight: 700,
        color: theme.palette.secondary.main,
        fontSize: theme.breakpoints.up("md") ? "2em" : "1.5em",
      },
      h3: {
        fontWeight: "bold",
        fontSize: theme.breakpoints.up("md") ? "1.5em" : "1.3em",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
