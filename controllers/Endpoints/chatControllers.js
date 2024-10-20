const chatController = (req, res) => {
    // Reponse a envoyer au client http
    const responseData = {
        message: "Merci d'utiliser ce service pour trouver des reponses",
        result: '',
        status: "success"
    } 
    // Je renvoie le statu e la reponse au format json
    res.status (200).json (responseData)
    console.log('Nouvelle requette');
    
}

module.exports = {
    chatController
}