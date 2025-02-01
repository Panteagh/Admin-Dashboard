import React from "react";
import Navbar from "../Navbar/Navbar";
import { Box, Stack } from "@mui/material";

type children = {
  children: React.ReactNode;
};

function Layout({ children }: children) {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Stack>
        <Navbar />
      </Stack>
      <Stack sx={{flexGrow:'1'}}>
        {children}
      </Stack>
    </Box>
  );
}

export default Layout;
