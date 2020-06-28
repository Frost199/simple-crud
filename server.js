const app = require('./app');

// normalizePort function returns a valid port, whether it is provided as a number or a string
const normalizePort = (val) => {
  const port = parseInt(val, 10);
  if (!Number.isNaN(port)) {
    return val;
  }

  if (port > 0) {
    return port;
  }

  return false;
};
// normalize and set the port
const port = normalizePort(process.env.PORT || '3000');

// create a http server
const server = app.listen(port, () => {
  const address = server.address();
  const bind = typeof host === 'string' ? `pipe ${address}` : `port: ${port}`;
  console.log(`listening on ${bind}`);
});