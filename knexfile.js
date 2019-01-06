module.exports = {
  development: {
      client: 'pg',
      connection: {
        database: "tutor_viewer_3",
        host: "localhost"
      },
    },
  production: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
    },
};