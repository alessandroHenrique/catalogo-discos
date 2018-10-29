const Joi = require('joi');
const express = require('express');
const router = express.Router();
const db = require('../../config/database');

router.get('/', (req, res) => {
  db.select().from('disc').orderBy('id').then((data) => {
    res.send(data);
  });
});

router.post('/', (req, res) => {
  const { error } = validateDisc(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  db.insert(req.body).returning('*').into('disc').then((data) => {
    res.send({...req.body, id: data[0]});
  });
});

router.get('/:id', (req, res) => {
  db('disc').where({id: req.params.id}).select().then((data) => {
    res.send(data);
  });
});

router.delete('/:id', (req, res) => {
  db('disc').where({id: req.params.id}).del().then(() => {
    res.json({success: true})
  });
});

router.put('/:id', (req, res) => {
  db('disc').where({id: req.params.id}).update(req.body).returning('*').then((data) => {
    res.send(
      {...req.body, id: parseInt(req.params.id)}
    );
  });
});

const validateDisc = (disc) => {
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    author: Joi.string().required(),
    description: Joi.string(),
    collection_id: Joi.number().required(),
  });

  return Joi.validate(disc, schema);
};

module.exports = router
