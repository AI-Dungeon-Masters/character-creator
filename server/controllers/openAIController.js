require('dotenv').config();

const { Configuration, OpenAIApi } = require('openai');

const openAIController = {};

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

openAIController.generateText = async (req, res, next) => {
  try {
    const { prompt } = req.body;
    // Call OpenAI API
    if (!prompt) throw 'Missing required field "prompt" in request body';

    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `
        I want you to reply to all my questions in markdown format. 
        Q: ${prompt}?.
        A: `,
      temperature: 0.5,
      max_tokens: 500,
      top_p: 0.5,
      frequency_penalty: 0.5,
      presence_penalty: 0.2,
    });

    res.locals.text = response.data.choices[0].text;
    
    return next();
  } catch (err) {
    return next({
      log: 'Express error handler caught openAIController.generateText error',
      status: 400,
      message: { err: err }
    });
  }
}

openAIController.generateImage = async (req, res, next) => {
  const { prompt } = req.body;

  console.log(prompt);

  try {
    const response = await openai.createImage({
      prompt: `${prompt}`,
      n: 1,
      size: "512x512",
    });

    res.locals.imageUrl = response.data.data[0].url;
    
    return next();
  } catch (err) {
    return next({
      log: 'Express error handler caught openAIController.generateImage error',
      status: 400,
      message: { err: err }
    });
  }
};

module.exports = openAIController;