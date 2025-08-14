"use client"

import { useState } from "react"

export default function BucketListCard({ bucketList }) {
  const [items, setItems] = useState(bucketList.items)

  const toggleItem = (itemId) => {
    setItems(items.map((item) => (item.id === itemId ? { ...item, completed: !item.completed } : item)))
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{bucketList.title}</h3>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center">
            <input
              type="checkbox"
              id={`item-${item.id}`}
              checked={item.completed}
              onChange={() => toggleItem(item.id)}
              className="w-5 h-5 text-teal-500 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
            />
            <label
              htmlFor={`item-${item.id}`}
              className={`ml-3 text-gray-700 ${item.completed ? "line-through text-gray-400" : ""}`}
            >
              {item.text}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}
