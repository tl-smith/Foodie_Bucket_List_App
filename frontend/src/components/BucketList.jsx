import { randomFoods, randomPlaces } from "../assets/randomBucketListOptions";
import { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

async function createBucketList(bucketList) {
    const response = await axios.post("http://localhost:8080/bucket-lists/", {
        location: bucketList.location,
        image: "",
        name: bucketList.name
    });
    console.log(response.data.bucketList);
    return response.data.bucketList;
}

async function addBucketItem({bucketListId, city, itemPlace, itemFood}) {
    const response = await axios.post(`http://localhost:8080/bucket-lists/${bucketListId}/items`, {
        city: city,
        location: itemPlace,
        food: itemFood,
    });
    console.log(response.data.bucketListItem);
    return response.data.bucketListItem;
}

export default function BucketList(props) {
    const { modalRef, handleClose } = props;
    const formRef = useRef(null);
    const cityRef = useRef(null);
    const randomFoodRef = useRef(null);
    const randomPlaceRef = useRef(null);
    const [randomFood, setRandomFood] = useState("");
    const [randomPlace, setRandomPlace] = useState("");
    const [bucketList, setBucketList] = useState({
        id: "",
        location: "",
        image: "",
        name: "",
        item: []
    });

    const bucketListMutation = useMutation({
        mutationFn: createBucketList,
        onSuccess: (data) => {
            return data;
        },
        onError: (error) => {console.log(`ERROR: ${error}`)}
    })

    const bucketItemMutation = useMutation({
        mutationFn: addBucketItem,
        onSuccess: (data) => {
            return data;
        },
        onError: (error) => {console.log(`ERROR: ${error}`)}
    })

    function getRandomFood(){
        const city = cityRef.current.value;
        const randomIndex = Math.floor(Math.random()*randomFoods[city].length);
        console.log(randomIndex);
        randomFoodRef.current.value = randomFoods[city][randomIndex];
        setRandomFood(randomFoods[city][randomIndex]);
    }

    function getRandomPlace(){
        const city = cityRef.current.value;
        const randomIndex = Math.floor(Math.random()*randomPlaces[city].length);
        randomPlaceRef.current.value = randomPlaces[city][randomIndex];
        setRandomPlace(randomPlaces[city][randomIndex]);
    }

    async function handleSubmit(event){
        event.preventDefault();
        console.log(formRef.current.elements);
        const {city, name, place, food} = formRef.current.elements;
        console.log(city.value, name.value, place.value, food.value);
        if (bucketList.item.length < 1){
            const bucketListId = await bucketListMutation.mutateAsync({location: city.value, name: name.value});
            const bucketItemId = await bucketItemMutation.mutateAsync({
                bucketListId: bucketListId,
                city: city.value,
                itemPlace: place.value,
                itemFood: food.value
            })
            setBucketList(prev => {
                return {
                    ...prev, 
                    id: bucketListId,
                    location: city.value,
                    name: name.value,
                    item: [{
                        city: city.value,
                        location: place.value,
                        food: food.value,
                        id: bucketItemId
                    }]
                }
            })
        }else {
            console.log("yay!")
            const bucketItemId = await bucketItemMutation.mutateAsync({
                bucketListId: bucketList.id,
                city: city.value,
                itemPlace: place.value,
                itemFood: food.value
            })
            setBucketList(prev => {
                return {
                    ...prev,
                    item: item.push({
                        city: city.value,
                        location: place.value,
                        food: food.value,
                        id: bucketItemId
                    })
                }
            })
            console.log(bucketList.item);
        }
    }

    return (
        <dialog className="relative w-3/4 max-w-200 min-w-100 mx-auto border-black border-1 fixed top-1/7 h-3/4 px-10 py-5 text-center rounded-3xl bg-white/95 bg-white text-[#400c4c]" ref={modalRef}>
            <h1 className="text-3xl font-bold mb-4">Welcome!</h1>
            <p className="mb-4">Let's add items to your bucket list 😊</p>

            <form className="border-gray-100 border-1 bg-[#f7f1e8] rounded-xl px-4 py-2" ref={formRef} onSubmit={handleSubmit}>
                <div className="form-field flex flex-col items-center w-1/2 mx-auto my-6 min-w-50">
                    <label htmlFor="name" className="mb-4">Name of Bucket List</label>
                    <input className="border-black border-1 rounded-lg w-2/2 p-2 bg-white" id="name" type="text"/>
                </div>
                <div className="form-field flex flex-col items-center w-1/2 mx-auto my-6 min-w-50">
                    <label htmlFor="city" className="mb-4">Name of City</label>
                    <select className="border-black border-1 rounded-lg w-2/2 p-2 bg-white" id="city" name="city" ref={cityRef}>
                        <option value="Brooklyn, NY">Brooklyn, NY</option>
                        <option value="Bronx, NY">Bronx, NY</option>
                        <option value="Manhattan, NY">Manhattan, NY</option>
                        <option value="Queens, NY">Queens, NY</option>
                    </select>
                </div>
                <div className="form-field flex flex-col items-center w-1/2 mx-auto my-6">
                    <button className="form-button w-full min-w-50" type="button" onClick={getRandomFood}>Get a Random Food</button>
                    <input disabled name="food" className="border-black border-1 rounded-lg w-2/2 p-2 min-w-50 bg-white" type="text" placeholder="Your random food..." ref={randomFoodRef}/>
                </div>
                <div className="form-field flex flex-col items-center w-1/2 mx-auto my-6">
                    <button className="form-button w-full min-w-50" type="button" onClick={getRandomPlace}>Generate a random location</button>
                    <input name="place" className="border-black border-1 rounded-lg w-2/2 p-2 min-w-50 bg-white" disabled type="text" placeholder="Your random location..." ref={randomPlaceRef}/>
                </div>
                <p className="text-lg font-italic mb-4 mt-8 pb-2 px-20 pt-4 border-b-4 border-black w-fit mx-auto bg-white/50 rounded-xl">{`Eat ${randomFood || "____"} at ${randomPlace || "____"}`}</p>
                <button className="button w-1/2 min-w-50" type="submit">Add to Bucket List?</button>
            </form>

            <details className="bucket-list-preview mt-8 p-4 border-gray-100 border-1 bg-[#f7f1e8] rounded-xl">
                <summary className="text-xl text-[#ff6900] font-bold">Current Bucket List Preview</summary>
                <div className="w-3/4 border-orange-100 border-3 mx-auto my-4 py-4 px-8 bg-[#ff6900] text-white rounded-xl">
                    <h2 className="text-2xl font-bold">{bucketList.name}</h2>
                    <ul className="text-left my-4">
                        {bucketList.item.map((item) => (
                            <li key={item.id} className="text-lg pb-2 border-b-2 border-orange-100 before:content-['🌟'] mb-4">Eat {item.food} at {item.location}</li>
                        )) || <li>There are no items</li>}
                        {/* <li className="text-lg pb-2 border-b-2 border-orange-100 before:content-['🌟'] mb-4">Bucket list Item 1</li>
                        <li className="text-lg pb-2 border-b-2 border-orange-100 before:content-['🌟'] mb-4">Bucket list Item 2</li>
                        <li className="text-lg pb-2 border-b-2 border-orange-100 before:content-['🌟'] mb-4">Bucket list Item 3</li> */}
                    </ul>
                </div>
            </details>

            <button className="button" onClick={handleClose}>Close Me</button>
        </dialog>
    );
}