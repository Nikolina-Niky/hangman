import { FC } from "react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  isPending: boolean;
  error: string | undefined;
}

const Index: FC<Props> = ({ children, isPending, error }) => {
  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error;

  return <>{children}</>;
};

export default Index;
