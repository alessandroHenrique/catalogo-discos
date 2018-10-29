const Joi = require('joi');
const express = require('express');
const router = express.Router();
const db = require('../../config/database');

router.get('/', async (req, res) => {
  const collections = await db.select().from('collection').orderBy('id');
  for (let i=0; i < collections.length; i++) {
    const discs = await db('disc').where({collection_id: collections[i].id});
    if (discs) {
      collections[i].discs = discs;
    }
  }
  res.send(collections);
});

router.post('/', (req, res) => {
  const { error } = validateCollection(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  db.insert(req.body).into('collection').returning('*').then((data) => {
    res.send(
      {...req.body, id: data[0], discs: []}
    );
  });
});

router.get('/:id', (req, res) => {
  db('collection').where({id: req.params.id}).select().then((data) => {
    res.send(data);
  });
});

router.delete('/:id', (req, res) => {
  db('collection').where({id: req.params.id}).del().then(() => {
    res.json({success: true})
  });
});

router.put('/:id', (req, res) => {
  db('collection').where({id: req.params.id}).update(req.body).returning('*').then((data) => {
    res.send(
      {...req.body, id: req.params.id}
    );
  });
});

const validateCollection = (collection) => {
  const schema = Joi.object().keys({
    title: Joi.string().required()
  });

  return Joi.validate(collection, schema);
};

module.exports = router
