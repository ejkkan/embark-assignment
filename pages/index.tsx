import type { NextPage } from "next";
import { Typography, Box } from "@mui/material";
import StripeWrapper from "../components/ StripContainer";

const Home: NextPage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      bgcolor="rgb(0, 30, 60)"
      height="100vh"
    >
      <Box display="flex" alignItems="center" flexDirection="column">
        <Typography variant="h1">XKCD VIEWER</Typography>
        <Box display="flex" flexDirection="column">
          <StripeWrapper />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
