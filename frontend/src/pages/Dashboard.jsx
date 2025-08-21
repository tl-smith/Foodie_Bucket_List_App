import DashboardHero from "../components/DashboardHero";
import BucketListGrid from "../components/BucketListGrid";
import BucketList from "../components/BucketList";
import { useRef } from "react";

export default function Dashboard() {
  const dialogRef = useRef(null);

  function openModal(){
    console.log("Opening modal");
    console.log(dialogRef.current);
    dialogRef.current.showModal();
  }
  return (
    <div className="min-h-screen">
      <DashboardHero />
      <div className="text-center my-10">
        <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg text-lg">
          Create Bucketlist
        </button>
      </div>
      {/* <BucketList ref={dialogRef}/> */}
      <div>
        
      </div>
      <dialog className="w-3/4 mx-auto border-black border-1 fixed top-1/7 h-3/4 px-10 py-5 text-center rounded-3xl bg-white/95 bg-white" ref={dialogRef}>
        <h1 className="text-3xl font-bold mb-4">Welcome!</h1>
        <p className="mb-4">Let's add items to your bucket list 😊</p>

        <form className="border-gray-100 border-1 bg-[#f7f1e8] rounded-xl px-4 py-2"method="POST" action="?">
          <div className="form-field flex flex-col items-center w-1/2 mx-auto mb-2 min-w-50">
            <label for="name">Name of Bucket List</label>
            <input className="border-black border-1 rounded-lg w-2/2 p-2 bg-white" id="name" type="text"/>
          </div>
          <div className="form-field flex flex-col items-center w-1/2 mx-auto mb-2 min-w-50">
            <label for="city">Name of City</label>
            <select className="border-black border-1 rounded-lg w-2/2 p-2 bg-white" id="city" name="city">
              <option value="brooklyn">Brooklyn, NY</option>
              <option value="bronx">Bronx, NY</option>
              <option value="manhattan">Manhattan, NY</option>
              <option value="staten-island">Staten Island, NY</option>
              <option value="queens">Queens, NY</option>
            </select>
          </div>
          <div className="form-field flex flex-col items-center w-1/2 mx-auto mb-2">
            <button className="form-button w-full min-w-50" type="button">Get a Random Food</button>
            <input disabled className="border-black border-1 rounded-lg w-2/2 p-2 min-w-50 bg-white" type="text" placeholder="Your random food..."/>
          </div>
          <div className="form-field flex flex-col items-center w-1/2 mx-auto mb-2">
            <button className="form-button w-full min-w-50" type="button">Generate a random location</button>
            <input className="border-black border-1 rounded-lg w-2/2 p-2 min-w-50 bg-white" disabled type="text" placeholder="Your random location..."/>
          </div>
          <p className="text-lg font-italic mb-4 mt-8 pb-2 px-20 pt-4 border-b-4 border-black w-fit mx-auto bg-white/50 rounded-xl">Bucket List Item: </p>
          <button className="form-button w-1/2 min-w-50">Add to Bucket List?</button>
        </form>

        <details className="bucket-list-preview mt-8 p-4 border-gray-100 border-1 bg-[#f7f1e8] rounded-xl">
          <summary className="text-[#ff6900] font-bold">Current Bucket List</summary>
          <div className="w-1/2 border-gray-300 border-3 bg-[oklch(0.705 0.213 47.604)]/50 mx-auto my-4 p-4">
            <h2>Bucket List Title</h2>
            <ul className="text-left">
              <li className="before:content-['🌟'] pl-4">Bucket list Item 1</li>
              <li className="before:content-['🌟']">Bucket list Item 2</li>
              <li className="before:content-['🌟']">Bucket list Item 3</li>
            </ul>
          </div>
        </details>

        <button className="button" onClick={() => dialogRef.current.close()}>Close Me</button>
      </dialog>
      <button className="button" onClick={openModal}>Open Modal</button>
      <div className="py-16">
        <BucketListGrid />
      </div>
    </div>
  )
}

