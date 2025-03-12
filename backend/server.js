const app = require('./app')
const connectDB=require('./db/db')
require('dotenv').config()
const port = 5000
process.on('uncaughtException',(error)=>{
    console.log(`server shutthing down ${error.message}`)
    process.exit(0)
})

    
connectDB()


app.listen(port,()=>{
    console.log(`Server suceessfully listen at port http://localhost:${port}`)
})
