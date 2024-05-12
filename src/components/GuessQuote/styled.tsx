import { styled } from "@mui/system";
import { Typography, Box } from "@mui/material";

const MaskedQuote = styled(Typography)((props) => ({
  fontWeight: 700,
  color: props.theme.palette.primary.main,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(25px, 1fr))",
  justifyContent: "center",
  gap: ".15em",
  alignItems: "end",
  textTransform: "uppercase",
  fontSize: props.theme.breakpoints.up("md") ? "1.5em" : "1em",
}));

const MaskedLetter = styled("span")({
  borderBottom: ".1rem solid black",
  height: "2rem",
});

const EmptySpace = styled("span")({
  height: "2rem",
});

const QuoteLetterBox = styled(Box)({
  width: "80vw",
  justifyContent: "center",
});

export { QuoteLetterBox, MaskedQuote, MaskedLetter, EmptySpace };
