const router = require('express').Router();
let Pokedex = require('../models/pokedex.model');

//get all pokemon
router.route('/').get((req, res) =>{
    Pokedex.find()
        .sort("pokedex_number")
        .sort("total_points")
        .sort("name")
        .then(pokedex => res.json(pokedex))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/name/:name').get((req, res) => {
    Pokedex.find({name: req.params.name})
        .then(pokemon => res.json(pokemon))
        .catch(err => res.status(400).json('Error: ' + err));
});

//get specific pokemon based on id

router.route('/num/:id').get((req, res) => {
    Pokedex.find({pokedex_number: req.params.id})
        .then(pokemon => res.json(pokemon))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;