import Header from "../components/header"
import Hero from "../components/Hero"
import HowItWorks from "../components/HowItWorks"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <HowItWorks />
      <Footer />
    </div>
  )
}