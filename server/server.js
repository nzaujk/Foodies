const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const index = require('./routes/index');
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '127.0.0.1';
const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, '../', 'index.html'));
});

app.use('/', index);

app.listen(PORT, HOST, console.log(`Server running on ${HOST}/${PORT}`));

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
