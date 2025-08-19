import DashboardHero from "../components/DashboardHero"
import BucketListGrid from "../components/BucketListGrid"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-stone-50">
      <DashboardHero />
      <div className="py-16">
        <BucketListGrid />
      </div>
    </div>
  )
}

