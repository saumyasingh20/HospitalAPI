const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true,
    },
    doctor:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Doctor',
        required:true
    },
    report_status:{
        type:String,
        required:true,
        enum:['Negative','Travelled-Quarantine','Symptoms-Quarantine','Positive-Admit']
    },
    date_of_creation:{
        type:Date,
        required:true
    }
}
,{
    timestamps : true
});

const Doctor = mongoose.model('Patient',patientSchema);

module.exports = Patient;