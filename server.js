const path = require('path');
const express = require('express');
const {createServer} = require('http');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
// const { io } = require("newServ);
const {Server} = require('socket.io');



const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
const PORT = process.env.PORT || 3001;

// const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const sess = {
//   secret: process.env.SECRET,
//   cookie: {
//     maxAge: 300000,
//     httpOnly: true,
//     secure: false,
//     sameSite: 'strict',
//   },
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  console.log('socket')

}
)
app.use(require('./controllers/'));

// turn on connection to db and server
sequelize.sync({ force: false}).then(() => {
  // app.listen(PORT, () => console.log('Now listening'));
  httpServer.listen(PORT)
});