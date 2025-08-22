

export default function BucketList(props) {
    const { modalRef, handleClose } = props;

    return (
        <dialog className="relative w-3/4 max-w-200 min-w-100 mx-auto border-black border-1 fixed top-1/7 h-3/4 px-10 py-5 text-center rounded-3xl bg-white/95 bg-white text-[#400c4c]" ref={modalRef}>
            <h1 className="text-3xl font-bold mb-4">Welcome!</h1>
            <p className="mb-4">Let's add items to your bucket list 😊</p>

            <form className="border-gray-100 border-1 bg-[#f7f1e8] rounded-xl px-4 py-2" method="POST" action="/">
                <div className="form-field flex flex-col items-center w-1/2 mx-auto my-6 min-w-50">
                    <label htmlFor="name" className="mb-4">Name of Bucket List</label>
                    <input className="border-black border-1 rounded-lg w-2/2 p-2 bg-white" id="name" type="text"/>
                </div>
                <div className="form-field flex flex-col items-center w-1/2 mx-auto my-6 min-w-50">
                    <label htmlFor="city" className="mb-4">Name of City</label>
                    <select className="border-black border-1 rounded-lg w-2/2 p-2 bg-white" id="city" name="city">
                        <option value="brooklyn">Brooklyn, NY</option>
                        <option value="bronx">Bronx, NY</option>
                        <option value="manhattan">Manhattan, NY</option>
                        <option value="queens">Queens, NY</option>
                    </select>
                </div>
                <div className="form-field flex flex-col items-center w-1/2 mx-auto my-6">
                    <button className="form-button w-full min-w-50" type="button">Get a Random Food</button>
                    <input disabled className="border-black border-1 rounded-lg w-2/2 p-2 min-w-50 bg-white" type="text" placeholder="Your random food..."/>
                </div>
                <div className="form-field flex flex-col items-center w-1/2 mx-auto my-6">
                    <button className="form-button w-full min-w-50" type="button">Generate a random location</button>
                    <input className="border-black border-1 rounded-lg w-2/2 p-2 min-w-50 bg-white" disabled type="text" placeholder="Your random location..."/>
                </div>
                <p className="text-lg font-italic mb-4 mt-8 pb-2 px-20 pt-4 border-b-4 border-black w-fit mx-auto bg-white/50 rounded-xl">Bucket List Item: </p>
                <button className="button w-1/2 min-w-50">Add to Bucket List?</button>
            </form>

            <details className="bucket-list-preview mt-8 p-4 border-gray-100 border-1 bg-[#f7f1e8] rounded-xl">
                <summary className="text-xl text-[#ff6900] font-bold">Current Bucket List Preview</summary>
                <div className="w-3/4 border-orange-100 border-3 mx-auto my-4 py-4 px-8 bg-[#ff6900] text-white rounded-xl">
                    <h2 className="text-2xl font-bold">Bucket List Title</h2>
                    <ul className="text-left my-4">
                        <li className="text-lg pb-2 border-b-2 border-orange-100 before:content-['🌟'] mb-4">Bucket list Item 1</li>
                        <li className="text-lg pb-2 border-b-2 border-orange-100 before:content-['🌟'] mb-4">Bucket list Item 2</li>
                        <li className="text-lg pb-2 border-b-2 border-orange-100 before:content-['🌟'] mb-4">Bucket list Item 3</li>
                    </ul>
                </div>
            </details>

            <button className="button" onClick={handleClose}>Close Me</button>
        </dialog>
    );
}