// // import express, { json } from 'express';
// // import axios from 'axios';
// // import cors from 'cors';
// // import { Configuration, OpenAIApi } from 'openai';

// const express = require('express');
// const axios = require('axios');
// const json = require('body-parser').json;
// // const cors = require('cors');
// const { Configuration, OpenAIApi } = require('openai');
// // const bodyParser = require('body-parser');
// const app = express();
// const port = 3001;
// // app.use(cors());
// app.use(json({ extended: true }));
// // app.use(bodyParser);
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
// //api key definition
// const apiKey = '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';
// //configuration
// const config = new Configuration({
//     apiKey: apiKey
// });
// const openai = new OpenAIApi(config);
// app.use(json());

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.get('/api/generateLinks', (req, res) => {
//     res.send('Hello api!')
// })

// app.post('/', (req, res) => {
//     res.send('Hello BACKEND!')
// });
// app.post('/api/generateLinks', async(req, res) => {
//     if (!apiKey) {
//         throw new Error('OpenAI API key not found');
//     }
//     const prompt = req.body.prompt;
//     const textprompt = `give me youtube links for ${prompt}`;
//     const response = await openai.createChatCompletion({
//         // const prompt = `give me youtube links for ${links}`;

//         // const modelId = 'text-davinci-003';
//         // const temperature = 0.7;
//         // const maxTokens = 500;

//         // const n = 5;
//         model: 'text-davinci-003',
//         prompt: textprompt,
//         temperature: 0.7,
//         max_tokens: 500,
//         n: 5,
//         stop: ['\n'],
//     });
//     const headers = {
//         'Content-Type': 'application/json',
//         // 'Authorization': `Bearer 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`
//     };

//     // const data = {
//     //     'model': modelId,
//     //     'prompt': textprompt,
//     //     'temperature': temperature,
//     //     'max_tokens': maxTokens,
//     //     n: 5,
//     //     stop: ['\n'],
//     // };

//     try {
//         // const response = await axios.post('https://api.openai.com/v1/completions', data, { headers });
//         // const response = await openai.complete(data);
//         // const response = await axios.post('http://localhost:3001/api/generateLinks', data, { headers });
//         // const response = await axios.post('https://api.openai.com/v1/engines/davinci-003/completions', data, { headers });
//         // const response = await openai.createCompletion()
//         // res.send(response.data.choices[0].text);
//         const links = extractLinks(response.data.choices[0].text);
//         res.send(links);
//         res.json({ links });
//         console.log(links);
//         console.log(apiKey);
//         res.status(200);
//         res.setHeader('Access-Control-Allow-Origin', '*');
//         res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
//         res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'An error occurred while generating the links' });
//     }
// });

// function extractLinks(text) {
//     const regex = /(https?:\/\/(www\.)?youtube\.com\/watch\?v=[a-zA-Z0-9_-]{11})/g;
//     const matches = text.match(regex);
//     if (matches) {
//         return matches;
//     } else {
//         return [];
//     }
// }

// app.listen(port, () => {
//     console.log(`Server listening at http://localhost:${port}`);
//     console.log(`OpenAI API key: ${apiKey}`);
// });



// import express from 'express'
// import * as dotenv from 'dotenv'
// import cors from 'cors'
// import { Configuration, OpenAIApi } from 'openai'


// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const bodyParser = require("body-parser");
// const { Configuration, OpenAIApi } = require('openai');
// dotenv.config()

// console.log(process.env.OPENAI_API_KEY);
// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

// const app = express()
// app.use(cors())
// app.use(express.json())
// app.use(bodyParser.json());

// app.get('/api/generateLinks', async(req, res) => {
//         res.status(200).send({
//             message: 'Hello from CodeX!'
//         })
//     })
//     //changed frOM / TO /api/generateLinks
// app.post('/api/generateLinks', async(req, res) => {
//     try {
//         const prompt = req.body.prompt;

//         const response = await openai.createCompletion({
//             model: "text-davinci-003",
//             prompt: `${prompt}`,
//             temperature: 0, // Higher values means the model will take more risks.
//             max_tokens: 3000, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
//             top_p: 1, // alternative to sampling with temperature, called nucleus sampling
//             frequency_penalty: 0.5, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
//             presence_penalty: 0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
//             n: 5, // The number of results to return. The default is 1.
//             stop: ['\n'] // A list of tokens that the API will not return. The default is to not return any tokens.
//         });

//         const youtubeLinks = response.data.choices[0].text.trim();

//         res.json({ youtubeLinks });

//     } catch (error) {
//         console.error(error)
//         res.status(500).send(error || 'Something went wrong');
//     }
// })
// const PORT = 3001;
// app.listen(3001, () => console.log(`AI server started on port ${PORT}`));




// const express = require("express");
// require('dotenv').config();
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const { openai, Configuration } = require('openai'); // import openai
// // Set up the server ////////////

// const app = express();
// app.use(bodyParser.json());
// app.use(cors())
//   const  prompt  = req.body.prompt;
// // Set up OpenAI endpoint
// const openaiPrompt = (query) => {
//     return `Generate 20 YouTube video links related to academics and career based on the input "${prompt}"`;
// }
// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const generateYouTubeLinks = async(query) => {
//     const openaiResponse = await openai.createCompletion({
//         model: 'text-davinci-003',
//         prompt: openaiPrompt,
//         maxTokens: 2048,
//         n: 1,
//         stop: '\n',
//         temperature: 0.5,
//     });

//     // return openaiResponse.choices[0].text.trim().split('\n');
//     const youtubeLinks = openaiResponse.choices[0].text.trim().split('\n');

//     // Send the links as a response to the client
//     return { youtubeLinks };
// }

// app.post("/api/generateLinks", async(req, res) => {
//     const  prompt  = req.body.prompt;
//     const generateYouTubeLinks = async(query) => {
//         const openaiResponse = await openai.createCompletion({
//             model: 'text-davinci-003',
//             prompt: openaiPrompt,
//             maxTokens: 2048,
//             n: 1,
//             stop: '\n',
//             temperature: 0.5,
//         });
//     try {
//         const links = await generateYouTubeLinks(openaiPrompt);
//         const response = links.map((link) => `<a href="${link}">${link}</a>`).join('<br>');
//         res.send(response);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send("Error generating links");
//     }
// });

// // Start the server ////////////////////

// const port = 3001;
// app.listen(port, () => {
//     console.log(`Server listening on port ${port}`);
//     console.log(`http://localhost:${port}`);
// });






// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');
// const { Configuration, OpenAIApi } = require('openai');
// const app = express();
// const port = 3001;

// app.use(cors());
// app.use(express.json());

// //api key definition
// const apiKey = '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';

// //configuration
// const config = new Configuration({
//     apiKey: apiKey
// });

// const openai = new OpenAIApi(config);

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.get('/api/generateLinks', (req, res) => {
//     res.send('Hello api!')
// })

// app.post('/api/generateLinks', async (req, res) => {
//     if (!apiKey) {
//         throw new Error('OpenAI API key not found');
//     }
//     const prompt = req.body.prompt;
//     const openaiPrompt = `give me youtube links for ${prompt}`;
//     const response = await openai.createCompletion({
//         model: 'text-davinci-002',
//         prompt: openaiPrompt,
//         temperature: 0.7,
//         maxTokens: 500,
//         n: 5,
//         stop: ['\n'],
//     });

//     const headers = {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${apiKey}`
//     };

//     try {
//         const response1 = await axios.post('/api/generateLinks', response.data, { headers });
//         const links = extractLinks(response1.data.choices[0].text);
//         res.json({ links });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'An error occurred while generating the links' });
//     }
// });

// function extractLinks(text) {
//     const regex = /(https?:\/\/(www\.)?youtube\.com\/watch\?v=[a-zA-Z0-9_-]{11})/g;
//     const matches = text.match(regex);
//     if (matches) {
//         return matches;
//     } else {
//         return [];
//     }
// }

// app.listen(port, () => {
//     console.log(`Server listening at http://localhost:${port}`);
//     console.log(`OpenAI API key: ${apiKey}`);
// });




// const express = require("express");
// require('dotenv').config();
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const { Configuration, OpenAIApi } = require("openai");

// // Set up the server ////////////

// const app = express();
// app.use(bodyParser.json());
// app.use(cors())

// // Set up OpenAI endpoint

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// // CHATBOT_KEY is key name in .env file. .env file should be in project root directory - format is below
// // CHATBOT_KEY="YOR-API-KEY"

// const openai = new OpenAIApi(configuration);


// app.get('/api/generateLinks', async(req, res) => {
//         res.status(200).send({
//             message: 'Hello from CodeX!'
//         })
//     })
// app.post("/api/generateLinks", async (req, res) => {
//   const  prompt  = req.body.prompt;
// //   const openaiPrompt = (query) => {
// //     return `Generate 20 YouTube video links related to academics and career based on the input "${prompt}"`;
// //     }
//   const completion = await openai.createCompletion({
//     model: "text-davinci-003", 
//     prompt: {prompt},
//     max_tokens: 500,
//     n:20,
//     stop: ["\n"],
//   });
//   res.send(completion.data.choices[0].text);
// });
// // 'prompt' is coming from axios post - from react js state - its input field value or query or question 

// // Start the server ////////////////////

// const port = 3001;
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
//   console.log(`http://localhost:${port}`);
// });



//-------------------------WORKS WELL------------------------------
// const express = require("express");
// require('dotenv').config();
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const { Configuration, OpenAIApi } = require("openai");

// // Set up the server ////////////

// const app = express();
// app.use(bodyParser.json());
// app.use(cors())
// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
//     });
// // Set up OpenAI endpoint

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// // CHATBOT_KEY is key name in .env file. .env file should be in project root directory - format is below
// // CHATBOT_KEY="YOR-API-KEY"

// const openai = new OpenAIApi(configuration);
// app.post("/api/generateLinks", async (req, res) => {
//   const inputprompt=(topic)=>{
//     prompt = `Give me all the available Youtube links that are related to academics and career based on the input: ${topic}. Additonally assign a the title of the youtube video before the link. Make sure to add a new line after each link and number each link starting from 1. Make sure that those videos are actually related to the input and available on youtube. Dont show up any links that are not available on youtube.`;
//     return prompt;
//   }
// //   const  prompt  = "Give me youtube links that re related to academics and career based on the input";
//   const completion = await openai.createCompletion({
//     model: "text-davinci-003", 
//     prompt: inputprompt(req.body.prompt),
//     max_tokens: 500,
//   },


//   );
// //   const headers = {
// //             'Content-Type': 'application/json',
// //             'Authorization': `Bearer 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`
// //         };
  

//   res.send(completion.data.choices[0].text);
// });
// // 'prompt' is coming from axios post - from react js state - its input field value or query or question 

// // Start the server ////////////////////

// const port = 3001;
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
//   console.log(`http://localhost:${port}`);
// });



const express = require('express');
const axios = require('axios');
const { google } = require('googleapis');
require('dotenv').config();
const cors = require('cors');
const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());
app.use(function (req, res, next) {
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

app.post('/api/generateLinks', async (req, res) => {
  const prompt = req.body.prompt;

  try {
    const { data } = await youtube.search.list({
      part: 'snippet',
      q: prompt,
      type: 'video',
      maxResults: 10,
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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


