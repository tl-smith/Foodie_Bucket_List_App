import DashboardHero from "../components/DashboardHero";
import BucketListGrid from "../components/BucketListGrid";
import BucketList from "../components/BucketList";
import { useRef } from "react";

export default function Dashboard() {
  const dialogRef = useRef(null);

  function openModal(){
    dialogRef.current.showModal();
  }

  function closeModal(){
    dialogRef.current.close();
  }

  return (
    <div className="min-h-screen">
      <DashboardHero />
      <div className="text-center my-10">
        <button 
          className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg text-lg"
          onClick={openModal}
        >
          Create Bucketlist
        </button>
      </div>
      <BucketList modalRef={dialogRef} handleClose={closeModal}/>
      <div className="py-16">
        <BucketListGrid />
      </div>
    </div>
  )
}

