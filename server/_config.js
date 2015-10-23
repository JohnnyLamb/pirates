module.exports = {
  TOKEN_SECRET: process.env.
  TOKEN_SECRET || 'this is my secret',
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/pirates-app',
  SALT_WORK_FACTOR: 10,
};

