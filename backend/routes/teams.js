const router = require('express').Router();
let Team = require('../models/team.model');

router.route('/').get((req, res) => {
    Team.find()
        .then(teams => res.json(teams))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const pokemon1 = req.body.pokemon1;
    const pokemon2 = req.body.pokemon2;
    const pokemon3 = req.body.pokemon3;
    const pokemon4 = req.body.pokemon4;
    const pokemon5 = req.body.pokemon5;
    const pokemon6 = req.body.pokemon6;

    const newTeam = new Team({
        username,
        pokemon1,
        pokemon2,
        pokemon3,
        pokemon4,
        pokemon5,
        pokemon6
    });

    newTeam.save()
        .then(() => res.json('Team added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//get team
router.route('/:id').get((req,res) => {
    Team.findById(req.params.id)
        .then(team => res.json(team))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete team
router.route('/:id').delete((req, res) => {
    Team.findByIdAndDelete(req.params.id)
        .then(() =>res.json('Team deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//update
router.route('/update/:id').post((req,res) => {
    Team.findById(req.params.id)
        .then(team => {
            team.username = req.body.username;
            team.pokemon1 = req.body.pokemon1;
            team.pokemon2 = req.body.pokemon2;
            team.pokemon3 = req.body.pokemon3;
            team.pokemon4 = req.body.pokemon4;
            team.pokemon5 = req.body.pokemon5;
            team.pokemon6 = req.body.pokemon6;

            team.save()
                .then(() => res.json('Team updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;