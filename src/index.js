const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const path = require('path');

const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//http logger
app.use(morgan('combined'));
//template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Route init
route(app);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
