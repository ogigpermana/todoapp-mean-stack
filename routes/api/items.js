const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

/**
 * @routes      GET api/items
 * @description Get All Items
 * @access      Public
**/
router.get('/', (req, res) => {
  Item.find()
    .sort({date: -1})
    .then(items => res.json(items))
});

/**
 * @routes      POST api/items
 * @description create todoapp
 * @access      Public
**/
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
});

module.exports = router;
