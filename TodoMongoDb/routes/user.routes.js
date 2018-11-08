'use strict'

module.exports = (app)=>{
    const userController = require('../controllers/user.controller');

    app
    .route('/users')
    .get(userController.getUsers)
    .post(userController.createUser);
    
}