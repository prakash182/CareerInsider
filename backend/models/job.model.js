import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema ({
    title : {
        type : String,
        required : true
    },
     descriptions : {
        type : String,
        required : true
    },
     requirements : [{
        type : String,
    }],
     salary : {
        type : number,
        required : true
    },
     location : {
        type : String,
        required : true
    },
     jobType : {
        type : String,
        required : true
    },
     position : {
        type : Number,
        required : true
    },
    company : {
        type : mongoose.Schema.Types.objectId,
        ref : 'Company',
        required : true
    },
    created_by : {
        type : mongoose.Schema.Types.objectId,
        ref : 'User'
    },
    applications: [{
        type : mongoose.Schema.Types.objectId,
        ref : 'Application',       
    }]
},{timestamps : true});

export const job = mongoose.model("Job", jobSchema);