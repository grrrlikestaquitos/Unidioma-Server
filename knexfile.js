module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'hirakana',
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/migrations'
    }
  }

}