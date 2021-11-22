import * as React from "react";
import Paper from "./Paper";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
// import MenuItem from "@mui/material/MenuItem";
import SendIcon from "@mui/icons-material/Send";

import { Typography, Box } from "@mui/material";
import Image from "next/image";
import MenuItem from "./MenuItem";
import { useXKCD } from "../queries";
import StripInformation from "./StripInformation";
import Loader from "./Loaders";

const StripeWrapper: React.FC = () => {
  const { data, isLoading, mutate } = useXKCD();
  React.useEffect(() => {
    mutate("");
  }, []);

  const onNextClick = () => {
    mutate(current + 1);
  };
  const onRandomClick = () => {
    mutate("");
  };

  if (isLoading || !data) return <Loader />;
  const { current, strip } = data;

  return (
    <Paper>
      <MenuList dense>
        <Box mb={4}>
          <Typography variant="h4">{strip.title}</Typography>
          <Typography variant="subtitle1">{strip.alt}</Typography>
          <Typography variant="caption">number: {strip.num}</Typography>
          <Box display="flex" justifyContent="center" mt={3}>
            <Image
              src={strip.img}
              alt="Picture of the author"
              quality={50}
              width={420}
              height={150}
              objectFit="contain"
            />
          </Box>
        </Box>

        <StripInformation strip={strip} />
        <Divider color="#fff" />
        <Box mt={1}>
          <MenuItem
            text="Next"
            icon={<SendIcon color="primary" />}
            onClick={onNextClick}
          />

          <MenuItem
            text="Random"
            icon={<SendIcon color="primary" />}
            onClick={onRandomClick}
          />
        </Box>
      </MenuList>
    </Paper>
  );
};

export default StripeWrapper;
