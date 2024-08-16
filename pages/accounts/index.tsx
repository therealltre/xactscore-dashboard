import { useState, type ReactElement } from "react";
import {
  Grid,
  Box,
  Button,
  IconButton,
  Badge,
  Typography
} from "@mui/material";

import { IconFileDownload, IconMenu } from "@tabler/icons-react";

// components
import PageContainer from "../../src/components/container/PageContainer";

// import AccountRecommendedActions from "../../src/components/accountage/AccountRecommendedActions";
// import AccountAgeDetails from "../../src/components/accountage/AccountAgeDetails";
import FullLayout from "../../src/layouts/full/FullLayout";
import TabBar from "../../src/components/tab-bar/Tabbar";
// import AccountMix from "../../src/components/accountmix/AccountMix";
import Enquiries from "../creditreport/enquiries";
import AccountAgeFactors from "../creditreport/accountage";
import AccountMixFactors from "../creditreport/accountmix";

export default function Accounts() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange =  (event: React.ChangeEvent<{}>, value: number)  => {
    setSelectedTab(value);
  };

  return (
    <PageContainer title="Xact Score | My Account" description="User Dashboard">
      <Box>
        {/* entire container grid */}

        <Grid container spacing={3}>
          <Grid item xs={12} lg={12} container justifyContent={"end"}>
            <Box>
              <Button
                variant="contained"
                // disableElevation
                color="primary"
                target="_blank"
                href=""
                sx={{ gap: 1 }}
                style={{ backgroundColor: "#1E4939" }}
              >
                <IconFileDownload size="21" stroke="1.5" />
                Download Report
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <TabBar onChange={handleTabChange} />
            {selectedTab === 0 && <AccountAgeFactors />}
            {selectedTab === 1 && <AccountMixFactors />}
            {selectedTab === 2 && <Enquiries />}
          </Grid>     

       
        </Grid>
      </Box>
    </PageContainer>
  );
}

Accounts.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};
