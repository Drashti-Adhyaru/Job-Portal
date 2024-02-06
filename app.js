var express = require('express');
var mongoose = require('mongoose');
var app = express();
var database = require('./config/database');
var bodyParser = require('body-parser');         // pull information from HTML POST (express4)
var path = require('path'); // importing path
const clientSessions = require("client-sessions");
const uuid = require('uuid');

var port = process.env.PORT || 8000;
app.use(bodyParser.urlencoded({ 'extended': 'true' }));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
const exphbs = require('express-handlebars');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static(path.join(__dirname, 'public')));  // enabling the static assets
app.use(express.static('public'))

app.engine('hbs', exphbs.engine({
    extname: '.hbs',
    helpers: {
  
      json: function (context) {
        return JSON.stringify(context);
      }
    },
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true
    },
  
    defaultLayout: 'main'
  }));
  
  mongoose.connect(database.url);

  var Users = require('./models/user');
  app.set('view engine', 'hbs');


  app.get('/users', async function (req, res) {

    // root route
    Users.find().exec()
      .then(data => {
        console.log(data);
        res.render('all_movies', { data: data });
      })
      .catch(error => {
        res.status(500).send(error.message);
      });
  });
  app.get('/', async function (req, res) {

    res.render('all_movies');
    
  });

  app.post('/api/add_user', async function (req, res) {
    console.log(req.body);
    try {
      const user = await Users.create({
        _id: uuid.v4(),
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        role: req.body.role,
        password: req.body.password

      });
      Users.find().exec()
      .then(data => {
        console.log(data);
        res.render('all_movies', { data: data });
      })
      .catch(error => {
        res.status(500).send(error.message);
      });
  
    } catch (error) {
      res.status(500).send(error.message);
  
    }
  });








app.listen(port);
console.log("App listening on port : " + port);