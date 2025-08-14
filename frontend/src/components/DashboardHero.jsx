export default function DashboardHero() {
  return (
    <section className="bg-orange-500 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          {/* Profile Avatar */}
          <div className="w-24 h-24 bg-gray-400 rounded-full mr-8 flex-shrink-0"></div>

          {/* Welcome Content */}
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">Welcome Jane, To Your Food Adventure Dashboard</h1>
            <p className="text-xl text-orange-100">Create, manage, and explore your culinary travel experiences</p>
          </div>
        </div>

        {/* Create Bucketlist Button */}
        <div className="mt-12 text-center">
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors">
            Create Bucketlist
          </button>
        </div>
      </div>
    </section>
  )
}
