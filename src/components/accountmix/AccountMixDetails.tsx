import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import {
  Stack,
  Typography,
  Avatar,
  Box,
  Card,
  LinearProgressProps,
  LinearProgress,
  Grid,
  Divider
} from "@mui/material";
import { IconCash, IconCreditCard } from "@tabler/icons-react";

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const AccountMixDetails = () => {
  return (
    <Card elevation={9} variant={undefined}>
      <Typography variant="h5" fontWeight="600" margin={3}>
        Account Mix Details
      </Typography>

      {/* cards*/}
      <Box>
        <Divider />
        <Grid container spacing={3} p={3}>
          <Grid item xs={12} lg={6}>
            <Card elevation={9} variant={undefined} sx={{ borderTop: `4px solid ${"#1E4939"}` }}>
              <Stack direction="row" spacing={1} my={2} alignItems="center">
                <Grid container spacing={3}>
                  <Grid item xs={12} lg={6}>
                    <Stack direction="row" spacing={2} mb={1}>
                      <Avatar sx={{ bgcolor: "white", width: 27, height: 27 }}>
                        <IconCreditCard width={60} color="#1E4939" />
                      </Avatar>
                      <Typography variant="h4" fontWeight="600">
                        Stanbic Bank
                      </Typography>
                    </Stack>
                    <Typography variant="h6" fontWeight="400">
                      **********5624
                    </Typography>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Typography variant="h4" fontWeight="600" mb={1}>
                      ₵ 8,400
                    </Typography>
                    <Typography variant="h6" fontWeight="400">
                      Credit card limit
                    </Typography>
                  </Grid>
                  <Grid item xs={12} lg={6} direction={"row"}>
                    <Stack direction={"row"} spacing={1} mb={2}>
                      <Typography variant="h6" fontWeight="400" mb={1}>
                        Status:
                      </Typography>
                      <Typography
                        variant="h6"
                        fontWeight="400"
                        mb={1}
                        color={"green"}
                      >
                        Active
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} lg={6} flexDirection={"row"}>
                    <Typography variant="h6" fontWeight="400">
                      Updated: Aug 18, 2023
                    </Typography>
                  </Grid>
                </Grid>
              </Stack>
            </Card>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Card elevation={9} variant={undefined} sx={{ borderTop: `4px solid ${"#1E4939"}` }}>
              <Stack direction="row" spacing={1} my={2} alignItems="center">
                <Grid container spacing={3}>
                  <Grid item xs={12} lg={6}>
                    <Stack direction="row" spacing={2} mb={1}>
                      <Avatar sx={{ bgcolor: "white", width: 27, height: 27 }}>
                        <IconCreditCard width={60} color="#1E4939" />
                      </Avatar>
                      <Typography variant="h4" fontWeight="600" mb={1}>
                        Fidelity Bank
                      </Typography>
                    </Stack>
                    <Typography variant="h6" fontWeight="400">
                      **********2414
                    </Typography>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Typography variant="h4" fontWeight="600" mb={1}>
                      ₵ 9,200
                    </Typography>
                    <Typography variant="h6" fontWeight="400">
                      Credit card limit
                    </Typography>
                  </Grid>
                  <Grid item xs={12} lg={6} direction={"row"} mb={2}>
                    <Stack direction={"row"} spacing={1}>
                      <Typography variant="h6" fontWeight="400" mb={1}>
                        Status:
                      </Typography>
                      <Typography
                        variant="h6"
                        fontWeight="400"
                        mb={1}
                        color={"green"}
                      >
                        Active
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} lg={6} flexDirection={"row"}>
                    <Typography variant="h6" fontWeight="400">
                      Updated: Aug 18, 2023
                    </Typography>
                  </Grid>
                </Grid>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default AccountMixDetails;
