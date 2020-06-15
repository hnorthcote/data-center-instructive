const express = require('express');
const router = express.Router();
const projectsCtrl = require('../controllers/projects');

/* GET users listing. */
router.get('/new', projectsCtrl.new);
router.get('/show', projectsCtrl.show );
router.post('/create', projectsCtrl.create);

module.exports = router;
