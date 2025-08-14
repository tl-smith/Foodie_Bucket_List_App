import express from "express";
import prisma from "../db/index.js";

const router = express.Router();

// Add the routes here

router.get('/', async (req, res) => {
    // Gets all the bucketLists from the database
    const bucketLists = await prisma.bucketList.findMany({
        include: {
            item: true
        }
    });
    // Responds back to the client with json with a success status and the bucketLists array
    res.status(200).json({
        success: true,
        bucketLists,
    });
});

router.post('/', async (req, res) => {
    // res.send("POST /bucket-lists In progress");
     // Destructure `location` and `image` from the request body
    const { location, image} = req.body;
    try {
        // Use Prisma to create a new todo entry in the database
        const newBucketList = await prisma.bucketList.create({
            data: {
                location,               // Set the location that the bucket list will be set
                image: image || "",        // Set the `image` to the image url or "" if null
                item: [],   // Default value for `item` is set to []
                // WILL ADD LATER userId: req.user.sub, // Assign the user ID
            },
        });
        
        // Check if the new bucketList was created successfully
        if (newBucketList) {
            // Respond with a success status and include the ID of the newly created todo
            res.status(201).json({
                success: true,
                bucketList: newBucketList.id,
            });
        } else {
            // Respond with a failure status if todo creation failed
            res.status(500).json({
                success: false,
                message: "Failed to create new bucketList",
            });
        }
    } catch (e) {
        // Log the error for debugging purposes
        console.log(e);
        // Respond with a generic error message if something goes wrong
        res.status(500).json({
            success: false,
            message: "Something went wrong, please try again later",
        });
    }
});

router.get('/:bucketListId', async (req, res) => {
    res.send("GET /bucket-lists/:bucketListId In progress");
});

router.put('/:bucketListId', async (req, res) => {
    res.send("PUT /bucket-lists/:bucketListId In progress");
});

router.delete('/:bucketListId', async (req, res) => {
    res.send("DELETE /bucket-lists/:bucketListId In progress");
});

export default router;