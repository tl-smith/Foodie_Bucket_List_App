export default function Header() {
  return (
    <header className="bg-[#f7f1e8] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-orange-500 hover:text-orange-600">
  
        <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
        >
    <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
  </svg>
</a>


            <span className="text-xl font-bold text-orange-500">WanderBite</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-[#32241b] hover:text-orange-500 font-medium">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">
              Contact
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-[#32241b] hover:text-orange-500 font-medium">Login</button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
