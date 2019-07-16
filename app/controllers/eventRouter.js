const express = require('express');
const db = require('../models/sqlite');

const router = express.Router();

router.get('/:neighborhoodId/:eventId/', (req, res) => {
  res.send('searching for a single event!');
  // db.readEvent();
});

router.get('/:neighborhoodId/', (req, res) => {
  res.send('searching for all events from a neighborhood!');
  // db.readNeighborhoodEvents();
});

router.get('/', (req, res) => {
  res.send('searching for all events in Sacramento!');
  // db.readAllEvents();
});

// The following methods will require authentication

router.post('/:neighborhoodId', (req, res) => {
  res.send('creating a new event in a neighborhood!');
  // db.createEvent();
});

router.update('/:neighborhoodId/:eventId', (req, res) => {
  res.send('changing an event in a neighborhood!');
  // db.updateEvent();
});

router.delete('/:neighborhoodId/:eventId', (req, res) => {
  res.send('deleting an event in a neighborhood!');
  // db.deleteEvent();
});

module.exports = router;