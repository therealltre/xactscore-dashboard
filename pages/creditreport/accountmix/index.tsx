import type { ReactElement } from "react";
import {
  Grid,
  Box,
  Button,
  IconButton,
  Badge,
  Typography
} from "@mui/material";
import PageContainer from "../../../src/components/container/PageContainer";
import { IconFileDownload, IconMenu } from "@tabler/icons-react";

// components
import FullLayout from "../../../src/layouts/full/FullLayout";
import AccountAge from "../../../src/components/accountage/AccountAge";
import AccountAgeDetails from "../../../src/components/accountage/AccountAgeDetails";
// import AccountRecommendedActions from "../../../src/components/accountage/AccountRecommendedActions";
import AccountMix from "../../../src/components/accountmix/AccountMix";
import AccountMixDetails from "../../../src/components/accountmix/AccountMixDetails";
import TabBar from "../../../src/components/tab-bar/Tabbar";
import AccountMixRecommendedActions from "../../../src/components/accountmix/AccountMixRecommendedActions";

const tabs = [
  {
    label: "Account Age",
    // path: "/creditreport/accountage",
    content: <div>This is the Account Age page content.</div>
  },
  {
    label: "Account Mix",
    // path: "/creditreport/account-mix",
    content: <div>This is the Account Age page content.</div>
  },
  {
    label: "Enquiries",
    path: "/creditreport/enquiries",
    content: <div>This is the enquiries page content.</div>
  }
];

export default function AccountAgeFactors() {
  return (
    <PageContainer title="Xact Score | My Account" description="User Dashboard">
      <Box>
        {/* entire container grid */}

        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <AccountMix />
          </Grid>
          <Grid item xs={12} lg={6}>
            <AccountMixRecommendedActions />
          </Grid>

          <Grid item xs={12}>
            <AccountMixDetails />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}

AccountAgeFactors.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};
