import bodyParser from 'body-parser';
import express from 'express';
import mysql from 'mysql2';


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    database: 'ecom',
    password: '',
}).once('connection', (stream) => {
    console.log('Ah, we have our first user!');
});

// initialisation de l'application Express
const app = express();


app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs')


app.get('/', function (req, res) {
    connection.query('select * from produits', (err, result, fields) => {
        console.log(result)
        res.render('pages/index', { produits: result })
    })
})

app.get('/panier', function (req, res) {
    connection.query('select * from panier', (err, result, fields) => {
        console.log(result)
        res.render('pages/panier', { panier: result })
    })
})








// creation d'une 'route' avec la methode http
//Get dont le chemin est '/'
app.get('/', function (httpRequest, httpResponse) {
    // log de la requete entrante
    // envoie de la réponse http
    httpResponse.render('pages/index')
});

app.get('/connexion', (req, res) => {
    res.render('pages/connexion')
})

app.get('/inscription', (req, res) => {
    res.render('pages/inscription')
})

app.get('/boosformulaire', (req, res) => {
    res.render('pages/boosformulaire')
})




app.post('/', function (req, res, next) {
    let data = req.body;
    connection.query(`INSERT INTO panier (id, user_id, item_name, price) VALUES (NULL, '${data.user_id}', '${data.item_name}', '${data.price}');`, (err, result, fields) => { });
    connection.query('SELECT * FROM produits', (err, result, fields) => {
        res.render('pages/index', { produits: result })
    })
})

app.post('/panier', function (req, res, next) {
    let data = req.body;
    connection.query(`INSERT INTO panier (id) VALUES (NULL, '${data.user_id}');`, (err, result, fields) => { });
    connection.query('SELECT * FROM panier', (err, result, fields) => {
        res.render('pages/panier', { panier: result })
    })
})

app.listen('3003');