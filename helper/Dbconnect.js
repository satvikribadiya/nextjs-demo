const mongoose = require('mongoose');


export default async function Dbconnect() {
    await mongoose.connect(process.env.MONGO_DBURL, { useNewUrlParser: true, useUnifiedTopology: true });
}
