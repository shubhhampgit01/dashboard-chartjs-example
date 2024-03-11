import styles from "./styles.module.css";
import Text from "../text";
import { Colors } from "../../constant/color";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement
} from "chart.js";

interface DataBoxProps {
  name?: string;
  count?: string;
  growth?: number;
  data?: number[];
}

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const DataBox = ({ name, count, growth = 0, data = [] }: DataBoxProps) => {
  const options = {
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Text fontSize={12} fontWeight={600} color={Colors.scarpa_flow}>
          {name}
        </Text>
        <div className={styles.count}>
          <Text fontSize={20} fontWeight={700}>
            {count}
          </Text>
        </div>
        <Text
          fontWeight={600}
          color={growth >= 0 ? Colors.chart_green : Colors.chart_red}
        >
          {growth >= 0 ? `+${growth}%` : `${growth}%`}
        </Text>
      </div>
      <div className={styles.chartContainer}>
        <Line
          options={options}
          data={{
            labels: new Array(data.length).fill(""),
            datasets: [
              {
                data: data,
                backgroundColor:
                  growth >= 0 ? Colors.chart_green : Colors.chart_red,
                borderColor:
                  growth >= 0 ? Colors.chart_green : Colors.chart_red,
                pointStyle: false,
                tension: 0.4,
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default DataBox;
