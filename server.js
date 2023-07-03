const express = require("express");
const app = express();

const setting = {
    root: process.env.NODE_ENV === "production" ? __dirname : __dirname + "\\public\\"
};

app.use(express.static("public"));

app.get("*", (req,res)=>{
    res.sendFile("html/index.html", setting);
});

app.listen(process.env.PORT || 3000);