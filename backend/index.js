const env = require('dotenv').config()
const connectDB=require('./config/db')
const express=require('express')
const cookieParser=require('cookie-parser')
const cors=require('cors')
const corsOptions = require('./config/corsOptions')
const credentials  = require('./middleware/credentials')



const app=express()
connectDB()

app.use(credentials)
app.use(cors(corsOptions))

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cookieParser())



app.use('/',require('./routes/userRoutes'))
app.use('/',require('./routes/authRoutes'))
app.use('/',require('./routes/refresh'))
app.use('/',require('./routes/logoutRoute'))

const port=process.env.PORT ||6000
app.listen(port,()=>{
    console.log(`port listening on ${port}`);
})