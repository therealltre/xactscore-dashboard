import type { ReactElement } from "react";
import { Grid, Box } from "@mui/material";
import PageContainer from "../../../src/components/container/PageContainer";

// components
import FullLayout from "../../../src/layouts/full/FullLayout";
import Enquiries from "../../../src/components/enquiries/Enquiries";
import EnquiryDetails from "../../../src/components/enquiries/EnquiryDetails";
import EnquiriesRecommendedActions from "../../../src/components/enquiries/EnquiriesRecommendedActions";

export default function EnquiryFactors() {
  return (
    <PageContainer
      title="Xact Score | Score Factors"
      description="User Dashboard"
    >
      <Box>
        {/* entire container grid */}

      
        <Grid container spacing={3}>
          {/* score meter and payment history grid  */}
          <Grid item xs={12} lg={6}>
            <Enquiries />
          </Grid>
          <Grid item xs={12} lg={6}>
            <EnquiriesRecommendedActions />
          </Grid>

          {/* Risk description & Score overview section */}

          {/* <Grid item xs={12}>
            <RiskDescription />
          </Grid> */}
          {/* <Grid item xs={12}>
            <ScoreOverview />
          </Grid> */}

          <Grid item xs={12}>
          <EnquiryDetails />
        </Grid>

        </Grid>
      </Box>
    </PageContainer>
  );
}

EnquiryFactors.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};
