const mongoose = require('mongoose');

const dbURL = 'mongodb+srv://Admin:otZqiHRgjyMr0DxN@cluster0.6j8wc.mongodb.net/budgetTracker?retryWrites=true&w=majority'

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(dbURL, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
    } catch (err) {
        console.log(`Error: ${err.message}`.red);
        process.exit(1);
    }
}

module.exports = connectDB;