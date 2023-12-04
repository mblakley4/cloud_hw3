const app = require('./app')

const PORT = 8080;
const HOST = '0.0.0.0';

app.listen(PORT, () => {
  console.log(`Server listening at http://${HOST}:${PORT}`)
});