const router = require('express').Router();
const Books = require('../../models/Books');
const {Op} = require('sequelize');

//get all books
router.get('/', async (req, res) => {
  try {
    const dbBookData = await Books.findAll();

    const books = dbBookData.map((book) =>
      book.get({ plain: true })
    );

    res.status(200).json(books);
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/:searchTerm", async (req, res) => {
  const searchable = req.params.searchTerm
  console.log(searchable);
  if (searchable) {
    const dbBookData = await Books.findOne({
      where: {
        [Op.or]: [
          { title: searchable },
          { author_last: searchable },
          { author_first: searchable },
        ]
      }
    })
    console.log(dbBookData);
    res.status(200).json(dbBookData);
  }
})

// GET one book

router.get('/books/:id', async (req, res) => {

  // If the user is logged in, allow them to view the library
  try {
    const dbBookData = await Books.findByPk(req.params.id);

    const books = dbBookData.get({ plain: true });

    res.render('books', { books, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;