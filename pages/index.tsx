import type { NextPage } from "next";
import { Typography, Box } from "@mui/material";
import StripeWrapper from "../components/ StripContainer";

// export async function getServerSideProps(context: any) {
//   try {
//     const queryClient = new QueryClient();

//     await queryClient.prefetchQuery(GET_XKCD, async () => {
//       const response = (await fetcher(`https://xkcd.com/1/info.0.json`)) as any;
//       console.log("response", response);
//       return { current: 1, strip: response };
//     });
//     return {
//       props: {
//         dehydratedState: dehydrate(queryClient),
//       },
//     };
//   } catch (error: any) {
//     if (error.props)
//       return {
//         ...error.props,
//       };
//     return { props: { dehydratedState: {} } };
//   }
// }

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
