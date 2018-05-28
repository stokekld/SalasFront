import path from 'path';
import Express from 'express';
import mustacheExpress from 'mustache-express';
//import { range } from 'range';
import moment from 'moment';

//console.log(moment(Date.now()).format('DD'));
//console.log(moment(Date.now()).format('MM'));
//console.log(moment(Date.now()).format('YYYY'));
//console.log(moment(Date('08:00:00')).format('HH'));
//console.log(range(10));
let inicio = moment({ hour:8, minute:0 });

console.log(inicio.format('HH:mm'));

inicio.add(15, 'minute');

console.log(inicio.format('HH:mm'));

let app = new Express();

let dist = path.join(__dirname, 'static');

app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(Express.static(dist));

app.get('/login', (req, res) => res.render('login'));
app.get('*', (req, res) => {
    res.render('index')
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
