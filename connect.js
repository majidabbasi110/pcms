const mongoose = require("mongoose");

const URI = 'mongodb://piainterns:MajidAbbasi@pcms-shard-00-00.zrjql.mongodb.net:27017,pcms-shard-00-01.zrjql.mongodb.net:27017,pcms-shard-00-02.zrjql.mongodb.net:27017/pia?ssl=true&replicaSet=atlas-cd4qqm-shard-0&authSource=admin&retryWrites=true&w=majority';

//db
mongoose.Promise = global.Promise;

const connectDB = async () => {
  await mongoose
    .connect(URI, {
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => console.log("DB Connected!"))
    .catch(err => {
      console.log(`DB Connection Error: ${err.message}`);
    });
};
module.exports = connectDB;