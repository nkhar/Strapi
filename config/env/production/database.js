module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("PGHOST", "127.0.0.1"),
      // port: env.int('PGPORT', 5432),
      port: env.int("PGPORT", 5431),
      database: env("PGDATABASE", "strapi"),
      user: env("PGUSER", "postgres"),
      password: env("PGPASSWORD", "postgres123"),
      ssl: env.bool(true),
    },
  },
});
