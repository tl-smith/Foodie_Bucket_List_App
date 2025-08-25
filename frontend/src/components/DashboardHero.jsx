export default function DashboardHero() {
  return (
    <div className="bg-orange-500 py-12 px-4">
      <div className="container mx-auto flex items-center justify-center">
        {/* Welcome Text */}
        <div className="text-white text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Welcome to Your Food Adventure Dashboard!
          </h1>
          <p className="text-lg opacity-90">
            Create, manage, and explore your culinary travel experiences
          </p>
        </div>
      </div>
    </div>
  )
}
