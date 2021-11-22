import * as React from "react";
import { CircularProgress } from "@mui/material";
import Paper from "./Paper";

const Loader: React.FC = () => {
  return (
    <Paper>
      <CircularProgress color="primary" />;
    </Paper>
  );
};

export default Loader;
