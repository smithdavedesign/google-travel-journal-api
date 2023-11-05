const express = require("express");
const router = express.Router();
const axios = require("axios");
const { isAuthenticated } = require("../middlewares/isAuthenticated");
require("dotenv").config();

router.get("/list", isAuthenticated, async (req, res) => {
    // Your API key for accessing the Google Maps Places API
    const apiKey = process.env.GOOGLE_MAPS_KEY;
    // Endpoint to fetch a user's map list data
    try {
        // Make a request to the Google Maps Places API
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/place/users/me/lists/json?key=${apiKey}`
        );

        // Handle the response data, which contains the user's map lists
        res.json(response.data);
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
