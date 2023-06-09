const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiController.js');
const cartController = require('../controllers/cartController.js');
const recipeController = require('../controllers/recipeController.js');

router.get('/getRecipes', recipeController.getRecipes, (req, res) => {
  return res.status(200).json(res.locals.recipes);
})

//initialized at the start of the app to populate bar cart
router.get('/initialCart', cartController.initialCart, (req, res) => {
  return res.status(200).json(res.locals.newCart);
})

router.post('/lookup', cartController.lookupIngredient, (req, res) => {
  console.log(req.body);
  return res.status(200).json(res.locals.newCart);
})

//route to middleware to populate view with all available ingredients
router.get('/', apiController.getAllIngredients, (req, res) => {
  console.log('in ingredients router');
  return res.status(200).json(res.locals.allIngredients);
})

//route to middleware to add items to bar cart
router.post('/', cartController.addToCart, (req, res) => {
  console.log('returning cart results');
  res.status(200).json(res.locals.newCart);
})

//route to middleware to remove ingredient from bar cart
router.delete('/', cartController.deleteCard, (req, res) => {
  return res.status(200).json(res.locals.newCart);
})

module.exports = router;