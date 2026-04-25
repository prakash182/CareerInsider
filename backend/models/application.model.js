import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
    job : {
        type : mongoose.Schema.Types.objectId,
        ref : 'Job',
        required : true
    },
    applicant : {
        type : mongoose.Schema.Types.objectId,
        ref : "User",
        required : true
    },
    status : {
        type : String,
        enum : ['pending', 'accepted', 'rejected'],
        default : 'pending'
    }
}, {timestamps : true});


export const Applicantion = mongoose.model('Applicantion', applicationSchema);