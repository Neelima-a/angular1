var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var config=require('./../config/config');
mongoose.connect(config.mongo.url);

var studentSchema= new Schema({
	name:String,
	age:Number,
	location:String
});

var teacherSchema= new Schema({
	name:String,
	age:Number,
	location:String
});

var studentColl = mongoose.model("students",studentSchema);
var teacherColl = mongoose.model("teachers",teacherSchema);

module.exports={
	students: studentColl,
	teachers: teacherColl

};



