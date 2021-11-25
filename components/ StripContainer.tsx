import * as React from "react";
import Paper from "./Paper";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import MenuItem from "./MenuItem";
import { useGetOne, useGetRandom } from "../queries";
import StripInformation from "./StripInformation";
import Loader from "./Loaders";
import ImageModal from "./ImageModal";
import { NavigateNext, BlurOnOutlined } from "@mui/icons-material";
import { Strip, Data } from "../types";

const StripeWrapper: React.FC = () => {
  const [currentData, setData] = React.useState<null | Data>(null);
  const [zoomedImage, setZoomedImage] = React.useState<string | null>(null);
  const {
    // Both queries are using the same queryKey, making it possible to reuse the same value
    // Maybe not the easiet code to understand, but it keeps the code amount down
    data,
    isLoading: getRandomLoading,
    refetch: getRandom,
  } = useGetRandom();
  const { isLoading: oneStripLoading, refetch: getOne } = useGetOne(
    String(currentData?.current ? currentData?.current + 1 : 1)
  );

  React.useEffect(() => {
    getRandom();
  }, [getRandom]);

  React.useEffect(() => setData(data), [data?.strip?.num, setData]);

  const onNextClick = () => getOne();

  const onRandomClick = () => getRandom();

  if (oneStripLoading || getRandomLoading || !currentData) return <Loader />;
  const strip = currentData?.strip as Strip;

  return (
    <Paper>
      <MenuList dense>
        <Box mb={4}>
          <Typography variant="h4">{strip.title}</Typography>
          <Typography variant="subtitle1">{strip.alt}</Typography>
          <Typography variant="caption">number: {strip.num}</Typography>
          <Box
            display="flex"
            justifyContent="center"
            mt={3}
            onClick={() => setZoomedImage(strip.img)}
          >
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
            icon={<NavigateNext color="primary" />}
            onClick={onNextClick}
          />

          <MenuItem
            text="Random"
            //Can't find "random" icon :(
            icon={<BlurOnOutlined color="primary" />}
            onClick={onRandomClick}
          />
        </Box>
      </MenuList>
      <ImageModal image={zoomedImage} onClick={() => setZoomedImage(null)} />
    </Paper>
  );
};

export default StripeWrapper;
