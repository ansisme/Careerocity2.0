const express = require('express');
const axios = require('axios');
const { google } = require('googleapis');
require('dotenv').config();
const cors = require('cors');
const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const youtube = google.youtube({
    version: 'v3',
    auth: process.env.YOUTUBE_API_KEY,
});

app.get("/", (req, res) => {
    res.send("hi")
});

//Youtube Data API fetching POST REQUEST
app.post('/api/generateLinks', async(req, res) => {
    const prompt = req.body.prompt;

    try {
        const { data } = await youtube.search.list({
            part: 'snippet',
            q: prompt,
            type: 'video',
            maxResults: 20,
            videoDefinition: 'high',
            key: process.env.YOUTUBE_API_KEY,
        });
        const videoIds = data.items.map((item) => ({
            videoId: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.medium.url,
        }));
        res.send(videoIds);
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred while fetching the video links.');
    }
});




//Github fetching POST REQUEST


app.post("/api/generateGithubLinks", async(req, res) => {
    try {
        const searchQuery = req.body.prompt;
        const response = await axios.get(
            `https://api.github.com/search/repositories?q=${searchQuery}`
        );
        const links = response.data.items.map((item) => item.html_url);
        res.json(links);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error generating Github links");
    }
});


//flask API
// app.post('/predict', async(req, res) => {
//     const prompt = req.body.prompt;

//     try {
//         const response = await axios.post('http://localhost:5675/predict', {
//             prompt
//         });

//         const result = response.data;
//         res.json(result);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('An error occurred while fetching the prediction.');
//     }
// });


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});