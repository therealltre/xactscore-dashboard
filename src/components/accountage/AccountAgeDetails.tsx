import {
  Stack,
  Typography,
  Avatar,
  Box,
  Card,
  Grid,
  Divider
} from "@mui/material";
import { IconCreditCard } from "@tabler/icons-react";

const AccountDetails = () => {
  return (
    <Card elevation={9} variant={undefined}>
      <Typography variant="h5" fontWeight="600" margin={3}>
        Account Age Details
      </Typography>

      {/* cards*/}
      <Box>
        <Divider />
        <Grid container spacing={3} p={3}>
          <Grid item xs={12} lg={6}>
            <Card
              elevation={9}
              variant={undefined}
              sx={{ borderTop: `4px solid ${"#1E4939"}` }}
            >
              <Stack direction="row" spacing={1} my={2} alignItems="center">
                <Grid container spacing={3}>
                  <Grid item xs={12} lg={6}>
                    <Stack direction="row" spacing={2} mb={1}>
                      <Avatar sx={{ bgcolor: "white", width: 27, height: 27 }}>
                        <IconCreditCard width={60} color="#1E4939" />
                      </Avatar>
                      <Typography variant="h4" fontWeight="600" mb={1}>
                        Stanbic Bank
                      </Typography>
                    </Stack>
                    <Typography variant="h6" fontWeight="400">
                      **********5624
                    </Typography>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Typography variant="h4" fontWeight="600" mb={1}>
                      2yrs 11 months
                    </Typography>
                    <Typography variant="h6" fontWeight="400">
                      Age of account
                    </Typography>
                  </Grid>
                  <Grid item xs={12} lg={6} mb={2}>
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
          <Grid item xs={12} lg={6}>
            <Card
              elevation={9}
              variant={undefined}
              sx={{ borderTop: `4px solid ${"#1E4939"}` }}
            >
              <Stack direction="row" spacing={1} my={2} alignItems="center">
                <Grid container spacing={3}>
                  <Grid item xs={12} lg={6}>
                    <Stack direction="row" spacing={2} mb={1}>
                      <Avatar sx={{ bgcolor: "white", width: 27, height: 27 }}>
                        <IconCreditCard width={60} color="#1E4939" />
                      </Avatar>
                      <Typography variant="h4" fontWeight="600" mb={1}>
                        Stanbic Bank
                      </Typography>
                    </Stack>
                    <Typography variant="h6" fontWeight="400">
                      **********5624
                    </Typography>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Typography variant="h4" fontWeight="600" mb={1}>
                      2yrs 11 months
                    </Typography>
                    <Typography variant="h6" fontWeight="400">
                      Age of account
                    </Typography>
                  </Grid>
                  <Grid item xs={12} lg={6} mb={2}>
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

export default AccountDetails;
