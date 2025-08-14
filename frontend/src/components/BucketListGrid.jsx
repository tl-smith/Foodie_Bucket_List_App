import BucketListCard from "./BucketListCard"

export default function BucketListGrid() {
  const bucketLists = [
    {
      id: 1,
      title: "NYC",
      items: [
        { id: 1, text: "Try authentic pizza in Little Italy", completed: false },
        { id: 2, text: "Visit famous delis in Manhattan", completed: false },
        { id: 3, text: "Experience rooftop dining", completed: false },
      ],
    },
    {
      id: 2,
      title: "Brooklyn",
      items: [
        { id: 4, text: "Explore food trucks in DUMBO", completed: false },
        { id: 5, text: "Try artisanal coffee in Williamsburg", completed: false },
        { id: 6, text: "Visit local farmers market", completed: false },
      ],
    },
    {
      id: 3,
      title: "Staten Island",
      items: [
        { id: 7, text: "Discover hidden Italian restaurants", completed: false },
        { id: 8, text: "Try fresh seafood by the water", completed: false },
        { id: 9, text: "Visit local bakeries", completed: false },
      ],
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">My Bucket lists:</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bucketLists.map((bucketList) => (
          <BucketListCard key={bucketList.id} bucketList={bucketList} />
        ))}
      </div>
    </div>
  )
}
