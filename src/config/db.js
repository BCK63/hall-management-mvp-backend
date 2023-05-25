import mongoose from 'mongoose';

const dbConnection = () => {
  mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
  );
};

export default dbConnection;
