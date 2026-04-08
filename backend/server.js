const app = require("./src/app");
const {config} = require("dotenv");
config({
    path: ".env",
})



const port = process.env.PORT;
app.listen( port , ()=>{
    console.log(`listening to port ${port}`)
})