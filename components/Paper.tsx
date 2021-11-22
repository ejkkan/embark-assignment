import * as React from "react";
import { Paper as MuiPaper } from "@mui/material";

const Paper: React.FC = ({ children }) => {
  return (
    <MuiPaper
      sx={{
        width: 620,
        backgroundColor: "rgb(18, 18, 18)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
      }}
    >
      {children}
    </MuiPaper>
  );
};

export default Paper;
