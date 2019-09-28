const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  /**
   * To get access_token and refresh_token in server side,
   * the data for redirect_uri should be postmessage.
   * postmessage is magic value for redirect_uri to get credentials without actual redirect uri.
   */
  'postmessage'
);

exports.getIdToken = async code => {
  const r = await client.getToken(code);
  return r.tokens.id_token;
};

exports.getProfileInfo = async idToken => {
  const ticket = await client.verifyIdToken({
    idToken,
    audience: process.env.CLIENT_ID
  });

  const payload = ticket.getPayload();

  return payload;
};
