import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
// import DashboardCard from "../shared/DashboardCard";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
 import { ApexOptions } from 'apexcharts';

const PaymentHistoryChart = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

 
  const options: ApexOptions = {
    chart: {
      type: 'line',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#adb0bb',
      toolbar: {
        show: true
      },
      height: 370
    },
    colors: [primary, secondary], // Assuming primary and secondary are defined elsewhere
    stroke: {
      width: 3,
      curve: 'smooth'
    },
    markers: {
      size: 0
    },
    dataLabels: {
      enabled: true
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'right',
      offsetY: -20
    },
    grid: {
      borderColor: 'rgba(0,0,0,0.1)',
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false
        }
      }
    },
    xaxis: {
      categories: [
        '01-Jan-2023',
        '01-Feb-2023',
        '01-Mar-2023',
        '01-Apr-2023',
        '01-May-2023',
        '01-Jun-2023',
        '01-Jul-2023',
        '01-Aug-2023',
        '01-Sept-2023',
        '01-Oct-2023',
        '01-Nov-2023',
        '01-Dec-2023'
      ],
      axisBorder: {
        show: false
      }
    },
    tooltip: {
      theme: 'light' // Assuming theme is defined elsewhere and has a valid value
    }
  };
  

  // Define your data series and time ranges here

  const paymentSeries = [
    {
      name: "Payment History",
      data: [70, 85, 89, 91, 90, 100, 96, 98]
    }
  ];

  return (
    <Card
      sx={{ padding: 0 }}
      elevation={9}
      variant={undefined}
      title="Payment History"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <CardContent sx={{ p: "30px" }}>
          <Typography variant="h4" mb={3}>
            Payment History
          </Typography>
        </CardContent>

        {/* Add Time Range selection here */}
      </div>
      <div>
        <Chart
          options={options}
          series={paymentSeries}
          type="line"
          height="370px"
        />
      </div>
    </Card>
  );
};

export default PaymentHistoryChart;
