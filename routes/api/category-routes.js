const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const categories = await Category.findAll({include: Product});
    res.json(categories);
  } catch(err){
    console.log(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const category = await Category.findOne({where: {category_name:req.params.id}}, {include: Product});
    res.json(category);
  } catch(err){
    console.log(err);
  }
});

router.post('/', async(req, res) => {
  // create a new category
  console.log(req.body);
  const name = req.body.name;
  try{
    if(!await Category.findOne({where:{category_name:name}})){
      await Category.create({category_name:name});
      res.send(`<h1>Category "${name}" entered in the database!</h1>`);
    } else {
      res.send(`<h1>Category "${name}" already exists!</h1>`);
    }
  } catch(err) {
    console.log(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
    const category = await Category.findByPk(req.params.id);
    await category.update({name: req.body.name});
    res.send(`Category ${req.params.id} renamed to "${req.body.name}"!`);
  } catch(err){
    console.log(err);
  }
});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  try{
    const category = await Category.findByPk(req.params.id);
    if(!category){
      res.send(`<h1>Category ${req.params.id} does not exist!</h1>`);
    } else {
      await category.destroy();
      res.send(`<h1>Category "${category.category_name}" deleted!</h1>`);
    }
  } catch(err){
    console.log(err);
  }
});

module.exports = router;
