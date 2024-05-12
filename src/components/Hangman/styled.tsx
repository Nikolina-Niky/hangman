import { styled } from "@mui/system";

const Head = styled("div")({
  width: "50px",
  height: "50px",
  borderRadius: "100%",
  border: "10px solid black",
  position: "absolute",
  top: "50px",
  right: "-20px",
});

const Body = styled("div")({
  width: "10px",
  height: "100px",
  background: "black",
  position: "absolute",
  top: "100px",
  right: 0,
});

const RightArm = styled("div")({
  width: "100px",
  height: "10px",
  background: "black",
  position: "absolute",
  top: "130px",
  right: "-100px",
  rotate: "-30deg",
  transformOrigin: "left bottom",
});

const LeftArm = styled("div")({
  width: "100px",
  height: "10px",
  background: "black",
  position: "absolute",
  top: "130px",
  right: "10px",
  rotate: "30deg",
  transformOrigin: "right bottom",
});

const RightLeg = styled("div")({
  width: "100px",
  height: "10px",
  background: "black",
  position: "absolute",
  top: "190px",
  right: "-90px",
  rotate: "60deg",
  transformOrigin: "left bottom",
});

const LeftLeg = styled("div")({
  width: "100px",
  height: "10px",
  background: "black",
  position: "absolute",
  top: "190px",
  right: 0,
  rotate: "-60deg",
  transformOrigin: "right bottom",
});

const BottomPart = styled("div")({
  height: "10px",
  width: "250px",
  background: "black",
});

const MiddlePart = styled("div")({
  height: "400px",
  width: "10px",
  background: "black",
  marginLeft: "120px",
});

const UpperPart = styled("div")({
  height: "10px",
  width: "200px",
  background: "black",
  marginLeft: "120px",
});

const Loop = styled("div")({
  height: "50px",
  width: "10px",
  background: "black",
  position: "absolute",
  top: 0,
  right: 0,
});

export {
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
};
