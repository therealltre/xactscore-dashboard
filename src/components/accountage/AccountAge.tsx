import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import {
  Stack,
  Typography,
  Avatar,
  Fab,
  Grid,
  Divider,
  Box
} from "@mui/material";
import {
  IconArrowDownRight,
  IconArrowUp,
  IconCurrencyDollar
} from "@tabler/icons-react";
import DashboardCard from "../shared/DashboardCard";

const AccountAge = () => {
  // chart color
  const theme = useTheme();
  // const secondary = theme.palette.secondary.main;
  const secondarylight = theme.palette.success.light;
  // const errorlight = "#fdede8";

  // chart
  // const optionscolumnchart: any = {
  //   chart: {
  //     type: "area",
  //     fontFamily: "'Plus Jakarta Sans', sans-serif;",
  //     foreColor: "#adb0bb",
  //     toolbar: {
  //       show: false
  //     },
  //     height: 60,
  //     sparkline: {
  //       enabled: true
  //     },
  //     group: "sparklines"
  //   },
  //   stroke: {
  //     curve: "smooth",
  //     width: 2
  //   },
  //   fill: {
  //     colors: [secondarylight],
  //     type: "solid",
  //     opacity: 0.05
  //   },
  //   markers: {
  //     size: 0
  //   },
  //   tooltip: {
  //     theme: theme.palette.mode === "dark" ? "dark" : "light"
  //   }
  // };
  // const seriescolumnchart: any = [
  //   {
  //     name: "",
  //     color: secondary,
  //     data: [25, 66, 20, 40, 12, 58, 20]
  //   }
  // ];

  return (
    <DashboardCard
      title="Account Age"
      // footer={
      //   <Chart
      //     options={optionscolumnchart}
      //     series={seriescolumnchart}
      //     type="area"
      //     height="60px"
      //   />
      // }
    >
      <Box>
        <Divider />
        <Stack direction="row" spacing={1} my={2} alignItems="center">
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <Typography variant="h4" fontWeight="600" mb={1}>
                2
              </Typography>
              <Typography>Total active account(s)</Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Typography variant="h4" fontWeight="600" mb={1}>
                2yrs 11 months
              </Typography>
              <Typography>Age of oldest account</Typography>
            </Grid>
          </Grid>
        </Stack>

        <Grid item xs={12} lg={10}>
          <Typography mb={1} fontWeight={700} variant="h6">
            How does this affect your score?
          </Typography>
          <Typography>
            - The longer you have an account open, the more lenders are ensured
            that you are reliable and potentially increases your credit limit.
          </Typography>
        </Grid>
      </Box>
    </DashboardCard>
  );
};

export default AccountAge;
