const express = require("express");
const PORT = process.env.PORT || 9000;

const app = express();

app.use("/public", express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.listen(PORT,function(err){
  if(err){console.log(`Error in running the server : ${err}`);}
 console.log(`Server is running on port : ${PORT}`); 
});