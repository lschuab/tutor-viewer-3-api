'use strict';

const Model = require('objection').Model;

class Course extends Model {
  static get tableName() {
    return 'courses';
  }

  $beforeInsert() {
    this.created_at = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['courseCode', 'courseName'],

      properties: {
        id: { type: 'integer' },
        courseCode: { type: 'string', minLength: 1, maxLength: 255 },
        courseName: { type: 'string', minLength: 1, maxLength: 255 },
      }
    };
  }

  static get relationMappings() {
    return {
      tutors: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname + '/Tutor',
        join: {
          from: 'courses.id',
          through: {
            from: 'tutor_courses.courseId',
            to: 'tutor_courses.tutorId'
          },
          to: 'tutors.id'
        }
      }
    };
  }
}

module.exports = Course;