const express = require("express"); // express module을 가져온다.
const app = express(); // 새로운 express app을 만든다.
const port = 5000;

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://totherain:abcd1234@practicedb.egfhu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  ) // 잘 연결이 되었으면 다음과 같은 메시지를 띄워준다.
  .then(() => console.log("MongoDB Connected..."))
  .catch(console.log); // catch(err => console.log(err))

app.get("/", (req, res) => res.send("Hi!!"));

// 5000 port에서 app을 실행한다.
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
