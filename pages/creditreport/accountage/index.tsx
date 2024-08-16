import type { ReactElement } from "react";
import {
  Grid,
  Box,
} from "@mui/material";
import PageContainer from "../../../src/components/container/PageContainer";


// components
import FullLayout from "../../../src/layouts/full/FullLayout";
import AccountAge from "../../../src/components/accountage/AccountAge";
import AccountAgeDetails from "../../../src/components/accountage/AccountAgeDetails";
import AccountMixDetails from "../../../src/components/accountmix/AccountMixDetails";
import AccountRecommendedActions from "../../../src/components/accountage/AccountRecommendedActions";


export default function AccountAgeFactors() {
  return (
    <PageContainer title="Xact Score | My Account" description="User Dashboard">
      <Box>
        {/* entire container grid */}

        <Grid container spacing={3}>
          {/* score meter and payment history grid  */}
          <Grid item xs={12} lg={6}>
            <AccountAge />
          </Grid>
          <Grid item xs={12} lg={6}>
            {/* <RecommendedActions /> */}
            <AccountRecommendedActions />
          </Grid>

          <Grid item xs={12}>
            <AccountAgeDetails />
          </Grid>
          
        </Grid>
      </Box>
    </PageContainer>
  );
}

AccountAgeFactors.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};
