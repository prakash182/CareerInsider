import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    descriptions : {
        type : String,
    },
    website : {
        type : String,
    },
    location : {
        type : String,
    },
    logo : {
        type : String,
    },
    userId : {
        type : String,
        ref : 'User',
        required : true
    },
}, {timestamps : true});

export comapany = mongoose.model('Company', companySchema);