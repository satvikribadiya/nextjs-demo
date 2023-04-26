import mongoose from 'mongoose'

module.exports = mongoose.models.coin || mongoose.model('coin', new mongoose.Schema({
    name: { type: String, required: true },
    ticker: { type: String, required: true },
    logo: { type: String, required: true },
    usdPrice: { type: Number, required: true },
    status: { type: Number, default: 0 }, // 0: active 1:deactive
    createdOn: { type: Number, required: true },
    updatedOn: { type: Number },
}))