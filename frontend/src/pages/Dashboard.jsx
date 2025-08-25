import DashboardHero from "../components/DashboardHero"
import BucketListGrid from "../components/BucketListGrid"

export default function Dashboard() {
  return (
    <div className="min-h-screen">
      <DashboardHero />
      <div className="text-center my-10">
        <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg text-lg">
          Create Bucketlist
        </button>
      </div>
      <div className="py-12">
        <BucketListGrid />
      </div>
    </div>
  )
}

