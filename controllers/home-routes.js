const router = require('express').Router();
const Books = require('../models/Books.js');

const withAuth = require('../utils/auth');

// GET 9 books for homepage
router.get('/', async (req, res) => {
  try {
    const dbBookData = await Books.findAll({
      limit: 9,
    });

    const books = dbBookData.map((book) =>
      book.get({ plain: true })
    );

    res.render('homepage', {
      books,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one book
//we only put middleware on route we wanna protect
router.get('/books/:id', withAuth, async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
    // If the user is logged in, allow them to view the gallery
    try {
      const dbBookData = await Books.findByPk(req.params.id);

      const books = dbBookData.get({ plain: true });
console.log(books);
      res.render('books', { books, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;