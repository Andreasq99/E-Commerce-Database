const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
    const tags = await Tag.findAll({
      include: [{model: Product}]
    });
    res.json(tags);
  } catch(err){
    console.log(err);
  }
});

router.get('/:id', async(req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
    const tag = await Tag.findByPk(req.params.id,{
      include: [{model: Product}]
    });
    res.json(tag);
  } catch(err){
    console.log(err);
  }
});

router.post('/', async(req, res) => {
  // create a new tag
  try{
    const name = req.body.name;
    if(!await Tag.findOne({where: {tag_name: name}})){
      await Tag.create({tag_name: name});
      res.send(`<h1>Created tag "${name}"!</h1>`);
    } else {
      res.send(`<h1>Tag "${name}" already exists!</h1>`);
    }
  } catch(err){
    console.log(err);
  }
});

router.put('/:id', async(req, res) => {
  // update a tag's name by its `id` value
  try{
    const tag = await Tag.findByPk(req.params.id);
    if(!tag){
      res.send(`<h1>Tag ${req.params.id} does not exist!</h1>`);
    } else {
      tag.update({tag_name: req.body.name});
      res.send(`<h1>Renamed tag ${req.params.id} to "${req.body.name}"!</h1>`);
    }
  } catch(err){
    console.log(err);
  }
});

router.delete('/:id', async(req, res) => {
  // delete on tag by its `id` value
  try{
    const tag = await Tag.findByPk(req.params.id);
    if(!tag){
      res.send(`<h1>Tag ${req.params.id} does not exist!</h1>`);
    } else {
      await tag.destroy();
      res.send(`<h1>Deleted tag "${tag.tag_name}"!</h1>`);
    }
  } catch(err){
    console.log(err);
  }
});

module.exports = router;
