'use strict'

const mongoose = require('mongoose'),
    User = mongoose.model('User');

var getUsers = (req, res)=>{
    var query = {};

    User.find(query, (err, users)=>{
        if(err) 
            res.status(500).send(err);
        else{
            res.status(200);
            res.json(users);
        }
    })
}

var createUser = (req, res)=>{
    var user = new User(req.body);

    User.create(user, (err, newUser)=>{
        if(err) 
           return res.status(500).send(err);

        res.status(201);
        res.send(newUser);

    })
}

module.exports = {
    getUsers,
    createUser
}