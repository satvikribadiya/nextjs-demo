import mongoose from 'mongoose'

module.exports = mongoose.models.userpackagehistory || mongoose.model('userpackagehistory', new mongoose.Schema({
    userId: { type: String, required: true },
    coinId: { type: String, required: true },
    packageId: { type: String, required: true },
    usdPrice: { type: Number, required: true },
    coinPrice: { type: Number, required: true },
    createdOn: { type: Number, required: true },
    updatedOn: { type: Number },
}))