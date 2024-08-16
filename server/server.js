const express = require('express')
const cors = require('cors')
const  dotenv = require('dotenv')
const path = require('path')

const mailRoutes = require('./routes/mailRoutes');

// env config
dotenv.config()

// reset object 
const app = express()

// midleware 
app.use(cors())
app.use(express.json())

// static file access
app.use(express.static(path.join(__dirname, './client/build')))

// routes 
app.use("/api/v1/mail", require('./routes/mailRoutes'));

// port 
const PORT = process.env.PORT || 8080

// listen
app.listen(PORT, () => {
  console.log(`Server Running on PORT, ${PORT}`);
})
