function isProd(){
  return false;
}
export default ({ env }) =>{
  if(isProd()){
    return {
      connection: {
        client: 'postgres',
        connection: {
          host: env('DATABASE_HOST', '172.1.1.23'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'tavern-cms-prod'),
          user: env('DATABASE_USERNAME', 'postgres'),
          password: env('DATABASE_PASSWORD', 'Admin123!'),
          ssl: env.bool('DATABASE_SSL', false),
        },
      },
    }
  }
  return{
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'tavern-cms'),
        user: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'Admin123!'),
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  }
};
