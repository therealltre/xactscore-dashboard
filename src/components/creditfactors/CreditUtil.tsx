import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import { Stack, Typography, Avatar, Fab, Grid, Divider } from "@mui/material";
import { IconArrowDownRight, IconCurrencyDollar } from "@tabler/icons-react";
import DashboardCard from "../shared/DashboardCard";

const CreditUtil = () => {
  // chart color
  const theme = useTheme();
  const secondary = theme.palette.secondary.main;
  const secondarylight = "#f5fcff";
  const errorlight = "#fdede8";

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: "area",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: false
      },
      height: 60,
      sparkline: {
        enabled: true
      },
      group: "sparklines"
    },
    stroke: {
      curve: "smooth",
      width: 2
    },
    fill: {
      colors: [secondarylight],
      type: "solid",
      opacity: 0.05
    },
    markers: {
      size: 0
    },
    tooltip: {
      theme: theme.palette.mode === "dark" ? "dark" : "light"
    }
  };
  const seriescolumnchart: any = [
    {
      name: "",
      color: secondary,
      data: [25, 66, 20, 40, 12, 58, 20]
    }
  ];

  return (
    <DashboardCard
      title="Credit Usage"
      // footer={
      //   <Chart
      //     options={optionscolumnchart}
      //     series={seriescolumnchart}
      //     type="area"
      //     height="60px"
      //   />
      // }
    >
      <>
      <Divider />
        <Stack direction="row" spacing={1} my={2} alignItems="center">
          <Avatar sx={{ bgcolor: errorlight, width: 27, height: 27 }}>
            <IconArrowDownRight width={20} color="#FA896B" />
          </Avatar>
          <Typography variant="h3" fontWeight="600">
            76%
          </Typography>
          <Typography variant="h3">
            used
          </Typography>
        </Stack>
        <Grid item xs={12} lg={10}>
          <Typography mb={1} fontWeight={700} variant="h6">
            How does this affect your score?
          </Typography>
          <Typography>
            Lenders like to see that you aren't using too much fo your available
            credit. Using too much credit, may make it harder to pay back
          </Typography>
        </Grid>
      </>
    </DashboardCard>
  );
};

export default CreditUtil;
