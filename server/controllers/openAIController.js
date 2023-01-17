require('dotenv').config();

const { Configuration, OpenAIApi } = require('openai');

const openAIController = {};

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

openAIController.generateText = async (req, res, next) => {
  try {
    // Call OpenAI API
    if (!req.body.promp) throw 'Missing required field "prompt" in request body';
    const { prompt } = req.body;
    console.log(prompt);

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

    console.log(response.data.choices[0].text)
    // Return response from OpenAI API
    /*res.status(200).send({
      bot: response.data.choices[0].text,
      limit: res.body.limit
    });*/
  } catch (err) {
    return next({
      log: 'Express error handler caught openAIController.generateText error',
      status: 400,
      message: { err: err }
    });
  }
  
  return next();
}

module.exports = openAIController;