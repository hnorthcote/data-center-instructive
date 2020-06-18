const express = require('express');
const router = express.Router();
const projectsCtrl = require('../controllers/projects');

router.get('/new', projectsCtrl.new);
router.get('/show', projectsCtrl.show );
router.get('/:id/update', projectsCtrl.edit);

router.post('/create', projectsCtrl.create);
router.put('/:id', projectsCtrl.update)
module.exports = router;
