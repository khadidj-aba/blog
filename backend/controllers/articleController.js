const Article = require('../models/Article');

exports.createArticle = async (req, res) => {
  try {
    const { title, content } = req.body;
    const article = new Article({ title, content, author: req.user.userId });
    await article.save();
    res.status(201).json(article);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find().populate('author', 'username');
    res.status(200).json(articles);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
