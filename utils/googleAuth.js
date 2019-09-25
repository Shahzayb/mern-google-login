const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  'postmessage'
);

exports.getIdToken = async code => {
  const r = await client.getToken(code);

  // Make sure to set the credentials on the OAuth2 client.
  client.setCredentials(r.tokens);

  return r.tokens.id_token;
};

exports.getPayload = async idToken => {
  const ticket = await client.verifyIdToken({
    idToken,
    audience: process.env.CLIENT_ID
  });

  const payload = ticket.getPayload();

  return payload;
};
