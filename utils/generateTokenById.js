const jwt = require('jsonwebtoken');

module.exports = id => {
  const JWT_SECRET = process.env.JWT_SECRET || 'asecret';
  const token = jwt.sign({ id }, JWT_SECRET);
  return token;
};
