import { Box, Typography } from "@mui/material";

type THeaderTypeProps = {
  Lable: string;
};

function SectionHeader({Lable}:THeaderTypeProps) {
  return (
    <div>
      <Box>
        <Typography
          variant="h6"
          style={{ textAlign: "left", padding: "5px 20px 0 "}}
        >
          {Lable}
        </Typography>
      </Box>
    </div>
  );
}

export default SectionHeader;
