var connection = require("../../service/connection");
var generate_token = require('../../authentication/generate_token')

module.exports = function login(req , res){
    console.log(req.body)
    connection.query("select * from user where username = '"+req.body.username+"'", function (err, result, fields) {
        console.log(result)
        if (err) res.send(err);
        if(req.body.password === result[0].password){
            connection.query("select * from admin where user_id = "+result[0].user_id, function (err, result2, fields) {
                if (err) res.send(err);
                console.log(result2)
                const token = generate_token(result[0].user_id , result2[0].position)
                res.send(token)
              });
        }
        else{
            res.send("error username or password")
        }   
      });
}