const express = require('express');
const app = express();
const port = 3001;
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser');
dotenv.config()

app.use(express.json())
app.use(bodyParser());

app.use(cors({
    origin: 'http://localhost:3000',
    
}))

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function chat_openai(question) {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: question,
        temperature: 0,
        max_tokens: 1000,
    });
    return response.data.choices[0].text;
      
}

async function generate_img (desc){
    const response = await openai.createImage({
        prompt: desc,
        n: 1,
        size: "1024x1024",
      });
    return response.data.data[0].url;
}


app.get('/',(req, res)=>{
    res.send('hello world')
})



app.post('/chatgpt', (req, res) => {
    const temp = req.body.question

    chat_openai(temp).then((response) => {
        res.send(response);
        // console.log(response);
    })


    
});



app.post('/dalle', (req, res) => {
    const temp = req.body.question
    console.log(temp);
    generate_img(temp).then((response) => {
        res.send(response);
        // console.log(response);
    })



});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

