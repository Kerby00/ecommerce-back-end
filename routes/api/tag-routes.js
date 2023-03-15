const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll();
    res.json(200).json(tagData)
  } catch (err) {
    res.json(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = Tag.findByPk(req.params.id, { include: { model: Product } });
    res.json(200).json(tagData)
  } catch (err) {
    res.json(500).json(err)
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = Tag.create(req.body);
    res.json(200).json(tagData)
  } catch (err) {
    res.json(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = Tag.update(req.body);
    res.json(200).json(tagData)
  } catch (err) {
    res.json(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = Tag.destroy(req.body);
    res.json(200).json(tagData)
  }catch(err){
    res.json(500).json(err)
  }
});

module.exports = router;
