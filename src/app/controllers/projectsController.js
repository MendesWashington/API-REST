const express = require('express');
const authMiddlewars = require('../middlewars/auth');

const router = express.Router();
router.use(authMiddlewars);

router.get('/', (req, res)=>{
    return res.status(200).send({ ok:true });
});

module.exports = app => app.use('/projects', router);
