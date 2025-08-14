export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: "📍",
      title: "Get a Random Destination & Food",
      description:
        "Click 'Surprise Me' to discover a random travel destination paired with an authentic local dish you must try.",
    },
    {
      number: "2",
      icon: "📸",
      title: "Try It, Snap a Pic",
      description:
        "Visit the destination or try the dish locally, then capture the moment with a photo to remember your culinary adventure.",
    },
    {
      number: "3",
      icon: "📋",
      title: "Save to Your Bucket List",
      description:
        "Add your experience to your personal travel-food bucket list with notes, photos, and memories to cherish forever.",
    },
  ]

  return (
    <section className="py-20 bg-[#f7f1e8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#32241b] mb-4">
            How it <span className="text-teal-500">Works</span>
          </h2>
          <p className="text-lg text-[#32241b] max-w-2xl mx-auto">
            Three simple steps to start your global culinary adventure
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="relative mb-6">
                
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {step.number}
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#32241b] mb-4">{step.title}</h3>

              <p className="text-[#32241b] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
