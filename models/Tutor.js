'use strict';

const Model = require('objection').Model;
const Shift = require('./Shift');
const Course = require('./Course');

class Tutor extends Model {
  static get tableName() {
    return 'tutors';
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
      required: ['firstName', 'lastName'],

      properties: {
        id: { type: 'integer' },
        firstName: { type: 'string', minLength: 1, maxLength: 255 },
        lastName: { type: 'string', minLength: 1, maxLength: 255 },
        active: { type: 'boolean', default: true },
      }
    };
  }

  static get relationMappings() {
    return {
      shifts: {
        relation: Model.HasManyRelation,
        modelClass: Shift,
        join: {
          from: 'tutors.id',
          to: 'shifts.tutorId'
        }
      },

      courses: {
        relation: Model.ManyToManyRelation,
        modelClass: Course,
        join: {
          from: 'tutors.id',
          through: {
            from: 'tutor_courses.tutorId',
            to: 'tutor_courses.courseId'
          },
          to: 'courses.id'
        }
      },
    };
  }
}

module.exports = Tutor;