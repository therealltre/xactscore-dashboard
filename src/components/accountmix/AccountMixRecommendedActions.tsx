import { Stack, Typography, Avatar, Fab, Box, Divider } from "@mui/material";
import DashboardCard from "../shared/DashboardCard";

const RecommendedActions = () => {
  return (
    <DashboardCard title="Recommended Actions">
      <>
        <Divider />
        <Stack direction="row" spacing={1} my={1.3} alignItems="center">
          <Box>
            <Stack direction="row" spacing={1} alignItems="center" mb={1}>
              <Typography>-</Typography>
              <Typography>
                Keep your old, well-managed accounts
                open to demonstrate a longer credit history.
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="start" mb={1}>
              <Typography>-</Typography>
              <Typography>Avoid Opening Too Many New Accounts</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center" mb={1}>
              <Typography>-</Typography>
              <Typography mb={1}>Pay More Than the Minimum Payment</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="start" mb={1}>
              <Typography>-</Typography>
              <Typography mb={1}>
                High credit utilization can negatively impact your credit score.
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="start">
              <Typography>-</Typography>
              <Typography>
                Having a mix of credit accounts (e.g., credit cards,
                auto loans) can have a positive impact on your credit score.
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </>
    </DashboardCard>
  );
};

export default RecommendedActions;
