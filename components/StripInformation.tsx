import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Strip } from "../types";
import { Divider } from "@mui/material";
import { Box } from "@mui/system";

interface StripInformation {
  strip: Strip;
}
const StripInformation: React.FC<StripInformation> = ({ strip }) => {
  return (
    <Accordion sx={{ backgroundColor: "rgb(18, 18, 18)", boxShadow: "none" }}>
      <AccordionSummary
        sx={{ padding: 0 }}
        expandIcon={<ExpandMoreIcon color="primary" fontSize="large" />}
      >
        <Typography>See more</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {strip.news && (
          <Box>
            <Divider color="#fff" />
            <Typography>News: {strip.news}</Typography>
          </Box>
        )}
        <Typography>Created: {strip.year}</Typography>
        <Divider color="#fff" />
        <Typography>Transcript: {strip.transcript}</Typography>
        <Divider color="#fff" />
      </AccordionDetails>
    </Accordion>
  );
};
export default StripInformation;
