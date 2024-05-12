import { createBrowserRouter } from "react-router-dom";
import {
  LoginPage,
  WelcomePage,
  GamePage,
  ErrorPage,
  ScoreResultPage,
} from "../../pages";
import { ProtectedRoute } from "..";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <WelcomePage />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/game",
    element: (
      <ProtectedRoute>
        <GamePage />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/results",
    element: (
      <ProtectedRoute>
        <ScoreResultPage />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
]);
