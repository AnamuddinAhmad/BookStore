const mongoose = require ("mongoose");

const connection = async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGOOSE_URI}`);
        console.log("Connected SucessFully");
    }catch(e){
        console.log("Error is ",e);
    
    }
}

module.exports = connection;