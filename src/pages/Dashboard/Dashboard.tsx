import { Container, CssBaseline, Paper } from "@mui/material";
import TopAnalyticsCards from "../../components/TopAnalyticsCards/TopAnalyticsCards";
import TopSellingProduct from "../../components/TopSellingProductSction/TopSellingProduct";
import ReportChartBar from "../../components/ReportChartBar/ReportChartBar";
import AnalyticsChartPie from "../../components/AnalyticsChartPie/AnalyticsChartPie";
import AreaChart from "../../components/AreaChart/AreaChart";
import NIKEShose from "../../assets/images/Rectangle 53.png";
import iPhone from "../../assets/images/iPhone-12-2.png";
import OrderTable from "../../components/Table/Table";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

function Dashboard() {
  return (
    <Container sx={{ height: "100%", marginTop: "49px", marginLeft: "80px" , justifyContent:'center' , alignItems:'center'}}>
      <TopAnalyticsCards />

      <div
        style={{
          display: "grid",
          gap: 60,
          gridTemplateColumns: "repeat(2, 1fr)",
          marginTop: "20px",
        }}
      >
        <Paper sx={{ boxShadow: "3", backgroundColor: "#F5F7F8" }}>
          <ReportChartBar />
        </Paper>

        <Paper sx={{ boxShadow: "3", backgroundColor: "#F5F7F8" }}>
          <AnalyticsChartPie />
        </Paper>

        <Paper sx={{ boxShadow: "3", backgroundColor: "#F5F7F8" }}>
          <AreaChart />
        </Paper>

        <Paper
          sx={{
            boxShadow: "3",
            backgroundColor: "#F5F7F8",
            paddingLeft:2 ,
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <SectionHeader Lable="Top selling Products"/>
          <TopSellingProduct
            avatar={NIKEShose}
            productName="NIKE Shoes Black Pattern"
            price={82}
            rating={4}
          />
          <CssBaseline />
          <TopSellingProduct
            avatar={iPhone}
            productName="iPhone 12"
            price={987}
            rating={3}
          />
        </Paper>
      </div>
      <Paper sx={{ boxShadow: "3", backgroundColor: "#F5F7F8" , marginTop:'30px'}}>
        <OrderTable />
      </Paper>
    </Container>
  );
}

export default Dashboard;
