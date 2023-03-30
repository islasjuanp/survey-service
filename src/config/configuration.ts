export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    env: process.env.NODE_ENV,
    db: {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10) || 3306,
      name: process.env.DB_NAME,
      user: process.env.DB_USER,
      pass: process.env.DB_PASS,
    }
  });