export default () => ({
  port: parseInt(process.env.PORT, 10) || 4000,
  database: {
    type: process.env.DB_TYPE || 'mssql',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 1433,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    autoLoadEntities: true,
    // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    // entities: [Interacciones, OrigenesCorte],
    synchronize: false,
    options: {
      encrypt: false,
    },
  },
});
