import { useAppSelector, numberOfErrors } from "../../redux";
import {
  BottomPart,
  UpperPart,
  MiddlePart,
  Loop,
  Head,
  Body,
  RightArm,
  LeftArm,
  RightLeg,
  LeftLeg,
} from "./styled";

const Index = () => {
  const errors = useAppSelector(numberOfErrors);

  const HangmanParts = [
    <Head key={"head"} />,
    <Body key={"body"} />,
    <RightArm key={"lArm"} />,
    <LeftArm key={"rArm"} />,
    <RightLeg key={"lLeg"} />,
    <LeftLeg key={"rLeg"} />,
  ];

  return (
    <div style={{ position: "relative" }}>
      {HangmanParts.slice(0, errors)}
      {<Loop />}
      {<UpperPart />}
      {<MiddlePart />}
      {<BottomPart />}
    </div>
  );
};

export default Index;
