const homeController = (req, res) => {
    res.status = 200,
    res.send (` Endpoint: ${req.host}/learn-with-onek/ai/prompt`)
}

module.exports = {
    homeController,
}