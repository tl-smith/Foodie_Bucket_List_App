import express from "express";
import prisma from "../db/index.js";

const router = express.Router();

// Add the routes here

// Get all the user's bucket lists
router.get('/', async (req, res) => {
    // Get all the bucketLists and their items from the database
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

// Create a new bucket list
router.post('/', async (req, res) => {
     // Destructure `location` and `image` from the request body
    const { location, image} = req.body;
    try {
        // Use Prisma to create a new bucketList entry in the database
        const newBucketList = await prisma.bucketList.create({
            data: {
                location,               // Set the location that the bucket list will be set
                image: image || "",        // Set the `image` to the image url or "" if null
                // FOR TESTING PURPOSES
                userId: req.body.userId
                // WILL ADD LATER userId: req.user.sub, // Assign the user ID
            },
        });
        
        // Check if the new bucketList was created successfully
        if (newBucketList) {
            // Respond with a success status and include the ID of the newly created bucketList
            res.status(201).json({
                success: true,
                bucketList: newBucketList.id,
            });
        } else {
            // Respond with a failure status if bucketList creation failed
            res.status(500).json({
                success: false,
                message: "Failed to create new bucketList",
            });
        }
    } catch (error) {
        // Log the error for debugging purposes
        console.log(error);
        // Respond with a generic error message if something goes wrong
        res.status(500).json({
            success: false,
            message: "Something went wrong, please try again later",
        });
    }
});

// Get a specific bucket list with id equal to bucketListId
router.get('/:bucketListId', async (req, res) => {
    const bucketListId = Number(req.params.bucketListId);

    try {
        // Gets bucketList with id equal to bucketListId
        const bucketList = await prisma.bucketList.findUnique({
            where: {
                id: bucketListId
            },
            include: {
                item: true
            }
        });
        // Responds back to the client with json with a success status and the specific bucketList
        if (bucketList){
            res.status(200).json({
                success: true,
                bucketList,
            });
        } else{
            res.status(404).json({
                success: false,
                message: `Bucket list with id of ${bucketListId} does not exist.`
            });
        }
    } catch (error) {
        // Handle any errors that occur during the update
        res.status(500).json({
            success: false,
            message: "Something went wrong, please try again later",
        });
    }
});

// Mark a bucket list with id equal to bucketListId as completed
router.put('/:bucketListId/completed', async (req, res) => {
    // Extract the `bucketListId` from the route parameter and convert it to a number
    const bucketListId = Number(req.params.bucketListId);

    try {
        // Use Prisma to update the bucketList with the specified ID
        const bucketList = await prisma.bucketList.update({
            where: {
                id: bucketListId,        // Match the bucketList based on its unique ID
            },
            data: {
                completed: true,  // Update the `completed` field to `true`
            },
        });

        // Respond with a success status and include the updated bucketList's ID
        res.status(200).json({
            success: true,
            bucketList: bucketList.id,
        });
    } catch (error) {
        // Handle any errors that occur during the update
        res.status(500).json({
            success: false,
            message: "Something went wrong, please try again later",
        });
    }
});

// Mark a bucket list wth id equal to bucketListId as not completed
router.put('/:bucketListId/not-completed', async (req, res) => {
    // Extract the `bucketListId` from the route parameter and convert it to a number
    const bucketListId = Number(req.params.bucketListId);

    try {
        // Use Prisma to update the bucketList with the specified ID
        const bucketList = await prisma.bucketList.update({
            where: {
                id: bucketListId,        // Match the bucketList based on its unique ID
            },
            data: {
                completed: false,  // Update the `completed` field to `true`
            },
        });

        // Respond with a success status and include the updated bucketList's ID
        res.status(200).json({
            success: true,
            bucketList: bucketList.id,
        });
    } catch (error) {
        // Handle any errors that occur during the update
        res.status(500).json({
            success: false,
            message: "Something went wrong, please try again later",
        });
    }
});

// Delete a bucket list with an id equal to bucketListId
router.delete('/:bucketListId', async (req, res) => {
    // Extract the `bucketListId` from the route parameter and convert it to a number
    const bucketListId = Number(req.params.bucketListId);

    try {
        // Use Prisma to delete the bucketList with the specified ID
        await prisma.bucketList.delete({
            where: {
            id: bucketListId, // Match the bucketList based on its unique ID
            completed: true //Make sure the bucketList is completed
            },
        });

        // Respond with a success status and confirmation of the deletion
        res.status(200).json({
            success: true,
            bucketList: bucketListId, // Return the deleted bucketList's ID for reference
        });
    } catch (error) {
        // Handle any errors that occur during the deletion process
        res.status(500).json({
            success: false,
            message: "Something went wrong, please try again later",
        });
    }
});

// Get the list of items in the bucket list with id equal to bucketListId
router.get('/:bucketListId/items', async (req, res) => {
    const bucketListId = Number(req.params.bucketListId);

    try {
        // Gets bucketList item for bucketList with id equal to bucketListId
        const bucketList = await prisma.bucketList.findUnique({
            where: {
                id: bucketListId
            },
            include: {
                item: true,
                location: false,
                image: false,
                completed: false,
            }
        });
        // Responds back to the client with json with a success status and the specific bucketList
        if (bucketList){
            res.status(200).json({
                success: true,
                bucketListId: bucketList.id,
                items: bucketList.item
            });
        } else{
            res.status(404).json({
                success: false,
                message: `Bucket list with id of ${bucketListId} does not exist.`
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong, please try again later",
        });
    }
});


// Used this documentation: https://www.prisma.io/docs/orm/prisma-client/queries/relation-queries#add-new-related-records-to-an-existing-record

// Add an item to the bucket list with id equal to bucketListId
router.post('/:bucketListId/items', async (req, res) => {

    const bucketListId = Number(req.params.bucketListId);
    // Destructure `city`, `location` and `food` from the request body
    const { city, location, food} = req.body;
    try {
        // Use Prisma to create the bucketList with id equal to bucketListId
        const bucketList = await prisma.bucketList.findUnique({
            where : {
                id: bucketListId
            },
        });

        // Create new bucketListItem for specific bucketList
        const newBucketListItem = await prisma.bucketListItem.create({
            data: {
                city,
                location,
                food,
                completed: false,
                bucketId: bucketListId,
                userId: bucketList.userId
            }
        });
        
        // Check if the new bucketList item was created successfully
        if (newBucketListItem) {
            // Respond with a success status and include the ID of the newly created item
            res.status(201).json({
                success: true,
                bucketListItem: newBucketListItem.id,
            });
        } else {
            // Respond with a failure status if todo creation failed
            res.status(500).json({
                success: false,
                message: "Failed to create new bucketList item",
            });
        }
    } catch (error) {
        // Log the error for debugging purposes
        console.log(error);
        // Respond with a generic error message if something goes wrong
        res.status(500).json({
            success: false,
            message: "Something went wrong, please try again later",
        });
    }
});

// Mark item with id equal to itemId of a specific bucket list as completed
router.put('/:bucketListId/items/:itemId/completed', async (req, res) => {
    const bucketListId = Number(req.params.bucketListId);
    const itemId = Number(req.params.itemId);
    try {
        // Update the bucketListItem to be marked as completed
        const bucketList = await prisma.bucketList.update({
            where: {
                id: bucketListId
            },
            data: {
                item: {
                    update: {
                        where: {
                            id: itemId
                        },
                        data: {
                            completed: true,
                        }
                    },
                }
            },
            include: {
                item: true
            }
        });

        // Check if the bucketList was updated successfully
        if (bucketList) {
            // Respond with a success status and include the ID of the newly created bucketListItem
            res.status(200).json({
                success: true,
                bucketListItem: itemId,
            });
        } else {
            // Respond with a failure status if todo creation failed
            res.status(500).json({
                success: false,
                message: "Failed to update bucketList item",
            });
        }
    } catch (error) {
        // Log the error for debugging purposes
        console.log(error);
        // Respond with a generic error message if something goes wrong
        res.status(500).json({
            success: false,
            message: "Something went wrong, please try again later",
        });
    }
});

// Mark item with id equal to itemId of a specific bucket list as not completed
router.put('/:bucketListId/items/:itemId/not-completed', async (req, res) => {
    const bucketListId = Number(req.params.bucketListId);
    const itemId = Number(req.params.itemId);
    try {
        // Update the bucketListItem to be marked as not completed
        const bucketList = await prisma.bucketList.update({
            where: {
                id: bucketListId
            },
            data: {
                item: {
                    update: {
                        where: {
                            id: itemId
                        },
                        data: {
                            completed: false,
                        }
                    },
                }
            },
            include: {
                item: true
            }
        });

        // Check if the bucketList was updated successfully
        if (bucketList) {
            // Respond with a success status and include the ID of the updated bucketListItem
            res.status(200).json({
                success: true,
                bucketListItem: itemId,
            });
        } else {
            // Respond with a failure status if bucketList updating failed
            res.status(500).json({
                success: false,
                message: "Failed to update bucketList item",
            });
        }
    } catch (error) {
        // Log the error for debugging purposes
        console.log(error);
        // Respond with a generic error message if something goes wrong
        res.status(500).json({
            success: false,
            message: "Something went wrong, please try again later",
        });
    }
});
});

export default router;