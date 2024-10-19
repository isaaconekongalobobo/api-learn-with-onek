const homeController = (req, res) => {
    console.log("Page d'acceuil");
    res.status = 200,
    res.send ('Bienvenue')
}

module.exports = {
    homeController,
}