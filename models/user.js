//Connection to mysql
var connection = require('../config/connection');

//Model
var userModel = {};

//Function for get all users
userModel.getUsers = (callback) =>{

    if(connection){
        connection.query(
            'SELECT * FROM users',
            (err,rows) =>{
                if(err){
                    throw err;

                }else if (rows.length){
                    callback(null,rows);

                }else{
                    callback(null,{
                        msg: "No rows found"
                    });
                }
            }
        );
    }
};

//Function for get user
userModel.getUser = (id,callback) =>{
    if(connection){
        var sql =`SELECT * FROM users WHERE id=${connection.escape(id)}`;
        connection.query(sql,(err,row) =>{
            if(err){
                throw err;

            }else if (row.length){
                callback(null,row);

            }else{
                callback(null,{
                    msg: "User not exist"
                });
            }
        });
    }
};

//Function for create new user
userModel.createUser = (userData,callback) =>{
    if(connection){
        connection.query(
            'INSERT INTO users SET ?',userData,
            (err,result) =>{
                if(err){
                    throw err;

                }else{
                    callback(null,{
                        "insertId": result.insertId
                    });

                }
            }
        );
    }
};

//Function for update user
userModel.updateUser = (userData,callback) =>{
    if(connection){
        var sql =`UPDATE users SET
            name = ${connection.escape(userData.name)},
            last_name = ${connection.escape(userData.last_name)},
            address = ${connection.escape(userData.address)},
            city = ${connection.escape(userData.city)},
            state = ${connection.escape(userData.state)},
            country = ${connection.escape(userData.country)},
            phone = ${connection.escape(userData.phone)},
            area_code = ${connection.escape(userData.area_code)},
            birthdate = ${connection.escape(userData.birthdate)}
            WHERE id = ${connection.escape(userData.id)}`;

        connection.query(sql,(err,result) =>{
            if(err){
                throw err;

            }else{
                callback(null,{
                    msg: "user updated"
                });
            }
        });
    }
};

//Function for delete user
userModel.deleteUser = (idUser,callback) =>{
    if(connection){
        connection.query(
            `DELETE FROM users where id = ${connection.escape(idUser)}`,
            (err,result) =>{
                if(err){
                    throw err;

                }else{
                    callback(null,{
                        msg: "User deleted"
                    });
                }
            }
        );
    }
};

module.exports = userModel;
