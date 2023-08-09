import mongoose from 'mongoose';

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);

  console.group('\u001b[1;32m > Mongo Connected');
  console.info(`\t * Mongo connected at ${conn.connection.host}`);
  console.groupEnd();
};

mongoose.set('strictQuery', true);

export default connectDB;
