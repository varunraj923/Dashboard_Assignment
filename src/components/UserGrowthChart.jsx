import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const tabs = ['Total Users', 'Total Projects', 'Operating Status']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']

export function UserGrowthChart() {
  const [activeTab, setActiveTab] = useState('Total Users')

  const data = {
    labels: months,
    datasets: [
      {
        label: 'This Year',
        data: [10000, 15000, 12000, 25000, 28000, 20000, 25000],
        borderColor: '#1a1a1a',
        tension: 0.4,
        borderWidth: 2,
      },
      {
        label: 'Last Year',
        data: [8000, 12000, 17000, 15000, 22000, 18000, 30000],
        borderColor: '#93c5fd',
        borderDash: [5, 5],
        tension: 0.4,
        borderWidth: 2,
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
          color: '#9ca3af',
          font: { size: 10 },
        },
      },
      x: {
        ticks: {
          color: '#9ca3af',
          font: { size: 10 },
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
    <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-sm w-[400px] h-[260px] mx-64">
      <div className="flex items-center justify-between mb-3">
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-2 py-1 text-xs rounded-md transition ${
                activeTab === tab
                  ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-medium'
                  : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-300">
          <div className="flex items-center">
            <span className="w-2 h-2 mr-1 bg-black rounded-full dark:bg-white" />
            This Year
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 mr-1 bg-blue-300 rounded-full" />
            Last Year
          </div>
        </div>
      </div>
      <div className="h-[160px]">
        <Line data={data} options={options} />
      </div>
    </div>
  )
}
