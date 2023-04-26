const mongoose = require('mongoose');


export default async function MLMDbconnect() {
    await mongoose.connect(process.env.MONGO_DB_MLM_URL, { useNewUrlParser: true, useUnifiedTopology: true });
}
