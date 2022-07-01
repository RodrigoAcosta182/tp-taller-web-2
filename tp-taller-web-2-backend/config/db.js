const mongoose = require("mongoose");
const user = "taller2";
const password = "I1nlNsVCoXF3bAaZ";
const dbname = "depigarlo";
const DB_URI = `mongodb+srv://${user}:${password}@cluster0.6y2err1.mongodb.net/${dbname}?retryWrites=true&w=majority`;

module.exports = () => {
  const connect = () => {
    mongoose.connect(
      DB_URI,
      {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err) => {
        if (err) {
          console.log("DB: ERROR");
        } else {
          console.log("Conexion correcta!!");
        }
      }
    );
  };
  connect();
};
