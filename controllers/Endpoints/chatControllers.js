const chatController = (req, res) => {
    // Reponse a envoyer au client http
    const responseData = {
        message: "Merci d'utiliser ce service pour trouver des reponses",
        status: "success"
    } 
    // Je renvoie le statu e la reponse au format json
    res.status (200).json (responseData)
}

module.exports = {
    chatController
}