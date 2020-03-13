const express    = require('express');
const bcrypt     = require('bcryptjs'); 
const UserModel  = require('../models/User');
const jwt        = require('jsonwebtoken');
const authConfig = require('../../config/auth');

const router = express.Router();

function generetToken(params = {}){
    return jwt.sign(params, authConfig.secret, {expiresIn: 86400,});
}

router.post('/register', async (req, res) => {
    try{
        const { email} = await req.body; 
        if( await UserModel.findOne({ email}))
            return res.status(400).send({err: 'User already exists'});

        const user = await  UserModel.create(req.body);
        user.password = undefined;

        return res.status(200).send({ 
            user,
            token: generetToken({id: user.id}),
        });
    }catch(err){
        return res.status(400).send({err: 'Registration failed'});
    }
});

router.post('/authenticate', async (req, res) =>{ 
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email }).select('+password');
        
        if(!user)
            return res.status(400).send({error: 'User not found!'});

        if(!await bcrypt.compare(password, user.password))
            return res.status(401).send({error: 'Invalid password!'});

        user.password = undefined;

        return res.status(200).send({ 
            user, 
            token: generetToken({id: user.id}),
        });    
    } catch (err) {
        return res.status(400).send({error:'failed!'});
    }
});

module.exports = app => app.use('/auth', router);