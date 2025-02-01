import { Box, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function ReportChartBar() {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <SectionHeader Lable={'Revenue by customer type'} />
        <Typography
          variant="h5"
          style={{
            textAlign: "left",
            padding: "3px 20px 0",
            fontWeight: "bold",
          }}
        >
          $240.8K
        </Typography>
      </Box>
      <BarChart
        xAxis={[
          {
            scaleType: "band",
            data: ["group A", "group B", "group C", "group D"],
          },
        ]}
        series={[
          { data: [4, 3, 5, 1] },
          { data: [1, 6, 7, 4] },
          { data: [6, 5, 9, 7] },
          { data: [4, 2, 5, 6] },
        ]}
        width={700}
        height={300}
      />
    </>
  );
}
