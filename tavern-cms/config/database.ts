export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '172.17.0.2'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'tavern-cms'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'docker'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
