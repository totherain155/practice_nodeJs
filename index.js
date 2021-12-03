const express = require("express"); // express module을 가져온다.
const app = express(); // 새로운 express app을 만든다.
const port = 5000;

mongodb+srv://totherain:<password>@practicedb.egfhu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

app.get("/", (req, res) => res.send("Hi!!"));

// 5000 port에서 app을 실행한다.
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
