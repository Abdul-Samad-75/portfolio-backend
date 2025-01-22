const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
const { log } = require('console')

//dotenv config
dotenv.config()

const app=express()

//middlewares
app.use(cors())
app.use(express.json())

//routes
app.get('/', (req, res) => {
    res.send('Hello Samad!')
})
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));




//ports
const port=process.env.PORT || 8081

//listen
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
    
})
