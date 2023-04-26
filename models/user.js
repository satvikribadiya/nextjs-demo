import mongoose from 'mongoose'

module.exports = mongoose.models.user || mongoose.model('user', new mongoose.Schema({
    firstName: { type: String, required: true },    
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    maritalStatus: { type: String, required: true },
    hobby: { type: Array },
    createdOn: { type: Number, required: true },
    updatedOn: { type: Number },
}))