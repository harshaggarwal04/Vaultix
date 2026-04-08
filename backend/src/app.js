const express = require("express");
const NotFoundError = require("./middlewares/404Handling");
const ApiError = require("./utils/ApiError");

const app = express();

app.use("/api/v1", require("./route"));

app.get("/", (req,res)=>{
    res.send("root");
})




app.use(/.*/, (req,res, next)=>{
    next(new ApiError(404, "Page not found"))
})

app.use(NotFoundError);


 
module.exports = app;