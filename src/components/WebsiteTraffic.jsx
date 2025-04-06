import React from 'react'

const websites = [
  { name: 'Google', traffic: 80 },
  { name: 'YouTube', traffic: 65 },
  { name: 'Instagram', traffic: 55 },
  { name: 'Pinterest', traffic: 45 },
  { name: 'Facebook', traffic: 35 },
  { name: 'Twitter', traffic: 25 },
]

export function WebsiteTraffic() {
  return (
    <div className="w-[300px] h-full p-4 bg-white rounded-xl shadow-sm dark:bg-gray-800 ml-28">
      <h3 className="mb-3 text-sm font-semibold text-gray-800 dark:text-white">
        Traffic by Website
      </h3>
      <div className="space-y-3">
        {websites.map((site) => (
          <div key={site.name} className="flex items-center gap-2">
            <span className="w-20 text-xs text-gray-500 dark:text-gray-400">{site.name}</span>
            <div className="flex-1">
              <div className="h-2 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-700">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: `${site.traffic}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
