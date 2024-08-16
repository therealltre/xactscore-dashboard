import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import {
  Stack,
  Typography,
  Divider,
  Box,
  Grid
} from "@mui/material";
import {
  IconArrowDownRight,
  IconArrowUp,
  IconCurrencyDollar
} from "@tabler/icons-react";
import DashboardCard from "../shared/DashboardCard";

const AccountMix = () => {
  // chart color
  const theme = useTheme();
  // const secondary = theme.palette.secondary.main;
  const secondarylight = theme.palette.success.light;

  return (
    <DashboardCard
      title="Account Mix"
    >
      <Box>
        <Divider />
        <Stack direction="row" spacing={1} my={2} alignItems="center">
          <Grid container spacing={2}>
            <Grid item xs={12} lg={4}>
              <Typography variant="h4" fontWeight="600" mb={1}>
                2
              </Typography>
              <Typography>Total account(s)</Typography>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Typography variant="h4" fontWeight="600" mb={1}>
                2
              </Typography>
              <Typography>Active account(s)</Typography>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Typography variant="h4" fontWeight="600" mb={1} color={"red"}>
                0
              </Typography>
              <Typography>Account(s) closed</Typography>
            </Grid>
          </Grid>
        </Stack>

        <Grid item xs={12} lg={10}>
          <Typography mb={1} fontWeight={700} variant="h6">
            How does this affect your score?
          </Typography>
          <Typography mb={1}>
            - The longer you have an account open, the more lenders are ensured
            that you are reliable and potentially increases your credit limit.
          </Typography>
        </Grid>
      </Box>
    </DashboardCard>
  );
};

export default AccountMix;
