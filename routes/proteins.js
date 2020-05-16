const express = require('express');
const router = express.Router();
const controller = require("../controllers/protein.controller");

router.get('/', controller.Get);

// router.get('/:id', controller.GetById);


// router.post('/', controller.Create);

// router.put('/:id', controller.Update);


// router.delete('/:id', controller.Remove);

module.exports = router;