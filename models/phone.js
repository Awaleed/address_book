var mongoose = require('mongoose')

var phoneSchema = mongoose.Schema(
    {
        number: { type: Number, unique: true, required: true, dropDups: true },
    }
)

module.exports = mongoose.model('Phone', phoneSchema)