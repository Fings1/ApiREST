//User model
var User = require('../models/user');

module.exports = (app) =>{

    //Endpoint for get all users
    app.get("/users",(req,res) =>{
        User.getUsers((err,data) =>{
            if(data){
                res.status(200).json(data);
            }
        });
    });

    //Endpoint for get user
    app.get('/users/:idUser',(req,res) =>{
        var idUser = req.params.idUser;
        User.getUser(idUser,(err,data) =>{
            if(data){
                res.status(200).json(data);
            }
        });
    });

    //Endpoint for create user
    app.post('/users',(req,res) =>{
        User.createUser(req.body,(err,data) =>{
            if(data && data.insertId){
                res.status(201).json({
                    success: true,
                    msg: "User created"
                });

            }
        });
    });

    //Endpoint for update user
    app.put('/users/:idUser',(req,res) =>{
        User.updateUser(req.body,(err,data) =>{
            if(data){
                res.status(200).json(data);
            }
        });
    });

    //Endpoint for delete user
    app.delete('/users/:idUser',(req,res) =>{
        User.deleteUser(req.params.idUser,(err,data) =>{
            if(data){
                res.status(200).json(data);
            }
        });
    });

};
