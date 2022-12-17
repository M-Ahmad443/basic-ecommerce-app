const mongoose=require('mongoose')
const connectDB= async()=>{
    await mongoose.connect('mongodb://localhost:27017/store',()=>{
        console.log('db connect')
    })

}

module.exports=connectDB