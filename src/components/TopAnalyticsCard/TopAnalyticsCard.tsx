import { Box, Paper, Stack } from "@mui/material";
import React from "react";

type TProps = {
  icon: React.ReactNode;
  statistics: number | string;
  AnalyticsCardItem: string;
};

function TopAnalyticsCard({ icon, statistics, AnalyticsCardItem }: TProps) {
  return (
    <div>
      <Paper
        variant="elevation"
        style={{ width: "290px", height: "85px", marginBottom: "6px", backgroundColor:'#F5F7F8' }}
      >
        <Stack direction={"row"} spacing={5} sx={{ padding: "10px 35px 0 " }}>
          <Box> {icon}</Box>
          <Stack
            direction={"column"}
            sx={{ justifyContent: "left", alignItems: "left" }}
          >
            <Box textAlign={"left"}> {statistics}</Box>
            <Box> {AnalyticsCardItem}</Box>
          </Stack>
        </Stack>
      </Paper>
    </div>
  );
}

export default TopAnalyticsCard;
