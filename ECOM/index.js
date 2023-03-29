import bodyParser from 'body-parser';
import express from 'express';

// initialisation de l'application Express
const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')






// creation d'une 'route' avec la methode http
//Get dont le chemin est '/'
app.get('/', function(httpRequest, httpResponse) {
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


app.listen('3003');