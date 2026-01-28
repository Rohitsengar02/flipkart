import mongoose from 'mongoose';

// Mongoose configuration for Mongoose 5.x
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const Connection = async (username, password) => {
    // MongoDB Atlas connection URL with the correct cluster
    const URL = `mongodb+srv://${username}:${password}@flipkart.sab8keb.mongodb.net/flipkart?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('✅ Database Connected Successfully to MongoDB Atlas');
    } catch (error) {
        console.log('❌ Database Connection Error:', error);
    }

};

export default Connection;