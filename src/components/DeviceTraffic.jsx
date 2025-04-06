import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const devices = ['Linux', 'Mac', 'iOS', 'Windows', 'Android', 'Other']
const colors = ['#818cf8', '#34d399', '#000000', '#60a5fa', '#a78bfa', '#4ade80']

export function DeviceTraffic() {
  const data = {
    labels: devices,
    datasets: [
      {
        data: [15000, 25000, 20000, 30000, 15000, 25000],
        backgroundColor: colors,
        borderRadius: 4,
        barThickness: 30,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 30000,
        ticks: {
          callback: (value) => value / 1000 + 'k',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm h-[200px] w-full md:w-[60%] lg:w-[58%] mx-64">
      <h3 className="mb-10 text-lg font-bold text-gray-700 dark:text-white">
        Traffic by Device
      </h3>
      <div className="h-[160px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  )
}
