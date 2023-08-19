const {Sequelize,DataTypes}=require("sequelize")

const sequelize=new Sequelize(
    'tutorial',//db
    'root',//username
    'Ankit@321',//password
    {
       host:"localhost", //host
       dialect:"mysql",  //type
       pool:{
           max:5,
           min:0
       }
    }
)
const User=sequelize.define("users",{
     name:{
        type:DataTypes.STRING
     },
     email:{
        type:DataTypes.STRING
     },
     id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
     },
     password:{
      type:DataTypes.STRING
     }
});

const Todo=sequelize.define("todo",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    task_name:{
        type:DataTypes.STRING
        },
    creation_date:{
            type:DataTypes.DATE
        },
        user_id:{
           type:DataTypes.INTEGER,
          references:{ model:"users",keys:"id"}
        }


})
const LoginInfo=sequelize.define("login_info",{
  username:{
    type:DataTypes.STRING
  },
  password:{
    type:DataTypes.STRING
  },
  user_id:{
    type:DataTypes.INTEGER,
    primaryKey:true
  }
})
User.hasMany(Todo)
//sync does creat a table  as per defined if it doesnt have one
sequelize.sync().then(()=>{
  console.log("user synced")
})
sequelize.authenticate().then(()=>{
  console.log("connection established")
}
)

module.exports={
  sequelize,
  User,
  Todo,
  LoginInfo
}