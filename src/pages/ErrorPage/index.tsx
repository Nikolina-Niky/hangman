import { useRouteError } from "react-router-dom";

const Index = () => {
  const error = useRouteError();
  console.error(error);

  return <h1>Sorry, this page was not found.</h1>;
};

export default Index;
