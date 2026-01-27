import mongoose from 'mongoose';

const Connection = async (username, password) => {
    // MongoDB Atlas connection URL with the correct cluster
    const URL = `mongodb+srv://${username}:${password}@flipkart.1qxcmzi.mongodb.net/flipkart?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('✅ Database Connected Successfully to MongoDB Atlas');
    } catch (error) {
        console.log('❌ Database Connection Error:', error.message);
    }

};

export default Connection;