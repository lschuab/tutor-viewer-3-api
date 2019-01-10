const Tutor = require('../models/Tutor');

module.exports = {
  index: async (req, res) => {
    const tutors = await Tutor
      .query()
      .orderBy('firstName')
      .orderBy('lastName');
    res.send(tutors);
  },

  show: async (req, res) => {
    const tutor = await Tutor
      .query()
      .findById(req.params.id)
      .eager('[courses, shifts]');
    res.send(tutor);
  },

  create: async (req, res) => {
    const newTutor = await Tutor
      .query()
      .insert({
        firstName: req.body.firstName,
        lastName: req.body.lastName
      });
    res.send(newTutor);
  },

  update: async (req, res) => {
    const updatedTutor = await Tutor
      .query()
      .update({
        firstName: req.body.firstName,
        lastName: req.body.lastName
      })
      .where('id', req.params.id)
      .returning('*');
    res.send(updatedTutor);
  },

  toggle: async (req, res) => {
    const tutorToToggle = await Tutor
      .query()
      .findById(req.params.id);
    const toggledTutor = await Tutor
      .query()
      .patch({active: !tutorToToggle.active})
      .findById(req.params.id)
      .returning('*');
    res.send(toggledTutor);
  },

  delete: async (req, res) => {
    const deletedTutor = await Tutor
      .query()
      .del()
      .where('id', req.params.id)
      .returning('*');
    res.send(deletedTutor);
  },

  addCourse: async (req, res) => {
    const tutor = await Tutor
      .query()
      .findById(req.params.id);

    const updatedTutor = await tutor
      .$relatedQuery('courses')
      .relate(req.params.course_id);

    res.send(tutor);
  },

  removeCourse: async (req, res) => {
    const tutor = await Tutor
      .query()
      .findById(req.params.id);

    const updatedTutor = await tutor
      .$relatedQuery('courses')
      .unrelate()
      .where('courses.id', req.params.course_id);

    res.send(tutor);
  },

  clearCourses: async (req, res) => {
    const tutor = await Tutor
      .query()
      .findById(req.params.id);

    const updatedTutor = await tutor
      .$relatedQuery('courses')
      .unrelate();

      res.send(tutor);
  }

};