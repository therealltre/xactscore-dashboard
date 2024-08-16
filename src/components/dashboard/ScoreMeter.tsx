import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import {
  Grid,
  Stack,
  Typography,
  Avatar,
  Button,
  Link,
  Box
} from "@mui/material";
import { IconArrowUp, IconRefresh } from "@tabler/icons-react";
const DynamicGaugeChart = dynamic(() => import("react-gauge-chart"), {
  ssr: false
});

import DashboardCard from "../shared/DashboardCard";

//credit score range and color function
const CreditScoreMeter = () => {
  const getColorForScore = (score: number) => {
    if (score >= 800) {
      return { color: "#1E4939", label: "Excellent" };
    } else if (score >= 740) {
      return { color: "#32cd32", label: "Very Good" };
    } else if (score >= 670) {
      return { color: "#FFE000", label: "Good" };
    } else if (score >= 580) {
      return { color: "#FFBF00", label: "Fair" };
    } else {
      return { color: "#FF0000", label: "Poor" };
    }
  };

  const theme = useTheme();
  const successlight = theme.palette.success.light;

  const creditScoreValue = 740; //credit score value input

  const colorInfo = getColorForScore(creditScoreValue);
  const { label } = colorInfo;

  return (
    <DashboardCard>
      <Grid container spacing={0} direction={{ xs: "column", md: "row" }}>
        <Typography variant="h4" fontWeight={700}>
          Credit Score: {creditScoreValue}
        </Typography>
        <Grid item xs={2} sm={6} mt={0}>
          <DynamicGaugeChart
            id="credit-score-gauge"
            nrOfLevels={5}
            percent={creditScoreValue / 850} // Assuming 850 as max score
            colors={["#FF0000", "#FFBF00", "#FFE000", "#32cd32", "#1E4939"]} // Reversed color array
            hideText
          />
        </Grid>
        <Grid item xs={7} sm={6}>
          <Stack direction="row" spacing={1} mt={1} alignItems="center">
            <Avatar sx={{ bgcolor: successlight, width: 27, height: 27 }}>
              <IconArrowUp width={20} color="#1E4939" />
            </Avatar>
            <Stack direction={{ xs: "column", md: "column" }} width={200}>
              <Typography variant="subtitle2" fontWeight={600} mr={1}>
                Rating: {label}
              </Typography>
              {/* <Typography variant="subtitle2" fontWeight={700}>
                {label}
              </Typography> */}
              <Typography variant="subtitle2" fontWeight={600}>
                Updated: Feb 4, 2023
              </Typography>
            </Stack>
          </Stack>
          <Stack spacing={2} mt={1} direction="column">
            {/* <Typography variant="subtitle2" fontWeight={600}>
              Updated: Feb 4, 2023
            </Typography> */}
            <Typography variant="subtitle2" fontWeight={600}>
              VantageScore 3.0 from XactScore
            </Typography>
            <Stack direction="row" mt={1} alignItems="center">
              <Avatar sx={{ bgcolor: successlight, width: 27, height: 27 }}>
                <IconRefresh width={20} color="#1E4939" />
              </Avatar>
              <Link
                style={{ color: "#1E4939", fontWeight: 700, cursor: "pointer" }}
              >
                Refresh Score
              </Link>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default CreditScoreMeter;
