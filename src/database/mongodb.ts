import mongoose from 'mongoose';

export class MongodbConnect {

  public async connect() {
    mongoose.set("strictQuery", true);

    mongoose.connect(
      `${process.env.MONGO_HOST}`
    );
  }
}