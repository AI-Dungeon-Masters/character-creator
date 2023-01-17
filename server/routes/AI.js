const express = require('express');
const path = require('path');

const openAIController = require('../controllers/openAIController');

const router = express.Router();

router.post('/text',
  openAIController.generateText,
  (req, res) => res.status(200).json(res.locals.text));

router.post('/image',
  openAIController.generateImage,
  (req, res) => res.status(200).json(res.locals.imageUrl));

module.exports = router;
