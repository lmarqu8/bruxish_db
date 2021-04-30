const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teamSchema = new Schema({
    username: {type: String, required: true},
    pokemon1: {
        type: String,
        required: true,
        trim: true,
        minlength: 3},
    pokemon2: {
        type: String,
        required: true,
        trim: true,
        minlength: 3},
    pokemon3: {
        type: String,
        required: true,
        trim: true,
        minlength: 3},
    pokemon4: {
        type: String,
        required: true,
        trim: true,
        minlength: 3},
    pokemon5: {
        type: String,
        required: true,
        trim: true,
        minlength: 3},
    pokemon6: {
        type: String,
        required: true,
        trim: true,
        minlength: 3}
}, {
    timestamps: true,
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;