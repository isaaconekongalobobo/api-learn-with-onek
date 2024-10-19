const express = require ('express')
require ('dotenv').config ()
const app = express ()
const port = process.env.PORT || 3000

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