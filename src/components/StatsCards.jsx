import React from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'
import { motion } from 'framer-motion'

const stats = [
  { label: 'Views', value: '7,265', change: '+11.01%', increasing: true },
  { label: 'Visits', value: '3,671', change: '-0.03%', increasing: false },
  { label: 'New Users', value: '156', change: '+15.03%', increasing: true },
  { label: 'Active Users', value: '2,318', change: '+6.08%', increasing: true },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="p-3 bg-white rounded-lg shadow-sm dark:bg-gray-800"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                {stat.value}
              </h3>
            </div>
            <div
              className={`flex items-center text-xs font-medium ${
                stat.increasing ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {stat.increasing ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
              <span className="ml-1">{stat.change}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
