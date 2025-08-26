"use client"

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

async function toggleCompletion({bucketListId, itemId, completed}){
  console.log(`bucketListId: ${bucketListId}`);
  console.log(`itemId: ${itemId}`);
  if (completed){
    const incompleteResponse = await axios.put(`http://localhost:8080/bucket-lists/${bucketListId}/items/${itemId}/not-completed`);
    console.log(incompleteResponse.data);
    return incompleteResponse.data;
  }else {
    const completeResponse = await axios.put(`http://localhost:8080/bucket-lists/${bucketListId}/items/${itemId}/completed`);
    console.log(completeResponse.data);
    return completeResponse.data;
  }
}

export default function BucketListCard({ bucketList }) {
  const [items, setItems] = useState(bucketList.item);

  const mutation = useMutation({
    mutationFn: toggleCompletion,
    onSuccess: (data) => {
      const itemId = data.bucketListItem
      toggleItem(itemId)
    },
    onError: (error) => {
      console.log(`ERROR: ${error}`);
    }
  })
  
  console.log(items)

  const toggleItem = (itemId) => {
    setItems(items.map((item) => (item.id === itemId ? { ...item, completed: !item.completed } : item)))
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{bucketList.name}</h3>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center">
            <input
              type="checkbox"
              id={`item-${item.id}`}
              checked={item.completed}
              onChange={() => mutation.mutate({bucketListId: bucketList.id, itemId: item.id, completed: item.completed})}
              className="w-5 h-5 text-teal-500 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
            />
            <label
              htmlFor={`item-${item.id}`}
              className={`ml-3 text-gray-700 ${item.completed ? "line-through text-gray-400" : ""}`}
            >
              {`Eat ${item.food} at ${item.location}`}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}
