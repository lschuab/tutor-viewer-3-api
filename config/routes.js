const tutors = require("../controllers/tutors.js");
const courses = require("../controllers/courses.js");
const shifts = require("../controllers/shifts.js");

module.exports = function(app){
  app.get('/tutors', tutors.index);
  app.get('/tutors/:id', tutors.show)
  app.post('/tutors', tutors.create);
  app.put('/tutors/:id', tutors.update);
  app.patch('/tutors/:id/toggle', tutors.toggle);
  app.delete('/tutors/:id', tutors.delete);

  app.post('/tutors/:id/courses/:course_id', tutors.addCourse)
  app.delete('/tutors/:id/courses/:cour se_id', tutors.removeCourse)

  app.get('/courses', courses.index);
  app.get('/courses/:id', courses.show)
  app.post('/courses', courses.create);
  app.delete('/courses/:id', courses.delete);


  //just for testing
  app.get('/shifts', shifts.index);

  app.post('/shifts', shifts.create);
  app.put('/shifts/:id', shifts.update);
  app.delete('/shifts/:id', shifts.delete);
}