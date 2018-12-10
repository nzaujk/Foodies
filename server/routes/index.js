const express = require('express');
const router = express.Router();
//const recipeController = require('../controllers/recipeController');
const auth = require('../../controllers/authController');
const Users = require('../../controllers').Users;
const Types = require('../../controllers').Types;
//const Type = require('../controllers').Type;

//const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Recipe' });
});
router.post('/register', Users.addUser);
router.post('/login',Users.getUser);
router.post("/logout", Users.logOutUser);

// router.post('/api/recipe', recipeController.addRecipe);
//
// router.get('/api/recipe/:id', recipeController.getSingleRecipe);

router.post("/auth/type", Types.addDishType);
router.get('/auth/type/:id', Types.getDishType);

module.exports = router;
