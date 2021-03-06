const Course = require('../models/Course');
const Shift = require('../models/Shift');
const Tutor = require('../models/Tutor');

module.exports = {
  index: async (req, res) => {
    const courses = await Course
      .query()
      .orderBy('courseCode');
    res.send(courses);
  },

  show: async (req, res) => {
    const course = await Course
      .query()
      .eager('[tutors.shifts]')
      .where('id', req.params.id);
    res.send(course[0]);
  },

  create: async (req, res) => {
    const newCourse = await Course
      .query()
      .insert({
        courseCode: req.body.courseCode,
        courseName: req.body.courseName || "College Course"
      });
    res.send(newCourse);
  },

  delete: async (req, res) => {
    const deletedCourse = await Course
      .query()
      .del()
      .where('id', req.params.id)
      .returning('*');
    res.send(deletedCourse);
  }
}