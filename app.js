const express = require ('express')
const app = express ()
// Importation de cors, permettant les requettes vers un dommaine precis
const cors = require ('cors')
const port = process.env.PORT || 3000
require ('dotenv').config ()

// Je definis les dommaines autorisee a faire des requettes a mon API
app.use (cors ({
    origin: process.env.AUTHORIZED_DOMAIN
}))


// Importation des controlleurs
const {homeController} = require ('./controllers/home/homeController')
const { chatController } = require('./controllers/Endpoints/chatControllers')

// Route principale 
app.get ('/',(req, res) => {
    homeController (req,res)
})

// Route pour le chatbot
app.get ('/learn-with-onek/ai/prompt', (req, res) => {
    chatController (req, res)
})

app.listen (port, () => {
    console.log(`L'api Learn with Onek tourne sur le port ${port}`);
    console.log(`http://localhost:${port}`);

})