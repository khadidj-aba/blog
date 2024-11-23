const express = require('express');
const { createArticle, getAllArticles } = require('../controllers/articleController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/newArticle', authMiddleware, createArticle);
router.get('/displayAllArticles', getAllArticles);

module.exports = router;
