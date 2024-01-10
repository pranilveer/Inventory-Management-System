const app = require("./index");
const mongoose = require("mongoose");

app.listen(process.env.port, () => {
  mongoose
    .connect('mongodb+srv://admin:admin123@cluster0.baaxb8k.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB Connected");
      console.log(`App listening at http://localhost:${process.env.port}`);
    })
    .catch((err) => console.log(err));

});