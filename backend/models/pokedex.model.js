const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dexSchema = new Schema({
    pokedex_number: {type: Number, required: true},
    name: {type: String, required: true},
    german_name: {type: String, required: true},
    japanese_name: {type: String, required: true},
    generation: {type: Number, required: true},
    status: {type: String, required: true},
    species: {type: String, required: true},
    type_number: {type: Number, required: true},
    type_1: {type: String, required: true},
    type_2: {type: String},
    height_m: {type: Number, required: true},
    weight_kg: {type: Number, required: true},
    abilities_number: {type: Number, required: true},
    ability_1: {type: String, required: true},
    ability_2: {type: String},
    ability_hidden: {type: String},
    total_points: {type: Number, required: true},
    hp: {type: Number, required: true},
    attack: {type: Number, required: true},
    defense: {type: Number, required: true},
    sp_attack: {type: Number, required: true},
    sp_defense: {type: Number, required: true},
    speed: {type: Number, required: true},
    catch_rate: {type: Number, required: true},
    base_friendship: {type: Number, required: true},
    base_experience: {type: Number, required: true},
    growth_rate: {type: String, required: true},
    egg_type_number: {type: Number, required: true},
    egg_type_1: {type: String, required: true},
    egg_type_2: {type: Number},
    percentage_male: {type: Number},
    egg_cycles: {type: Number, required: true},
    against_normal: {type: Number, required: true},
    against_fire: {type: Number, required: true},
    against_water: {type: Number, required: true},
    against_electric: {type: Number, required: true},
    against_grass: {type: Number, required: true},
    against_ice: {type: Number, required: true},
    against_fight: {type: Number, required: true},
    against_poison: {type: Number, required: true},
    against_ground: {type: Number, required: true},
    against_flying: {type: Number, required: true},
    against_psychic: {type: Number, required: true},
    against_bug: {type: Number, required: true},
    against_rock: {type: Number, required: true},
    against_ghost: {type: Number, required: true},
    against_dragon: {type: Number, required: true},
    against_dark: {type: Number, required: true},
    against_steel: {type: Number, required: true},
    against_fairy: {type: Number, required: true},
},
{
    collection: 'Pokedex'
});

const Pokedex = mongoose.model('Pokedex', dexSchema);

module.exports = Pokedex;