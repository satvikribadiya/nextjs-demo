import mongoose from 'mongoose'

module.exports = mongoose.models.wallet || mongoose.model('wallet', new mongoose.Schema({
    userId: { type: String, required: true },
    coinId: { type: String, required: true },
    balance: { type: Number, required: true },
    createdOn: { type: Number, required: true },
    updatedOn: { type: Number },
}))