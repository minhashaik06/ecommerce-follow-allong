const  mongoose =  require('mongoose')
module.exports = async()=>{
    try{
        await mongoose.connect(`mongodb+srv://root:root@cluster0.4fwvc.mongodb.net/e-shop?retryWrites=true&w=majority&appName=Cluster0`)
        console.log(`mongodb connected successfully`)
    }
    catch(e)
{
    console.log(`something went wrong ${e.message}`)
    process.exit(0)
}}