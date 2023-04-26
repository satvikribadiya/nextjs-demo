import mongoose from 'mongoose'

module.exports = mongoose.models.admincred || mongoose.model('admincred', new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    twofa: { type: String, required: true },
    createdOn: { type: Number, required: true },
    updatedOn: { type: Number },
}))