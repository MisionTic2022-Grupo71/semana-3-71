const router = require('express').Router();
const db = require('../../models');
const userController = require('../../controllers/UserController.js');
const bcrypt = require('bcryptjs');

router.get('/', async(req,res)=>{
    const user = await db.User.findAll();
    res.status(200).json(user);
});
router.post('/register', async(req,res)=>{
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await db.User.create(req.body);
    res.status(200).json(user);
});

router.post('/signin', userController.signin);

module.exports = router;