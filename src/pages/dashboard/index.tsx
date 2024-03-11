import styles from "./styles.module.css";
import RightSidebar from "../../components/rightSidebar";
import Text from "../../components/text";
import { TbMessageDots } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import avatar from "../../assets/avatar.png";
import DataBox from "../../components/dataBox";
import { Colors } from "../../constant/color";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ReviewBox from "../../components/reviewBox";
import React from "react";
import { FiMenu } from "react-icons/fi";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

interface DashboardProps{
  isBackClick?: boolean;
  setisBackClick?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dashboard = ({isBackClick, setisBackClick=()=>{}}:DashboardProps) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        align: "end" as const,
        labels: {
          boxWidth: 10,
          boxHeight: 10,
          useBorderRadius: true,
          borderRadius: 2,
        },
      },
    },
    scales: {
      y: {
        min: 0,
        max: 75,
        ticks: {
          stepSize: 25,
        },
      },
    },
  };

  const data = {
    labels: [
      "",
      "14.10",
      "14.20",
      "14.30",
      "14.40",
      "14.50",
      "14.60",
      "15.00",
      "15.10",
      "15.20",
      "15.30",
    ],
    datasets: [
      {
        label: "Web Server A",
        data: [15, 30, 26, 40, 7, 65, 28, 62, 46, 30, 75],
        borderColor: Colors.chart_green,
        backgroundColor: Colors.chart_green,
        pointStyle: false as const,
        tension: 0.4,
      },
      {
        label: "Web Server B",
        data: [10, 22, 20, 30, 1, 27, 17, 44, 27, 15, 50],
        borderColor: "gold",
        backgroundColor: "gold",
        pointStyle: false as const,
        tension: 0.4,
      },
    ],
  };

  const visitorOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        display: false,
      },
      x: {
        display: true,
        grid: {
          display: false,
        },
        border: {
            display: false
        }
      },
    },
  };

  const visitorData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        data: [1120, 540, 1702, 986, 430, 2040, 801],
        backgroundColor: Colors.french_lilac,
        hoverBackgroundColor: Colors.chart_purple,
        borderRadius: 13,
        borderSkipped: false
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          boxWidth: 10,
          boxHeight: 10,
          useBorderRadius: true,
          borderRadius: 2,
        },
      },
    },
  };

  const doughnutData = {
    labels: ["Fixed Servers", "Down Servers", "Running Servers"],
    datasets: [
      {
        data: [35, 40, 25],
        backgroundColor: [Colors.chart_purple, Colors.sea_pink, Colors.sidecar],
        borderColor: [Colors.chart_purple, Colors.sea_pink, Colors.sidecar],
        borderWidth: 1,
        cutout: "75%",
        borderRadius: {
          innerEnd: 12,
          outerEnd: 12,
        },
      },
    ],
  };

  return (
    <div className={styles.mainContainer}>
      {isBackClick && <div className={styles.menu} onClick={()=>setisBackClick(false)}><FiMenu /></div>}
      <div className={styles.container}>
        <div className={styles.headerMainContainer}>
          <div className={styles.headerTextContainer}>
            <Text fontSize={20} fontWeight={700}>
              Dashboard
            </Text>
            <Text fontSize={12} fontWeight={500} color={Colors.scarpa_flow}>
              Welcome to Geex Modern Admin Dashboard
            </Text>
          </div>
          <div className={styles.headerIconContainer}>
            <TbMessageDots style={{ fontSize: "25px" }} />
            <IoMdNotificationsOutline style={{ fontSize: "25px" }} />
            <img src={avatar} alt="" className={styles.avatarImg} />
          </div>
        </div>
        <div className={styles.topOverviewContainer}>
          <DataBox
            name="Mermory"
            count="200TB"
            growth={2.5}
            data={[114, 100, 5, 156, 62, 195, 50, 80, 70, 200]}
          />
          <DataBox
            name="Visitors"
            count="87,255K"
            growth={-4.4}
            data={[120000, 90000, 125000, 71000, 120000, 69000, 150000, 87245]}
          />
          <DataBox
            name="New Users"
            count="4,750"
            growth={2.5}
            data={[3500, 750, 4500, 1250, 1500, 3500, 1900, 4750]}
          />
        </div>
        <div className={styles.serverRequestMainContainer}>
          <Text fontSize={18} fontWeight={600}>
            Server Request
          </Text>
          <Line options={options} data={data} />
        </div>
        <div className={styles.midMainContainer}>
          <div className={styles.midContainer}>
            <div className={styles.midBoxHeaderContainer}>
              <Text fontSize={18} fontWeight={600}>
                Visitors
              </Text>
              <Text fontSize={12} fontWeight={600} color={Colors.chart_purple}>
                View more
              </Text>
            </div>
            <div className={styles.countContainer}>
                <Text fontSize={32} fontWeight={600} color={Colors.chart_green}>98,425k</Text>
                <div className={styles.count}>
                    <Text fontWeight={600}>+0.4%</Text>
                    <Text fontSize={12} fontWeight={500} color={Colors.scarpa_flow}>Than last week</Text>
                </div>
            </div>
            <div className={styles.barChartContainer}>
              <Bar options={visitorOptions} data={visitorData} />
            </div>
          </div>
          <div className={styles.midContainer}>
            <div className={styles.midBoxHeaderContainer}>
              <Text fontSize={18} fontWeight={600}>
                Chart Summary
              </Text>
              <Text fontSize={12} fontWeight={600} color={Colors.chart_purple}>
                Download Report
              </Text>
            </div>
            <div className={styles.doughnutChartContainer}>
              <Doughnut options={doughnutOptions} data={doughnutData} />
            </div>
          </div>
        </div>
        <div className={styles.reviewMainContainer}>
          <div className={styles.reviewHeaderContainer}>
            <div className={styles.reviewHeader}>
              <Text fontSize={18} fontWeight={600}>
                User Review
              </Text>
              <Text fontSize={12} fontWeight={600} color={Colors.scarpa_flow}>
                Lorem ipsum dolor sit amet.
              </Text>
            </div>
            <div className={styles.arrowContainer}>
              <FaArrowLeft color={Colors.chart_purple} />
              <FaArrowRight color={Colors.chart_purple} />
            </div>
          </div>
          <div className={styles.reviewContainer}>
            <ReviewBox
              name="John Doe"
              time="2 days ago"
              review="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur totam, laudantium at officia nobis repudiandae."
            />
            <ReviewBox
              name="Jons Sena"
              time="4 days ago"
              review="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur totam, laudantium at officia nobis repudiandae."
            />
            <ReviewBox
              name="John Doe"
              time="5 days ago"
              type="published"
              review="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur totam, laudantium at officia nobis repudiandae."
            />
          </div>
        </div>
      </div>
      <RightSidebar />
    </div>
  );
};

export default Dashboard;
