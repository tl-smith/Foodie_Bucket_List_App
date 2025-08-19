import { NavLink } from "react-router-dom";

export default function NavBar() {
    function Logo() {
        return (
            <div className="flex items-center">
                <a href="/home" className="text-orange-500 hover:text-orange-600">
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
        );
    }

  return (
    <header className="bg-[#f7f1e8] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 w-3/5">
          <Logo/>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink 
                to="/home"
                className={({isActive}) => {
                    return isActive ? 
                    "text-orange-500 hover:text-orange-600 font-medium border-b-2 border-orange-500" : "text-[#32241b] hover:text-orange-500 font-medium"
                }}
            >
                Home
            </NavLink>
            <NavLink 
                to="/about"
                className={({isActive}) => {
                    return isActive ? 
                    "text-orange-500 hover:text-orange-600 font-medium border-b-2 border-orange-500" : "text-[#32241b] hover:text-orange-500 font-medium"
                }}
            >
                About
            </NavLink>
            <NavLink 
                to="/dashboard"
                className={({isActive}) => {
                    return isActive ? 
                    "text-orange-500 hover:text-orange-600 font-medium border-b-2 border-orange-500" : "text-[#32241b] hover:text-orange-500 font-medium"
                }}
            >
                Dashboard
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}
