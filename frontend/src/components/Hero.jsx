import mapImg from '../assets/hero-food-travel.jpg'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-orange-100 to-teal-100 py-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${mapImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          <span className="text-orange-500">Travel, Taste</span>
          <br />
          <span className="text-[#32241b]">and Track Your Global Bite</span>
        </h1>

        <p className="text-lg md:text-xl text-[#32241b] mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover random destinations, try authentic local foods, and build your ultimate culinary travel bucket list.
          Adventure awaits with every bite!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors">
            Surprise Me
          </button>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
            View Bucket List
          </button>
        </div>
      </div>
    </section>
  )
}
