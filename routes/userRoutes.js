//User model
var User = require('../models/user');

module.exports = (app) =>{

    //Endpoint for get all users
    app.get("/users",(req,res) =>{
        User.getUsers((err,data) =>{
            if(err){
                res.status(500).json({
                    success:false,
                    msg: err.message
                });

            }else if(data.msg){
                res.status(404).json({
                    success: false,
                    msg: data.msg
                });

            } else{
                res.status(200).json(data);
            }
        });
    });

    //Endpoint for get user
    app.get('/users/:idUser',(req,res) =>{
        var idUser = req.params.idUser;
        User.getUser(idUser,(err,data) =>{
            if(err){
                res.status(200).json(data);

            }else if(data.msg){
                res.status(404).json(data.msg);

            }else{
                res.status(200).json(data);
            }
        });
    });

    //Endpoint for create user
    app.post('/users',(req,res) =>{
        User.createUser(req.body,(err,data) =>{
            if(JSON.stringify(req.body)=='{}'){
                res.status(400).json({
                    success: false,
                    msg: "No data for insert"
                });

            }else if(err){
                res.status(500).json({
                    success: false,
                    msg: err.message
                });

            }else if(data && data.insertId){
                res.status(201).json({
                    success: true,
                    msg: "User created"
                });
            }
        });
    });

    //Endpoint for update user
    app.put('/users/:idUser',(req,res) =>{
        var idUser = req.params.idUser;
        User.updateUser(idUser,req.body,(err,data) =>{
            if(err){
                res.status(500).json({
                    success: false,
                    msg: err.message
                });

            }else{
                res.status(200).json(data);
            }
        });
    });

    //Endpoint for delete user
    app.delete('/users/:idUser',(req,res) =>{
        User.deleteUser(req.params.idUser,(err,data) =>{
            if(err){
                res.status(500).json({
                    success: false,
                    msg: err.message
                });

            }else{
                res.status(200).json(data);
            }
        });
    });

};
