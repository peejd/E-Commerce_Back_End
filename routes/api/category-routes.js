const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [
        { model: Product },
      ]
  });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [
        { model: Product },
      ]
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


  // create a new category
  router.post('/', (req, res) => {
    Category.create(req.body)
      .then((newCategory) => {
        res.json(newCategory);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  

  // update a category by its `id` value
  router.put('/:id', (req, res) => {
    //Calls the update method on the Book model
    Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
    .then((updatedCategory) => {
      res.json(updatedCategory);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
  });


  router.delete('/:id', async (req, res) => {
    // delete on tag by its `id` value
    try {
      const categoryData = await Category.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!categoryData) {
        res.status(404).json({ message: 'No category with this id!' });
        return;
      }
      res.status(200).send('Category deleted!');
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
