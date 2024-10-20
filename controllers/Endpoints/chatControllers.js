const OpenAI = require('openai');
const openai = new OpenAI ({
    apiKey: process.env.API_KEY
})
const chatController = async (req, res) => {
    // Recuperation des donnee du client
    const {userQuestion} = req.body
    // Envoie de la requette a openAI
    await openai.chat.completions.create ({
        model: 'gpt-4o-mini',
        messages: [
            {
                role: "user",
                content: userQuestion,
            }            
        ]
    }).then ((result) => {
        console.log(`Resultat: ${result.choices[0].message}`);
        
        // Reponse a envoyer au client http
        const responseData = {
            message: "Merci d'utiliser ce service pour trouver des reponses",
            result: result.choices[0].message,
            status: "success"
        }         
        // Je renvoie le statu e la reponse au format json
        res.status (200).json (responseData)
    }).catch ((error) => {
        console.log(`Erreur lors de la requette : ${error.message}`);
        res.status(403).json({
            message: 'Desole, vous avez atteint le nombre limite de prompt gratuit, veuillez changer de formule pour continuer',
        });
    }).finally (() => {
        console.log('Nouvelle requette');
        console.log(`Data: ${userQuestion}`);        
    })
}

module.exports = {
    chatController
}