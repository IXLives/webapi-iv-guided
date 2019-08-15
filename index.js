require('dotenv').config()

const server = require('./api/server.js');

const port = process.env.PORT || 4000

server.listen(port, () => {
  console.log(`\n*** Server Running on Port ${port} ***\n`);
});

// When running locally, the IP is taken care of by localhost
// we can hardcode any port over 3000

// when deploying, the case is different
// heroku/deployment will assign an IP address -- we can't hardcode in a port
// heroku needs to tell us which port to use -- enter, dynamic ports
// Environment variables -- 