const Shift = require('../models/Shift');
const LocalTime = require('js-joda').LocalTime;


module.exports = {
  index: async (req, res) => {
    const shifts = await Shift
      .query();
    res.send(shifts);
  },

  create: async (req, res) => {
    const newShift = await Shift
      .query()
      .insert({
        day: req.body.day,
        startTime: LocalTime.parse("" + req.body.startTime),
        endTime: LocalTime.parse("" + req.body.endTime),
        tutorId: req.body.tutorId,
        center: req.body.center,
      });
    res.send(newShift);
  },

  update: async (req, res) => {
    const updatedShift = await Shift
      .query()
      .update({
        day: req.body.day,
        startTime: LocalTime.parse("" + req.body.startTime),
        endTime: LocalTime.parse("" + req.body.endTime),
        tutorId: req.body.tutorId,
        center: req.body.center,
      })
      .where('id', req.params.id)
      .returning('*');
    res.send(updatedShift);
  },

  delete: async (req, res) => {
    const deletedShift = await Shift
      .query()
      .del()
      .where('id', req.params.id)
      .returning('*');
    res.send(deletedShift)
  }
};