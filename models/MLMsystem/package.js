import mongoose from 'mongoose'

module.exports = mongoose.models.package || mongoose.model('package', new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true }, // USD price
    status: { type: Number, default: 0 }, // 0: active 1:deactive
    createdOn: { type: Number, required: true },
    updatedOn: { type: Number },
}))