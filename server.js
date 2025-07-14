const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

main()
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

app.get("/", (req, res) => {
  res.send("Hello World");
});
// app.use('/api/auth', require('./routes/auth.routes'));
// app.use('/api/content', require('./routes/content.routes'));
// app.use('/api/jobs', require('./routes/jobs.routes'));
app.use('/api/contact', require('./routes/contact.routes'));
app.use('/api/dashboard', require('./routes/dashboard.routes'));
// app.use('/api/user', require('./routes/user.routes'));
// app.use('/api/wallet', require('./routes/wallet.routes'));
// app.use('/api/markets', require('./routes/markets.routes'));
// app.use('/api/learning', require('./routes/learning.routes'));
// app.use('/api/chatbot', require('./routes/chatbot.routes'));


app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

