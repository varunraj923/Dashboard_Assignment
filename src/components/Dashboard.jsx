import React from 'react'
import { StatsCards } from './StatsCards'
import { UserGrowthChart } from './UserGrowthChart'
import { WebsiteTraffic } from './WebsiteTraffic'
import { DeviceTraffic } from './DeviceTraffic'
import { LocationTraffic } from './LocationTraffic'

export function Dashboard() {
  return (
    <div className="space-y-6">
      <StatsCards />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <UserGrowthChart />
        </div>
        <div className="lg:col-span-2">
          <WebsiteTraffic />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <DeviceTraffic />
        <LocationTraffic />
      </div>
    </div>
  )
}