import type { ReactElement } from "react";
import { Grid, Box } from "@mui/material";
import PageContainer from "../../../src/components/container/PageContainer";

// components
import FullLayout from "../../../src/layouts/full/FullLayout";
import PaymentHistory from "../../../src/components/paymenthistory/PaymentHistory";
import CreditCardPaymentHistory from "../../../src/components/paymenthistory/CreditCardPaymentHistory";
import PaymentHistoryChart from "../../../src/components/paymenthistory/PaymentHistoryChart";

export default function PaymentHistoryFactors() {
  return (
    <PageContainer
      title="Xact Score | Payment History"
      description="User Dashboard"
    >
      <Box>
        {/* entire container grid */}

        <Grid container spacing={3}>
          {/*payment history grid  */}
          <Grid item xs={12} lg={6}>
            <PaymentHistory />
          </Grid>
          <Grid item xs={12} lg={6}>
            <CreditCardPaymentHistory />
          </Grid>

          {/* payment history graph section */}
          <Grid item xs={12}>
            <PaymentHistoryChart />
          </Grid> 
        </Grid>
      </Box>
    </PageContainer>
  );
}

PaymentHistoryFactors.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};
