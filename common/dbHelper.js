var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    models = require('./models');
    

// var TestSchema = new mongoose.Schema({
//     name : { type:String },//属性name,类型为String
   
// });
// var TestModel = mongoose.model("brand", TestSchema,"brand");
// var personEntity = new TestModel({name:'Kr2souky'});
//     //打印这个实体的名字看看
//     console.log(personEntity.name); //Krouky
//     personEntity.save();  

//根据models建立model，后面的m不加会导致集合名自动加s
for (var m in models) {
    mongoose.model(m, new Schema(models[m]),m);
   
}

// mongoose.model("user").find(function(err,persons){
//       //查询到的所有person
//       console.log(persons)
//     });
// Model.find({ 'csser.com': 5 }, function (err, docs) { // docs 是查询的结果数组 });





module.exports = {
    getModel: function (type) {
        return _getModel(type);
    }
};

var _getModel = function (type) {
    return mongoose.model(type);
};


