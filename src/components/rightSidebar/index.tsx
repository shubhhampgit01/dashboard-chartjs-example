import { IoSearch } from 'react-icons/io5';
import Input from '../input';
import styles from './style.module.css';
import Text from '../text';
import { Colors } from '../../constant/color';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import RecentProblems from '../recentProblems';
import google from '../../assets/google.png';
import facebook from '../../assets/facebook.webp';
import youtube from '../../assets/youtube.png';
import Activity from '../activity';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement
);
const RightSidebar = () => {
  const getColor = (data: number[], type: string) => {
    let colors = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i] < 4) {
        if (type === 'one') {
          colors[i] = Colors.chart_red;
        } else if (type === 'two') {
          colors[i] = Colors.chart_red + "60";
        } else {
          colors[i] = Colors.chart_red + "30";
        }
      } else if (data[i] < 5) {
        if (type === 'one') {
          colors[i] = Colors.chart_yellow;
        } else if (type === 'two') {
          colors[i] = Colors.chart_yellow + "60";
        } else {
          colors[i] = Colors.chart_yellow + "30";
        }
      } else {
        if (type === 'one') {
          colors[i] = Colors.chart_green;
        } else if (type === 'two') {
          colors[i] = Colors.chart_green + "60";
        } else {
          colors[i] = Colors.chart_green + "30";
        }
      }

    }
    return colors;
  }
  const options = {
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false
        },
        border: {
          display: false
        }
      },
      y: {
        stacked: true,
        position: 'right' as const,
        grid: {
          display: false
        },
        border: {
          display: false
        },
        min: 2,
        max: 10,
        ticks: {
          stepSize: 2,
          callback: function (value: any) {
            return value + ' AM';
          },
        },
      },
    }
  };

  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        data: [3, 5, 5, 4, 5, 2.2, 6],
        backgroundColor: getColor([3, 5, 5, 4, 5, 2, 6], 'one'),
        barThickness: 7,
        borderRadius: {
          topRight: 4,
          topLeft: 4,
          bottomLeft: 4,
          bottomRight : 4
        },
      },
      {
        data: [2, 2, 2, 3, 3, 1.8, 1],
        backgroundColor: getColor([3, 5, 5, 4, 5, 2, 6], 'two'),
        barThickness: 7,
        borderRadius: {
          topRight: 4,
          topLeft: 4,
        },
      },
      {
        data: [1, 2, 1, 1, 2, 1, 1],
        backgroundColor: getColor([3, 5, 5, 4, 5, 2, 6], 'three'),
        barThickness: 7,
        borderRadius: {
          topRight: 4,
          topLeft: 4,
        },
      },
    ],
  };
  return (
    <div className={styles.mainContainer} >
      <Input placeholder='Search here...' rightIcon={<IoSearch style={{ fontSize: 20 }} />} />
      <div className={styles.serverStatusMainContainer}>
        <Text fontSize={18} fontWeight={600}>Server Status</Text>
        <Text fontSize={12} fontWeight={600} color={Colors.scarpa_flow}>Lorem ipsum dolor sit amet.</Text>
        <Bar options={options} data={data} />
      </div>
      <div className={styles.recentProblemContainer}>
        <Text fontSize={18} fontWeight={600}>Recent Problems</Text>
        <Text fontSize={12} fontWeight={600} color={Colors.scarpa_flow}>Lorem ipsum dolor sit amet.</Text>
        <RecentProblems logo={google} name='Google' link='https://www.google.com' btnText='Down' btnColor={Colors.chart_red} />
        <RecentProblems logo={facebook} name='Facebook' link='https://www.facebook.com' btnText='Stable' btnColor={Colors.chart_green} />
        <RecentProblems logo={youtube} name='Youtube' link='https://www.youtube.com' btnText='Warning' btnColor='gold' />
      </div>
      <div className={styles.latestActivityContainer}>
        <Text fontSize={18} fontWeight={600}>Latest Activity</Text>
        <Text fontSize={12} fontWeight={600} color={Colors.scarpa_flow}>Lorem ipsum dolor sit amet.</Text>
        <div className={styles.activity}>
          <Activity data={[
            { time: "January 2nd, 04:35 AM", activity: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam id accusantium, eius qui sunt assumenda?" },
            { time: "January 4th, 04:35 AM", activity: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam id accusantium, eius qui sunt assumenda?" },
            { time: "January 5th, 04:35 AM", activity: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam id accusantium, eius qui sunt assumenda?" },
          ]} />
        </div>
      </div>
    </div >
  )
}

export default RightSidebar