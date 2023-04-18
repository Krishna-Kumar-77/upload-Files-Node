const mongoose = require('mongoose')

const dbConnect = async() => {
    
    try {
       

        const conn = await mongoose.connect(process.env.MONGO_URI, {
            // useCreateIndex: true,
            // useFindAndModify: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: true,
        });
       console.log(`MongoDB Connected: ${conn.connection.host}`);
   } catch (error) {
       console.log(error);
       process.exit(1);
   }
}

module.exports = dbConnect; 