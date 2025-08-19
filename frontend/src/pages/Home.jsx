import Hero from "../components/Hero"
import HowItWorks from "../components/HowItWorks"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <HowItWorks />
    </div>
  )
}