const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');


router.post('/projects/:id/comments', commentsCtrl.create);
router.delete('/projects/:id/comments', commentsCtrl.delete);
module.exports = router;