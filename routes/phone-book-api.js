var express = require('express');
var router = express.Router();
var Phone = require('../models/phone')

// GET route 
// get all phones
router.get('/', (req, res) => {
  allphones = Phone.find((err, foundPhones) => {
    if (err) return res.json(err)
    res.json(foundPhones)
  })
});

// get one phone
router.get('/:id', (req, res) => {
  var callBack = function (err, foundPhone) {
    if (err) return res.json(err)
    else {
      if (foundPhone) {
        res.json(foundPhone)
      } else {
        res.status(404).json({ 'message': 'Phone not found' })
      }
    }
  }
  if (/\b[A-Fa-f0-9]{24}\b/.test(req.params.id))
    Phone.findById(req.params.id, callBack)
  else if (/\b[19][0-9]{8}\b/.test(req.params.id))
    Phone.findOne({ 'number': req.params.id }, callBack)
  else
    res.status(400).json({ 'message': 'Send a valid shearch terms' })
});

// POST route
// add new phone 
router.post('/', (req, res) => {
  newPhoneInfo = { number: req.body.number }
  if (/[19][1-9]{8}\b/.test(newPhoneInfo.number)) {
    Phone.create(newPhoneInfo, (err, newPhone) => {
      if (err) { return res.json(err) }
      else { res.json(newPhone) }
    })
  }
  else { res.status(400).json({ 'message': 'Send a valid phone opject' }) }
});

// PUT rout
// update phone
router.put('/:id', (req, res) => {
  newPhoneInfo = { number: req.body.number }

  var callBack = function (err, foundPhone) {
    if (err) return res.json(err)
    else {
      if (foundPhone) {
        res.json(foundPhone)
      } else {
        res.status(404).json({ 'message': 'Phone not found' })
      }
    }
  }

  if (/\b[A-Fa-f0-9]{24}\b/.test(req.params.id))
    Phone.findByIdAndUpdate(req.params.id, newPhoneInfo, callBack)
  else if (/\b[19][0-9]{8}\b/.test(req.params.id))
    Phone.findOneAndUpdate({ 'number': req.params.id }, newPhoneInfo, callBack)
  else
    res.status(400).json({ 'message': 'Send a valid shearch terms' })
});

// DELETE route
// delete a phone
router.delete('/:id', (req, res) => {
  var callBack = function (err, deletedPhone) {
    if (err) return res.json(err)
    else if (deletedPhone) {
      res.json(deletedPhone)
    } else {
      res.status(404).json({ 'message': 'Phone not found' })
    }

  }

  if (/\b[A-Fa-f0-9]{24}\b/.test(req.params.id))
    Phone.findByIdAndDelete(req.params.id, callBack)
  else if (/\b[19][0-9]{8}\b/.test(req.params.id))
    Phone.findOneAndDelete({ 'number': req.params.id }, callBack)
  else
    res.status(400).json({ 'message': 'Send a valid shearch terms' })

});
// Middelwares

module.exports = router;
