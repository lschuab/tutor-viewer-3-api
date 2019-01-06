'use strict';

const Model = require('objection').Model;

class Shift extends Model {
  static get tableName() {
    return 'shifts';
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
      required: ['day', 'startTime', 'endTime', 'center', 'tutorId'],

      properties: {
        id: { type: 'integer' },
        tutorId: { type: 'integer' },
        day: { type: 'string', minLength: 1, maxLength: 255 },
        startTime: { type: 'time' },
        endTime: { type: 'time' },
        center: { type: 'string', minLength: 1, maxLength: 255 },
      }
    };
  }

  static get relationMappings() {
    return {
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/Tutor',
        join: {
          from: 'shifts.tutorId',
          to: 'tutors.id'
        }
      }
    };
  }
}

module.exports = Shift;