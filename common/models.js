
module.exports = {
    user: {
        name: { type: String },
        password: { type: Number }
    },
    Users:{
        email: String,
        password: String,
        token: String
    },
    brands:{
          name: { type: String }
        
    },
     types:{
          brand: { type: String },
          name: { type: String }    
    },
    products:{
        brand: { type: String },
        type: { type: String },
        name:{type: String},
        img:{type:String}  
    },
    news:{
         title: { type: String },
          content: { type: String },
          time:{type:String}
    },
     docs:{
         name: { type: String },
          src: { type: String }
         
    }
};
