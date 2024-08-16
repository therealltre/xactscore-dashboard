import { Stack, Typography, Avatar, Fab, Box, Divider } from "@mui/material";
import DashboardCard from "../shared/DashboardCard";

const RecommendedActions = () => {
  return (
    <DashboardCard title="Recommended Actions">
      <>
        <Divider />
        <Stack direction="row" spacing={1} my={1.7} alignItems="center">
          <Box>
            <Stack direction="row" spacing={1} alignItems="center" mb={1}>
              <Typography>-</Typography>
              <Typography > Keep old accounts open</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="start" mb={1}>
              <Typography>-</Typography>
              <Typography >
                Be cautious about applying for multiple new credit cards or
                loans in a short period. Each application can result in a hard
                inquiry, which may slightly lower your score.
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center" mb={1}>
              <Typography>-</Typography>
              <Typography mb={1}> Maintain a Mix of Credit Types</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center" mb={0.2}>
              <Typography>-</Typography>
              <Typography>
                Remember that improving your credit score is a gradual process,
                and it's essential to practice responsible credit management
                over time.
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </>
    </DashboardCard>
  );
};

export default RecommendedActions;
