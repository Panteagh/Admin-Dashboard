import { LineChart } from "@mui/x-charts/LineChart";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function AreaChart() {
  return (
    <>
    <SectionHeader Lable={"Completed tasks over time"} />

    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12,14,16] }]}
      series={[
        {
          data: [1, 6, 5, 8.5, 1.5, 5, 7,6.7,13],
          area: true,
          color:'#8576FF'
        },
      ]}
      width={700}
      height={300}
    />
    </>
  );
}
