exports.up = knex => {
  return knex.schema
    .createTable('tutors', table => {
      table.increments().primary();
      table.string('firstName');
      table.string('lastName');
      table.boolean('active').defaultTo(true);
      table.timestamps(true, true);
    })
    .createTable('shifts', table => {
      table.increments().primary();
      table.string('day');
      table.time('startTime');
      table.time('endTime');
      table.string('center');
      table.integer('tutorId')
        .notNullable()
        .references('id')
        .inTable('tutors')
        .onDelete('CASCADE')
        .index();
      table.timestamps(true, true);
    })
    .createTable('courses', table => {
      table.increments().primary();
      table.string('courseCode');
      table.string('courseName');
      table.timestamps(true, true);
    })
    .createTable('tutor_courses', table => {
      table.increments().primary();
      table.integer('tutorId')
        .notNullable()
        .references('id')
        .inTable('tutors')
        .onDelete('CASCADE')
        .index();
      table.integer('courseId')
        .notNullable()
        .references('id')
        .inTable('courses')
        .onDelete('CASCADE')
        .index();
      table.timestamps(true, true);
    });
};

exports.down = knex => {
  return knex.schema
    .dropTableIfExists('tutor_courses')
    .dropTableIfExists('courses')
    .dropTableIfExists('shifts')
    .dropTableIfExists('tutors');
};