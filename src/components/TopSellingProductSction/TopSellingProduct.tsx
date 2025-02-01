import { Avatar, Box, Rating, Stack, Typography } from "@mui/material";

type TProps = {
  avatar: string;
  productName: string;
  rating: number;
  price: number;
};

function TopSellingProduct({avatar , productName , rating , price}:TProps) {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "16px",
        margin: "20px 12px",
      }}
    >
      <Box>
        <Avatar
          sx={{ width: "96px", height: "96px", borderRadius: "14px" }}
          variant="rounded"
        >
          <img src={avatar} />
        </Avatar>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        <Box>
          <Typography variant="h6" style={{ color: "black" }}>
            {productName}
          </Typography>
        </Box>
        <Box>
          <Rating name="read-only" value={rating} readOnly />
        </Box>
        <Box>
          <Typography variant="h6" color="primary" fontWeight={"bold"}>
            {`$ ${price}`}
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
}

export default TopSellingProduct;
