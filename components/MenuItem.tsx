import * as React from "react";
import MuiMenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

interface MenuItemProps {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}
export default function MenuItem({ text, icon, onClick }: MenuItemProps) {
  return (
    <MuiMenuItem onClick={onClick}>
      <ListItemText>{text}</ListItemText>
      <ListItemIcon>{icon}</ListItemIcon>
    </MuiMenuItem>
  );
}
