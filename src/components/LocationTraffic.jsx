import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const locations = [
  { country: 'United States', percentage: 52.1, color: '#1e293b' },
  { country: 'Canada', percentage: 22.8, color: '#93c5fd' },
  { country: 'Mexico', percentage: 13.9, color: '#86efac' },
  { country: 'Other', percentage: 11.2, color: '#e2e8f0' },
]

export function LocationTraffic() {
  const data = {
    labels: locations.map(loc => loc.country),
    datasets: [
      {
        data: locations.map(loc => loc.percentage),
        backgroundColor: locations.map(loc => loc.color),
        borderWidth: 0,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: '70%',
  }

  return (
    <div className="mx-20 mt-3 bg-white rounded-lg shadow-sm dark:bg-gray-800">
      <h3 className="mb-4 text-lg font-bold text-center">Traffic by Location</h3>
      <div className="flex items-center gap-8">
        <div className="w-24 h-24 mt-5">
          <Doughnut data={data} options={options} />
        </div>
        <div className="flex-1 h-16 w-7">
          {locations.map((location) => (
            <div key={location.country} className="flex items-center gap-2 mb-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: location.color }}
              />
              <span className="text-sm">{location.country}</span>
              <span className="ml-auto text-sm text-gray-500">{location.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}