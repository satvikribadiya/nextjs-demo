import mongoose from 'mongoose'

module.exports = mongoose.models.user || mongoose.model('user', new mongoose.Schema({
    _id: { type: Object, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    status: { type: Number, default: 0 },// 0: active 1:deactive
    referralCode: { type: String, required: true },
    sponserId: { type: String, default:""},
    createdOn: { type: Number, required: true },
    updatedOn: { type: Number },
}))