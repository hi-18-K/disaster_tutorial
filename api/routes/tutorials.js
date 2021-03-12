const express = require('express');
const router = express.Router();

const importData = require('../tutorial_data/complete_data.json');


router.get('/', (req, res) => {
	try{
		res.json(importData);
	}catch(err){
		res.send('Error: ' + err);
	}
});

module.exports = router;