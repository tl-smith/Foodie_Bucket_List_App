export default function DashboardHeader() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-6 h-6 bg-orange-500 rounded-full mr-2"></div>
            <span className="text-xl font-bold text-gray-900">WanderBite</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-600 hover:text-gray-900 font-medium">
              Home
            </a>
            <a
              href="/dashboard"
              className="text-orange-500 hover:text-orange-600 font-medium border-b-2 border-orange-500"
            >
              Dashboard
            </a>
            <a href="/about" className="text-gray-600 hover:text-gray-900 font-medium">
              About
            </a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900 font-medium">
              Contact
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 font-medium">Profile</button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
