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
      <dialog className="w-3/4 mx-auto border-black border-1 fixed top-1/7 h-3/4 px-10 py-5 text-center rounded-3xl" ref={dialogRef}>
        <h1 className="text-3xl font-bold">Welcome!</h1>
        <p>Let's add items to your bucket list 😊</p>

        <form className="border-black border-1 rounded-xl px-4 py-2"method="POST" action="?">
          <div className="form-field flex flex-col items-center w-1/2 mx-auto mb-2">
            <label for="name">Name of Bucket List</label>
            <input className="border-black border-1 rounded-lg w-2/2 p-2" id="name" type="text"/>
          </div>
          <div className="form-field flex flex-col items-center w-1/2 mx-auto mb-2">
            <label for="city">Name of City</label>
            <select className="border-black border-1 rounded-lg w-2/2 p-2" id="city" name="city">
              <option value="brooklyn">Brooklyn, NY</option>
              <option value="bronx">Bronx, NY</option>
              <option value="manhattan">Manhattan, NY</option>
              <option value="staten-island">Staten Island, NY</option>
              <option value="queens">Queens, NY</option>
            </select>
          </div>
          <div className="form-field flex flex-col items-center w-1/2 mx-auto mb-2">
            <button className="form-button" type="button">Get a Random Food</button>
            <input disabled className="border-black border-1 rounded-lg w-2/2 p-2" type="text" placeholder="Your random food..."/>
          </div>
          <div className="form-field flex flex-col items-center w-1/2 mx-auto mb-2">
            <button className="form-button" type="button">Generate a random location</button>
            <input className="border-black border-1 rounded-lg w-2/2 p-2" disabled type="text" placeholder="Your random location"/>
          </div>
          <p className="text-lg font-italic">Your random result</p>
          <button className="form-button">Add to Bucket List?</button>
        </form>

        <div class="bucket-list-preview">
          <h2>Bucket List Title</h2>
          <ul>
            <li>Bucket list Item 1</li>
            <li>Bucket list Item 2</li>
            <li>Bucket list Item 3</li>
          </ul>
        </div>

        <button className="button" onClick={() => dialogRef.current.close()}>Close Me</button>
      </dialog>
      <button className="button" onClick={openModal}>Open Modal</button>
      <div className="py-16">
        <BucketListGrid />
      </div>
    </div>
  )
}

