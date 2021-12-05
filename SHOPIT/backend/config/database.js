const  Mongoose  = require("mongoose");


const connectdatabse = () => {
   Mongoose.connect(process.env.DB_LOCAL_URI,{ 
   useNewUrlparser: true,
   useUnifiedTopology: true
}).then(con =>{
    console.log(`MongoDB database connected with HOST :${con.connection.host} `)
})
}

module.exports = connectdatabse