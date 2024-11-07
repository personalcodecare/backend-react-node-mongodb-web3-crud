'use strict';

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.redirect("/home")
});
  
router.use('/home', require('./home/home-router'));
router.use('/nfts', require('./nft/nft-router'));

module.exports = router;
