import { Stack, Typography, Avatar, Fab, Box, Divider } from "@mui/material";
import DashboardCard from "../shared/DashboardCard";

const RecommendedActions = () => {
  return (
    <DashboardCard title="Recommended Actions">
      <>
        <Divider />
        <Stack direction="row" spacing={1} my={1.3} alignItems="center">
          <Box>
            <Stack direction="row" spacing={1} alignItems="start" mb={1}>
              <Typography>-</Typography>
              <Typography>
                Review the credit reports for errors, inaccuracies, or
                fraudulent activity. Dispute any discrepancies you find to
                ensure your credit report is accurate.
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="start" mb={1}>
              <Typography>-</Typography>
              <Typography>Pay Bills on Time</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="start" mb={1}>
              <Typography>-</Typography>
              <Typography mb={1}>
                High credit card balances relative to your credit limits can
                hurt your credit score. Aim to keep your credit card balances
                below 30% of your credit limit.{" "}
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </>
    </DashboardCard>
  );
};

export default RecommendedActions;
