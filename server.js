const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const tokenRouter = require(__dirname + '/routes/token_routes');

app.use('/api', tokenRouter);
app.use('/', express.static(__dirname + '/app'));

module.exports = exports = app.listen(PORT, () => {
  console.log('Server running on port: ' + PORT);
});
