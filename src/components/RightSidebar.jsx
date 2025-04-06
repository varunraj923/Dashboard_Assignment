import React from 'react'
import { Bell, Clock } from 'lucide-react'

const notifications = [
  { text: 'You fixed a bug', time: 'Just now' },
  { text: 'New user registered', time: '59 minutes ago' },
  { text: 'You fixed a bug', time: '12 hours ago' },
  { text: 'Andi Lane subscribed to you', time: 'Today, 11:59 AM' },
]

const activities = [
  { text: 'Changed the style', user: 'AN', color: 'bg-purple-500', time: 'Just now' },
  { text: 'Released a new version', user: 'DC', color: 'bg-blue-500', time: '59 minutes ago' },
  { text: 'Submitted a bug', user: 'AL', color: 'bg-green-500', time: '12 hours ago' },
  { text: 'Modified A data in Page X', user: 'KO', color: 'bg-yellow-500', time: 'Today, 11:59 AM' },
  { text: 'Deleted a page in Project X', user: 'MM', color: 'bg-red-500', time: 'Feb 2, 2023' },
]

const contacts = [
  { name: 'Natali Craig', avatar: 'NC' },
  { name: 'Drew Cano', avatar: 'DC' },
  { name: 'Andi Lane', avatar: 'AL' },
  { name: 'Koray Okumus', avatar: 'KO' },
  { name: 'Kate Morrison', avatar: 'KM' },
  { name: 'Melody Macy', avatar: 'MM' },
]

export function RightSidebar() {
  return (
    <aside className="w-64 border-l border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div className="p-4">
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Notifications</h3>
          <div className="space-y-4">
            {notifications.map((notification, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <Bell size={16} className="text-blue-500" />
                </div>
                <div>
                  <p className="text-sm">{notification.text}</p>
                  <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Activities</h3>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-full ${activity.color} flex items-center justify-center text-white text-sm`}>
                  {activity.user}
                </div>
                <div>
                  <p className="text-sm">{activity.text}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contacts</h3>
          <div className="space-y-3">
            {contacts.map((contact, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-sm">
                  {contact.avatar}
                </div>
                <span className="text-sm">{contact.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}