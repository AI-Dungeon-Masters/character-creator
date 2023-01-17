const express = require('express');
const path = require('path');

const openAIController = require('../controllers/openAIController');

const router = express.Router();

router.post('/text',
  openAIController.generateText,
  (req, res, next) => {
    return next();
});
// ADD STARTER DATA REQUEST ROUTE HANDLER HERE
//router.get('/text', (req, res) => {
   // console.log('osivjasdj');
  //  const characters = res.locals.characters // already in json
   // return res.status(200).send({text:'ai says hi'});
    //res.status(200).json(characters);
    //res.send()
    
//});

// ADD GET MORE CHARACTERS ROUTE HANDLER HERE
/*router.get('/more-characters', swapiController.getMoreCharacters, characterController.populateCharacterPhotos, (req, res) => {
    return res.status(200).json({
        "moreCharacters": res.locals.moreCharacters,
    });
});*/

module.exports = router;
