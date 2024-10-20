const chatController = (req, res) => {
    res.status = 200,
    res.send ('Merci pour la requette')
    console.log('Nouvelle requette');
    
}

module.exports = {
    chatController
}