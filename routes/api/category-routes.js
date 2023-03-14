const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll()
    res.json(200).json(categoryData)
  }catch(err){
    res.json(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {include: {model: Product}});

  if (!categoryData) {
    res.statusCode(404).json({ message: 'There is no category found with that id'})
  } return
  } catch(err){
    res.json(500).json(err)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try { const categoryData = await Category.create(req.body)
res.json(200).json(categoryData)
  } catch(err){
    res.json(500).json(err)
  }
  
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body.id);
    res.json(200).json(categoryData)
  } catch(err){
    res.json(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy(req.body.id);
    res.json(200).json(categoryData)
    if (!categoryData) {
      res.json(404).json({ message: 'No category found with that id'})
    } return;
  } catch(err){
    res.json(500).json(err)
  }
});

module.exports = router;
