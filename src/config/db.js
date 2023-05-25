import mongoose from 'mongoose';

const dbConnection = async () => {
  mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
  );
};

export default dbConnection;
